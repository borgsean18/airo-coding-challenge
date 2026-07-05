<?php

use App\Http\Controllers\QuotationController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->group(function () {
    Route::get('/quotation', [QuotationController::class, 'greeting']);
    Route::post('/quotation', [QuotationController::class, 'provide_quotation']);
});
