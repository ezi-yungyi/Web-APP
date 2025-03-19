<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class VerifyEmailController extends Controller
{
  /**
   * Mark the authenticated user's email address as verified.
   */
  public function __invoke(EmailVerificationRequest $request): RedirectResponse
  {
    dd($request);
    $user = $request->getUserInstance();

    if (!$user->hasVerifiedEmail() && $user->markEmailAsVerified()) {
      event(new Verified($user));
    }

    Auth::login($user);

    return redirect(route('profile.view'));
  }
}
