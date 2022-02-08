<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth; 

class UserController extends Controller
{

    public function getData(Request $request){
        $token = $request->header('token');
        $user = User::where('remember_token', $token)->first();
        if (!$user) {
            return response()
            ->json(['message' => 'error user not found' ], 400);
        }
        return response()
            ->json(['name' => $user->name ]);
    }

    public function login(Request $request)
    {

        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()
            ->json(['message' => 'error email not found' ], 400);
        }
        $password = $user->password;

        if (!Hash::check($request->password, $password)) {
            return response()
            ->json(['message' => 'error wrong password' ], 400);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        $user->remember_token = $token;
 
        $user->save();

        return response()
            ->json(['message' => 'Hi '.$user->name.', welcome to home','access_token' => $token, 'token_type' => 'Bearer', ]);
    }

    // method for user logout and delete token
    public function logout(Request $request){

        $token = $request->header('token');
        $user = User::where('remember_token', $token)->first();

        $user->remember_token = null;
 
        $user->save();

        return response()
            ->json([
                'message' => 'You have successfully logged out and the token was successfully deleted',
                'access_token'=>null
            ]);
    }
}
