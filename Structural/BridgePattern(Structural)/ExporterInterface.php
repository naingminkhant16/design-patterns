<?php

namespace bridge;

interface ExporterInterface
{
    public function export(array $data): string;
}