<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\AdminController;
use App\Http\Controllers\MemberRouteController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ProfileController;

Route::redirect('/',  '/home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::patch('/profile', [ProfileController::class, 'updateEmail'])->name('profile.updateEmail');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/home', [MemberRouteController::class, 'home'])->name('home');
    Route::get('/menu', [MemberRouteController::class, 'menu'])->name('menu');
    Route::get('/reward', [MemberRouteController::class, 'reward'])->name('reward');
    Route::get('/profile/view', [MemberRouteController::class, 'profile'])->name('profile.view');
});

Route::middleware(['auth', 'verified', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/home', [AdminController::class, 'home'])->name('home');
    Route::resource('menu', MenuController::class);
});

require __DIR__ . '/auth.php';
