<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemAttribute extends Model
{
    use HasFactory;

    protected $fillable = [
        'item_id',
        'variable',
        'price',
    ];

    public function item()
    {
        return $this->belongsTo(MenuItem::class, "item_id");
    }
}
