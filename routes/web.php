<?php
//vistas del front
Route::get('/', 'PagesController@home' );

Route::get('/mapa', 'PagesController@mapa');
Route::get('/grupos', 'PagesController@grupos');
Route::get('/grupos/{post}', 'PostsController@show');
Route::get('/municipios/{municipio}', 'MunicipiosController@show')->name('municipios');



//vistas del administrador
Route::group([
	'prefix' => 'admin',
	'namespace' => 'Admin',
	'middleware' => 'auth'],
function(){
	//administrador
	Route::get('/', 'AdminController@index')->name('dashboard');
	//posts
	Route::resource('posts','PostsController', ['except' => 'show', 'as' => 'admin']);
	//usuarios
	Route::resource('users','UsersController', ['as' => 'admin']);
	
	//photos
	Route::post('posts/{post}/photos', 'PhotosController@store')->name('admin.posts.photos.store');
	Route::delete('photos/{photo}', 'PhotosController@destroy')->name('admin.photos.destroy');
});

// Authentication Routes...
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
//Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
//Route::post('register', 'Auth\RegisterController@register');
// Password Reset Routes...
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');
