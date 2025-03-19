<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'image_path',
        'index',
    ];

    public function items()
    {
        return $this->hasMany(MenuItem::class, 'category_id');
    }
}
