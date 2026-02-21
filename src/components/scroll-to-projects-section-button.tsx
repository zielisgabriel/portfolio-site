"use client"

import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

interface ScrollToProjectsSectionButtonProps {
  dict: any
}

export function ScrollToProjectsSectionButton({ dict }: ScrollToProjectsSectionButtonProps) {
  return (
    <Button
        size="lg"
        className="cursor-none"
        onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        }}
    >
        {dict.home.view_projects}
        <ArrowDown className="h-4 w-4" />
    </Button>
  )
}