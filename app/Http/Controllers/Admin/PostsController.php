<?php

namespace App\Http\Controllers\Admin;

use App\Post;
use App\Municipio;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostsController extends Controller
{
    public function index()
    {
    	$posts = Post::all();
        $municipios = Municipio::all();
    	return view('admin.posts.index', compact('posts','municipios'));
    }

    /*public function create()
    {    	
    	$municipios = Municipio::all();

    	return view('admin.posts.create',compact('municipios'));
    } */ 

    public function store(Request $request)
    {

        $this->validate($request, [
            'ngrupo' => 'required',
        ]);


        $post = Post::create([
            'ngrupo' => $request->get('ngrupo'),
            'url' => str_slug($request->get('ngrupo')),
        ]);


        return redirect()->route('admin.posts.edit', compact('post'));
    }

     public function edit(Post $post)
    {   

        $municipios = Municipio::all();

        return view('admin.posts.edit', compact('municipios','post'));
    }
   
    public function update(Post $post, Request $request)
    {
        //Validacion
        $this->validate($request, [
            'ngrupo' => 'required',
            'resumen' => 'required',
            'representante' => 'required',
            'municipio' => 'required',
            'body' => 'required'
        ]);
        
        $post->ngrupo = $request->get('ngrupo');
        $post->url = str_slug($request->get('ngrupo'));
        $post->resumen = $request->get('resumen');
        $post->representante = $request->get('representante');
        $post->municipio_id = $request->get('municipio');
        $post->body = $request->get('body');
        $post->save();

        return redirect()->route('admin.posts.edit', $post)->with('flash', 'El grupo ha sido Guardada');
    }

    public function show(Post  $post)
    {   
    
        return view('posts.show', compact('post'));
    }


}
