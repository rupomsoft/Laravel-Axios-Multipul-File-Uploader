<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    function onUpload(Request $request){
      $request->file('FileKey')->store('MyFile');
    }
}
