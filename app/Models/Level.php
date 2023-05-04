<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Level extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    public function users() {
        return $this->belongsToMany(User::class, 'user_levels')->withPivot('progress');
    }
}
