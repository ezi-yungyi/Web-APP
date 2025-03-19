<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PointsHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'member_id',
        'title',
        'description',
        'points_change',
    ];

    public function membership()
    {
        return $this->belongsTo(Membership::class, 'member_id');
    }
}
