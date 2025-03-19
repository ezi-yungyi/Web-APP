<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Membership;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        if (session()->get('phone_number')) {
            if (User::where('phone_number', session()->get('phone_number'))) {
                return Inertia::render('Auth/Register');
            } else {
                return Inertia::render('dashboard');
            }
        } else {
            return Inertia::render('Auth/OTPLogin', [
                'status' => session('status'),
                'action' => 'sendOTP',
            ]);
        }
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        (!$request->input('phone')) &&
            $request->merge(['phone' => session()->get('phone_number')]);

        $request->validate([
            'phone' => 'required|string|max:13',
            'name' => 'required|string|max:255',
            'gender' => 'required|string|in:Male,Female,RatherNotShare',
            'dob' => 'required|date',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
        ]);

        $user = User::create([
            'name' => $request->name,
            'phone_number' => $request->phone,
            'gender' => $request->gender,
            'date_of_birth' => new Carbon($request->dob),
            'email' => $request->email,
        ]);

        Membership::create([
            'user_id' => $user->id,
            'level' => 'Brownze',
            'experience' => 0,
            'points' => 0,
            'experience_expire' => Carbon::now(),
            'point_expire' => Carbon::now(),
        ]);

        session()->remove('phone_number');

        // event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
