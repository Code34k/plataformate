<?php

namespace App\Http\Controllers\Admin;

use App\Post;
use App\Municipio;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;

class PostsController extends Controller
{
    public function index()
    {
    	$posts = Post::all();
        $municipios = Municipio::all();
    	return view('admin.posts.index', compact('posts','municipios'));
    }

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
   
    public function update(Post $post, StorePostRequest $request)
    {        
        $post->update($request->all());   

        return redirect()->route('admin.posts.edit', $post)->with('flash', 'El grupo ha sido Actualizado');
    }

    public function show(Post  $post)
    {       
        return view('posts.show', compact('post'));
    }
    
    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->route('admin.posts.index')->with('flash', 'El grupo ha sido eliminado');
    }


}
