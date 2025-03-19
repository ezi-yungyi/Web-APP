<?php

namespace App\Http\Resources;

use App\Models\Membership;
use App\Models\Reward;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RedeemedRewardResource extends JsonResource
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
            'uuid' => $this->uuid,
            'member' => Membership::where('id', $this->member_id)->first(),
            'reward' => Reward::where('id', $this->reward_id)->first(),
            'redeemMethod' => $this->redeem_method,
            'status' => $this->status,
            'receivedDate' => $this->received_date,
            'validUntil' => $this->valid_until,
        ];
    }
}
