<?php

namespace App\Http\Controllers;

use App\Municipio;
use App\Post;
use App\Photo;
use Illuminate\Http\Request;

class MunicipiosController extends Controller
{
    public function show(Municipio $municipio)
    {
        //$post = $municipio->post;

        return view('grupos.show', [
            'post' => $municipio->post()->simplePaginate(9)
        ]);
    }    
}
