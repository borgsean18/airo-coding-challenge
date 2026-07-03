<?php

namespace App\Services;

class QuotationCalculator
{
    private const FIXED_RATE_PER_DAY = 3;

    private const AGE_LOADS = [
        ['min' => 18, 'max' => 30, 'load' => 0.6],
        ['min' => 31, 'max' => 40, 'load' => 0.7],
        ['min' => 41, 'max' => 50, 'load' => 0.8],
        ['min' => 51, 'max' => 60, 'load' => 0.9],
        ['min' => 61, 'max' => 70, 'load' => 1.0],
    ];

    public function calculate_quotation(array $params): float
    {
        $ages = explode(',', $params['ages']);

        $startDate = new \DateTime($params['start_date']);
        $endDate = new \DateTime($params['end_date']);
        $tripLength = $endDate->diff($startDate)->days + 1;

        $total = 0;

        foreach ($ages as $age) {
            $age = (int) trim($age);
            $load = $this->getAgeLoad($age);
            $total = $total + (self::FIXED_RATE_PER_DAY * $load * $tripLength);
        }

        return round($total, 2);
    }

    private function getAgeLoad(int $age)
    {
        foreach (self::AGE_LOADS as $bracket) {
            if ($age >= $bracket['min'] && $age <= $bracket['max']) {
                return $bracket['load'];
            }
        }

        return 0;
    }
}
