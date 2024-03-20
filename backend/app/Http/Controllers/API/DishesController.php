<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Dish;
class DishesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return response()->json([Dish::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'header' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'photo' => ['required']
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 401);
        }

        $input = $request->all();
        Dish::create($input);

        return response()->json(['message' =>'Блюдо было добавлено'], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $dish = Dish::find($id);
        if($dish->exists()){
            Dish::destroy($id);
            return response()->json(['message' =>'Блюдо было удалено'], 200);
        }
        return response()->json(['message' =>'Такого бюлда не существует'], 404);

    }
}
