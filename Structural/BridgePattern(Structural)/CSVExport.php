<?php

namespace bridge;

class CSVExport implements ExporterInterface
{

    public function export(array $data): string
    {
        var_dump("CSV Exporting...");
        return json_encode($data);
    }
}