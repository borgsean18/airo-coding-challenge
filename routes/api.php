<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\QuotationController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::get('/quotation', [QuotationController::class, 'greeting']);
Route::post('/quotation', [QuotationController::class, 'provide_quotation']);