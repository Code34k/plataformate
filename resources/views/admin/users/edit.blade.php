@extends('admin.layout')
@section('content')
<div class="row">
    <div class="col-md-6">
        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">Datos personales</h3>
            </div>
            <div class="box-body">
                <form method="POST" action="{{ route('admin.users.update') }}"></form>
            </div>
        </div>
    </div>
</div>
@endsection