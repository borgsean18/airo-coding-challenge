<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuotationController extends Controller
{
    public function provide_quotation(Request $request)
    {
        $validated = $request->validate([
            'ages' => ['required', 'string'],
            'currency_id' => ['required', 'string', 'size:3', 'regex:/^[A-Z]{3}$/'],
            'start_date' => ['required', 'date_format:Y-m-d'],
            'end_date' => ['required', 'date_format:Y-m-d', 'after:start_date'],
        ]);

        $result = "Calculation Completed";

        return response()->json([
            'status' => 'success',
            'data' => $result,
            'validated_params' => $validated
        ]);
    }
}
