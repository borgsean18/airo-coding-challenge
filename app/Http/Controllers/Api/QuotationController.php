<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\QuotationCalculator;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class QuotationController extends Controller
{
    public function greeting()
    {
        return "Hello world";
    }

    public function provide_quotation(Request $request, QuotationCalculator $calculator)
    {
        $allowed_currencies = ["EUR", "USD", "GBP"];

        $validated = $request->validate([
            'age' => ['required', 'string'],
            'currency_id' => ['required', 'string', Rule::in($allowed_currencies)],
            'start_date' => ['required', 'date_format:Y-m-d'],
            'end_date' => ['required', 'date_format:Y-m-d', 'after:start_date'],
        ]);

        $total = $calculator->calculate_quotation($validated);
        $uniqueQuotationID = uniqid(); // This ID would be saved to a database

        // JSON Response - Total, currency_id, quotation_id
        return response()->json([
            'total' => $total,
            'currency_id' => $validated["currency_id"],
            'quotation_id' => $uniqueQuotationID
        ]);
    }
}
