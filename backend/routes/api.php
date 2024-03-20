<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\PointsController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/token', [AuthController::class, 'token']);



Route::post('/points/add', [PointsController::class, 'addPoints']);
Route::apiResource( 'dishes', \App\Http\Controllers\API\DishesController::class);

//TODO: не проходит проверка Sanctum токенов с фронта
Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logOut']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

