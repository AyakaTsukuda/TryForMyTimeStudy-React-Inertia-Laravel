<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;


class BlogController extends Controller
{

    public function index(Request $request){

        // search
        $keyword = !empty($request->input('search')) ? $request->input('search') : "";

        if(!empty($keyword)){
            $blogs = Blog::where('title', 'LIKE', '%'.$keyword.'%')
                ->orWhere('content', 'LIKE', '%'.$keyword.'%')
                ->orderBy('created_at', 'desc')
                ->paginate(10);

        } else {
            $blogs = Blog::orderBy('created_at', 'desc')->paginate(10);
        }

        return Inertia::render('Blog/Index', ['blogs' => $blogs,'search' => $keyword]);
    }


    public function create(){
        return Inertia::render('Blog/Form', ['blog' => false]);
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
        return Inertia::render('Blog/Form', ['blog' => $blog]);
    }


    public function update(Request $request, Blog $blog){
        $request->validate([
            'title' => ['required'],
            'content' => ['required']
        ]);

        $blog->update($request->all());
        return redirect()->route('blogs.index');
    }


    public function publish_settings($blog_id){
        $blog = Blog::findOrFail($blog_id);
        return Inertia::render('Blog/PublishSettings', ['blog' => $blog]);
    }

}
