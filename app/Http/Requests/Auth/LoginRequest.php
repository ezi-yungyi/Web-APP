<?php

namespace App\Http\Requests\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Twilio\Rest\Client;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'action' => ['required', 'string'],
            'phone' => ['required', 'string', 'min:9', 'max:11'],
            'otp' => ['nullable', 'integer'],
        ];
    }

    /**
     * Attempt to authenticate the request's credentials.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function authenticate()
    {
        if ($this->input('resend')) $this->resendOTP();

        if ($this->input('action') === 'sendOTP' && Cache::get("otp_{$this->input('phone')}")) {
            return response()->json([
                'type' => 'phone',
                'status' => 'success',
                'message' => 'OTP has been sent to your WhatsApp number just now.'
            ], 200);
        } elseif ($this->input('action') === 'sendOTP') {
            return $this->sendOtp();
        } elseif ($this->input('action') === 'verifyOTP') {
            return $this->verifyOtp();
        }
    }

    public function resendOTP()
    {
        try {
            $otp = Cache::get(key: "otp_{$this->input('phone')}");
            $expiresAt = $otp ? $otp['expires_at'] : now();
            if (now()->addMinutes(4.55) > $expiresAt) {
                $this->sendOtp();
                return response()->json([
                    'type' => 'otp',
                    'status' => 'success',
                    'message' => 'OTP has been resend.'
                ], 200);;
            }
        } catch (\Exception $e) {
            return response()->json([
                'type' => 'otp',
                'status' => 'error',
                'message' => "Failed to resend OTP. Please try again later."
            ], 500);
        }
    }

    protected function sendOtp()
    {
        try {
            Cache::forget("otp_{$this->input('phone')}");

            $otp = rand(100000, 999999);
            $formatedOTP = substr($otp, 0, 3) . "-" . substr($otp, 3, 3);

            $expiresAt = now()->addMinutes(5);
            value:
            Cache::put("otp_{$this->input('phone')}", ['otp' => $otp, 'expires_at' => $expiresAt], $expiresAt);

            $twilio = new Client(config('app.twilio.sid'), config('app.twilio.token'));
            $twilio->messages->create(
                'whatsapp:' . $this->input('phone'),
                [
                    'from' => config('app.twilio.sender'),
                    'body' => "[*$formatedOTP*] is your OTP. For your security, do not share this code.",
                ]
            );

            return response()->json([
                'type' => 'phone',
                'status' => 'success',
                'message' => 'OTP has been sent to your WhatsApp number.'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'type' => 'phone',
                'status' => 'error',
                'message' => "Failed to send OTP. Please try again later."
            ], 500);
        }
    }

    protected function verifyOtp()
    {
        if (Cache::get(key: "otp_{$this->input('phone')}") && $this->input('otp') === (string)Cache::get("otp_{$this->input('phone')}")['otp']) {
            Cache::forget("otp_{$this->input('phone')}");
            return response()->json([
                'type' => 'otp',
                'status' => 'success',
                'message' => 'OTP verified successfully.'
            ], 200);
        }

        return response()->json([
            'type' => 'otp',
            'status' => 'error',
            'message' => 'Invalid OTP code.'
        ], 500);
    }

    /**
     * Ensure the login request is not rate limited.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited(): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'email' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Get the rate limiting throttle key for the request.
     */
    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower($this->string('email')) . '|' . $this->ip());
    }
}
