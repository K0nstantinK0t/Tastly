<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Validator;

class PointsController extends Controller
{
    /**
     * Add points for user
     * @param $request Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addPoints(Request $request)
    {

        // validation
        $validator = Validator::make($request->all(), [
            'sum' => ['required', 'string'],
            'phone' => ['required', 'string']
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 401);
        }
        $points = $request->sum / 100 * config('business.cashback');
        $user = User::where('phone_number', $request->phone)->first();
        $user->points = $user->points + $points;
        $user->save();
        return response()->json(['message' => 'Points where added']);

    }
}
