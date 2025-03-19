<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Access extends Model
{
    use HasFactory;
    
    public $timestamps = false;
    
    // ============================ DATABASE [DON'T TOUCH] ============================
    public function permissions() 
    {
        return $this->hasMany(Access::class, 'access_id');
    }
    // =============================== DATABASE [END] =================================
}
