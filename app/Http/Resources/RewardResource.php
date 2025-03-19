<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RewardResource extends JsonResource
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
            'title' => $this->title,
            'description' => $this->description,
            'termsAndConditions' => $this->terms_and_conditions,
            'requiredPoints' => $this->required_points,
            'minimunSpend' => $this->minimun_spend,
            'validDurationYear' => $this->valid_duration_year,
            'validDurationMonth' => $this->valid_duration_month,
            'validDurationDay' => $this->valid_duration_day,
            'type' => $this->type,
            'status' => $this->status,
            'created_at' => Carbon::parse($this->created_at)->format('Y-m-d'),
            'updated_at' => Carbon::parse($this->updated_at)->format('Y-m-d'),
        ];
    }
}
