<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'level',
        'experience',
        'points',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function pointsHistories()
    {
        return $this->hasMany(PointsHistory::class);
    }

    public function redeemedRewards()
    {
        return $this->hasMany(RedeemedReward::class, 'member_id');
    }
}