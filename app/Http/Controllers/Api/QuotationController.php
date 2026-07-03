<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class QuotationController extends Controller
{
    public function calculate(Request $request)
    {
        $data = $request->only(['age', 'currency_id', 'start_date', 'end_date']);

        return response()->json($data);
    }
}
