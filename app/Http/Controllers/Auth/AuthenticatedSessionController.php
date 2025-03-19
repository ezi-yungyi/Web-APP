<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/OTPLogin', [
            'status' => session('status'),
            'action' => 'sendOTP',
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse|Response
    {
        $phone = ltrim($request->input('phone'), "0");
        $phone = $request->input('prefix') . (string) $phone;
        $request->merge(['phone' => $phone]);

        $authenticated = $request->authenticate();

        if ($request->input('action') === "sendOTP") {
            if ($authenticated->status() === 200) {
                return Inertia::render('Auth/OTPLogin', [
                    'status' => $authenticated->getData()->message,
                    'action' => 'verifyOTP',
                ]);
            } else {
                return redirect()->route('login')->with('status', 'Authentication failed')->withErrors(['message' => 'Authentication failed.']);
            }
        }

        if ($authenticated->status() === 200) {
            $user = User::where('phone_number', $phone)->first();

            session()->put('phone_number', $phone);

            if ($user) {
                Auth::login($user);
                session()->remove('phone_number');
                $request->session()->regenerate();

                return $user->isAdmin()
                    ? redirect()->route('admin.home')
                    : redirect()->route('home');
            } else {
                return redirect()->route('register');
            }
        }

        return redirect()->route('login')->with('status', 'Invalid OTP')->withErrors(['otp' => 'Invalid OTP.']);
    }


    public function resend(LoginRequest $request)
    {
        $phone = ltrim($request->input('phone'), "0");
        $phone = $request->input('prefix') . (string) $phone;
        $request->merge(['phone' => $phone]);

        return $request->resendOTP();
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
