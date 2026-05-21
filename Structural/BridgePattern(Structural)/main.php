<?php

namespace bridge;

include './include_all.php';

$salesReportExcel = new SalesReport(new ExcelExport());
$salesReportExcel->export();

$salesReportCSV = new SalesReport(new CSVExport());
$salesReportCSV->export();