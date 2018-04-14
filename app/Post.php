<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
 	    protected $guarded = [];

	//retorna el municipio asosciados a los post
 	 public function municipio()
 	 {
 	 	return $this->belongsTo(Municipio::class);
 	 }
	//retorna las fotos asosciados a los post
 	 public function photos()
 	 {
 	 	return $this->hasMany(Photo::class);
 	 }


    //retorno el nombre del grupo
    public function getRouteKeyName()
    {
    	return 'url';
    }
}
