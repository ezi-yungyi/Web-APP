<?php

namespace App\Http\Resources;

use App\Models\RedeemedReward;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MembershipResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id'=> $this->user_id,
            'level' => $this->level,
            'experience' => $this->experience,
            'points' => $this->points,
            'reward' => RedeemedRewardResource::collection($this->redeemedRewards)->toArray($request),
            'experience_expire' => (new Carbon(time: $this->experience_expire))->format('Y-m-d'),
            'point_expire' => (new Carbon($this->point_expire))->format('Y-m-d'),
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at' => (new Carbon($this->updated_at))->format('Y-m-d'),
        ];
    }
}
