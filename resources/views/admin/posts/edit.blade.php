	@extends('admin.layout')

@section('header')
	<h1>
       Grupos
        <small>Crear grupo</small>
	</h1>
		<ol class="breadcrumb">
		<li><a href=" {{ route('dashboard') }}"><i class="fa fa-dashboard"></i> Inicio</a></li>
		<li><a href=" {{ route('admin.posts.index') }}"><i class="fa fa-list"></i> Grupos</a></li>
		<li class="active">crear</li>
	</ol>
@endsection
@section('content')
<div class="row">
	<div class="col-md-12">
		<div class="box box-primary">
			<div class="box box-body">
				<div class="row">
					@foreach($post->photos as $photo)
					<form method="POST" action="{{ route('admin.photos.destroy', $photo) }}">
						{{ method_field('DELETE') }} {{ csrf_field() }}
						<div class="col-md-3">
							<button class="btn btn-danger btn-xs" style="position:absolute;">
								<i class="fa fa-remove"> </i>
							</button>
							<img  class="img-responsive" src="{{ url($photo->url) }}">
						</div>
					</form>
					@endforeach
				</div>
			</div>
		</div>
	</div>
	<form method="POST" action="{{ route('admin.posts.update', $post) }}">
		{{ csrf_field() }} {{ method_field('put') }}
	<div class="col-xs-12 col-sm-8 col-md-8">
		<div class="box box-primary">
			<div class="box-body">				
				<div class="box-body">
					<div class="form-group {{ $errors->has('ngrupo') ? 'has-error': '' }}">
						<label>Nombre del grupo</label>
						<input name="ngrupo" 
							type="text" 
							class="form-control" 
							value="{{ old('ngrupo', $post->ngrupo) }}" 
							placeholder="Ingresa el nombre del grupo">
						{!! $errors->first('ngrupo', '<span class="help-block">:message</span>') !!}
						
					</div>												
					<div class="form-group {{ $errors->has('body') ? 'has-error': '' }}">
						<label>Contenido del grupo</label>
						<textarea name="body" rows="10" id="editor" class="form-control" placeholder="Ingresa el contenido completo de la publicación">{{ old('body', $post->body) }}</textarea>							
						{!! $errors->first('body', '<span class="help-block">:message</span>') !!}
					</div>
					
				</div>				
			</div>
		</div>
	</div>
	<div class="col-xs-12 col-sm-4 col-md-4">
		<div class="box box-primary">
			<div class="box-body">				
				<div class="form-group {{ $errors->has('representante') ? 'has-error': '' }}">
					<label>Nombre del representante</label>
					<input name="representante" 
						type="text" 
						class="form-control"
						value="{{ old('representante', $post->representante) }}"  
						placeholder="Ingresa el nombre del representante">
					{!! $errors->first('representante', '<span class="help-block">:message</span>') !!}
				</div>		
				<div class="form-group {{ $errors->has('resumen') ? 'has-error': '' }}">
					<label>Resumen</label>
					<textarea name="resumen" 
						class="form-control" 
						placeholder="Ingresa el resumen">{{ old('resumen', $post->resumen) }}</textarea>	
					{!! $errors->first('resumen', '<span class="help-block">:message</span>') !!}	
				</div>
				<div class="form-group {{ $errors->has('municipio') ? 'has-error': '' }}">
					<label>Municipios</label>
					<select name="municipio" class="form-control">
						<option value="">Seleccione un municipio</option>
						@foreach($municipios as $municipio)
							<option value="{{ $municipio->id }}" 
									{{ old('municipio') == $municipio->id ? 'selected' : '' }}
								>{{ $municipio->name }}</option>
						@endforeach
					</select>	
		            {!! $errors->first('municipio', '<span class="help-block">:message</span>') !!}	
		        </div>  
				<div class="form-group">
					<div class="dropzone"></div>
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-primary btn-block">Guardar Grupo</button>
				</div>
			</div>
		</div>
	</div>
	</form>	
</div>

@endsection 
@push('styles')
	<link rel="stylesheet" href="/adminlte/plugins/dropzone/css/dropzone.min.css">
@endpush
@push('scripts')
	<!-- CK Editor -->
	<script src="/adminlte/plugins/ckeditor/ckeditor.js"></script>
	<!--<script src="https://cdn.ckeditor.com/4.8.0/standard/ckeditor.js"></script>-->
	<!-- Dropzone -->
	<script src="/adminlte/plugins/dropzone/js/dropzone.min.js"></script>
	<script>	  		
		    // Replace the <textarea id="editor1"> with a CKEditor
		    // instance, using default configuration.
			CKEDITOR.replace('editor');   
			CKEDITOR.config.height = 315; 	  

		    var myDropzone = new Dropzone('.dropzone', {
		    	url:'/admin/posts/{{ $post->url }}/photos',
		    	paramName: 'photo',
		    	acceptedFiles: 'image/*',		    	
		    	maxFilesize:2,		    	
		    	headers :{
		    		'X-CSRF-TOKEN': '{{ csrf_token() }}'
		    	},		    	
		    	//dictDefaultMessage: 'Arrastra las fotos aquí para subirlas',


		    });
		    

		    myDropzone.on('error', function(file, res){
		    	var msg = res.errors.photo[0];
		    	//console.log(res.errors.photo[0]);
		    	$('.dz-error-message:last> span').text(msg);
		    });

		    Dropzone.autoDiscover = false;

			
			
	</script>
	
@endpush