<?php

namespace bridge;

abstract readonly class Report
{
    public function __construct(protected ExporterInterface $exporter)
    {
    }

    public function export(): void
    {
        var_dump($this->exporter->export($this->getData()));
    }

    abstract protected function getData(): array;
}