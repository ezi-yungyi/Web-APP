<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class RedeemedReward extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = [
        'uuid',
        'member_id',
        'reward_id',
        'redeem_method',
        'status',
        'received_date',
        'valid_until',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($redeemedReward) {
            if (empty($redeemedReward->uuid)) {
                $redeemedReward->uuid = Uuid::uuid4()->toString();
            }
        });
    }

    public function membership()
    {
        return $this->belongsTo(Membership::class, 'member_id');
    }

    public function reward()
    {
        return $this->belongsTo(Reward::class);
    }
}
