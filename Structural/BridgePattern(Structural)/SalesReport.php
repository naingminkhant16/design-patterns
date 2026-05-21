<?php

namespace bridge;

final readonly class SalesReport extends Report
{
    protected function getData(): array
    {
        return [
            'January' => '1500',
            'February' => '2500',
            'March' => '2000',
        ];
    }
}