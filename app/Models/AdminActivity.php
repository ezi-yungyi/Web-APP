<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminActivity extends Model
{
    use HasFactory;
    public $timestamps = false;

    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }
}
