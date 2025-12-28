"use client";

import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface PaginationProps {
  page: number,
  totalPages: number,
  onPrev: () => void,
  onNext: () => void
}

export function Pagination({
  page,
  totalPages,
  onPrev,
  onNext
}: PaginationProps) {

  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon-sm"
        variant={"outline"}
        onClick={onPrev}
        disabled={page === 1}
      >
        <ChevronLeftIcon />
      </Button>

      <span className="text-sm opacity-80">
        Página {page} de {totalPages}
      </span>

      <Button
        size="icon-sm"
        variant={"outline"}
        onClick={onNext}
        disabled={page === totalPages}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );  
}