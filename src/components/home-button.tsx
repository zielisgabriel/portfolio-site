"use client";

import { scrollToById } from "@/utils/scroll-to-by-id";
import { Button } from "./ui/button";

export function HomeButton() {
  return (
    <Button
      variant={"ghost"}
      onClick={() => { scrollToById("home"); }}
      className="font-bold text-xl tracking-tight hover:text-primary transition-colors cursor-none"
    >
      Zielis.
    </Button>
  );
}