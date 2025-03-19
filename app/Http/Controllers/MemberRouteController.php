<?php

namespace App\Http\Controllers;

use App\Http\Resources\MenuCategoryResource;
use App\Http\Resources\PosterResource;
use App\Http\Resources\RedeemedRewardResource;
use App\Http\Resources\RewardResource;
use App\Http\Resources\UserResource;
use App\Models\MenuCategory;
use App\Models\Poster;
use App\Models\RedeemedReward;
use App\Models\Reward;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MemberRouteController extends Controller
{
    public function home(Request $request)
    {
        $poster = PosterResource::collection(Poster::get())->toArray($request);
        
        return Inertia::render('Home', [
            'user' => new UserResource($request->user()),
            'poster' => $poster,
        ]);
    }

    public function menu(Request $request)
    {
        $menu = MenuCategoryResource::collection(MenuCategory::with('items')->get())->toArray($request);
        
        return Inertia::render('Menu', [
            'user' => new UserResource($request->user()),
            'menu' => $menu,
        ]);
    }

    public function reward(Request $request)
    {
        $reward = RewardResource::collection(Reward::get())->toArray($request);
        $redeemedReward = RedeemedRewardResource::collection(RedeemedReward::get())->toArray($request);
        
        return Inertia::render('Reward', [
            'user' => new UserResource($request->user()),
            'reward' => $reward,
            'redeemedReward' => $redeemedReward,
        ]);
    }

    public function profile(Request $request)
    {
        return Inertia::render('Profile', [
            'user' => new UserResource($request->user()),
        ]);
    }
}
