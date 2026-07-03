<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\QuotationCalculator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuotationController extends Controller
{
    public function greeting()
    {
        return "Hello world";
    }

    public function provide_quotation(Request $request, QuotationCalculator $calculator)
    {
        $validated = $request->validate([
            'ages' => ['required', 'string'],
            'currency_id' => ['required', 'string', 'size:3', 'regex:/^[A-Z]{3}$/'],
            'start_date' => ['required', 'date_format:Y-m-d'],
            'end_date' => ['required', 'date_format:Y-m-d', 'after:start_date'],
        ]);

        $total = $calculator->calculate_quotation($validated);

        // JSON Response - Total, currency_id, quotation_id
        return response()->json([
            'total' => $total,
            'currency_id' => $validated["currency_id"],
            'quotation_id' => 1
        ]);
    }
}
