<?php

use App\Http\Controllers\Api\QuotationController;
use Illuminate\Support\Facades\Route;

Route::get('/quotation', [QuotationController::class, 'greeting']);
Route::post('/quotation', [QuotationController::class, 'provide_quotation']);