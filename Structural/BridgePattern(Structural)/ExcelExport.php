<?php

namespace bridge;

class ExcelExport implements ExporterInterface
{
    public function export(array $data): string
    {
        var_dump("Excel Exporting...");

        return json_encode($data);
    }
}