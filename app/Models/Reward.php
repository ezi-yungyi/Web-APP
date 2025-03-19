<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reward extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'terms_and_conditions',
        'required_points',
        'minimum_spend',
        'valid_duration_year',
        'valid_duration_month',
        'valid_duration_day',
        'type',
        'status',
        'image_path',
    ];

    public function redeemedRewards()
    {
        return $this->hasMany(RedeemedReward::class);
    }
}
