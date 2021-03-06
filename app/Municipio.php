<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Municipio extends Model
{
    //retorno el nombre del grupo
    public function getRouteKeyName()
    {
    	return 'name';
    }

    //retorna los post asosciados al municipio
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
    
    public function photos()
    {
        return $this->hasMany(Photo::class);
    }
}
