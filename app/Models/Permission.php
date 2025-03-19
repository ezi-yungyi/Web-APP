<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    use HasFactory;

    // ============================ DATABASE [DON'T TOUCH] ============================
    public function user()
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }

    public function access()
    {
        return $this->belongsTo(Access::class, 'access_id');
    }
    // =============================== DATABASE [END] =================================
}
