<?php

use App\Http\Controllers\Api\QuotationController;
use Illuminate\Support\Facades\Route;

Route::get('/greeting', function () {
    return response()->json([
        'message' => 'hello world'
    ]);
});

Route::apiResource('quotation', QuotationController::class);