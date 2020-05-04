@extends('Layout.app')


@section('title','Laravel Axios Multipul File Uploader')


@section('content')
<div class="container-fluid mt-5">
    <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Laravel Axios Multipul File Uploader</h4>
                    </div>
                    <div class="card-body">
                            <button class="btn addBtn btn-primary my-3 btn-sm">Add File</button>
                            <table class="table table-striped">
                                <thead>
                                        <tr>
                                            <th>File</th>
                                            <th>File Size</th>
                                            <th>Cancel</th>
                                            <th>Upload</th>
                                            <th>Uploaded(MB)</th>
                                            <th>Uploaded(%)</th>
                                            <td>Status</td>
                                        </tr>
                                </thead>
                                <tbody class="fileList">

                                </tbody>
                            </table>

                    </div>
                </div>

            </div>
    </div>
</div>

@endsection
