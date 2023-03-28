<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;


class BlogController extends Controller
{

    public function index(){
        return Inertia::render('Blog/Index', ['blogs' => Blog::all()]);
    }


    public function create(){
        return Inertia::render('Blog/Create');
    }


    public function store(Request $request){
        $request->validate([
            'title' => ['required'],
            'content' => ['required']
        ]);

        Blog::create($request->all());
        return redirect()->route('blogs.index');
    }


    public function destroy(Blog $blog){
        $blog->delete();
        return redirect()->route('blogs.index');
    }


    public function edit(Blog $blog){
        return Inertia::render('Blog/Edit', ['blog' => $blog]);
    }


    public function update(Request $request, Blog $blog){
        $request->validate([
            'title' => ['required'],
            'content' => ['required']
        ]);

        $blog->update($request->all());
        return redirect()->route('blogs.index');
    }

}
