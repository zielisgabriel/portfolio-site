"use client";

import { scrollToById } from "@/utils/scroll-to-by-id";
import { JSX, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import clsx from "clsx";
import { Separator } from "./ui/separator";
import { ChevronRightIcon, GlobeIcon, MenuIcon, PaperclipIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

type MobileHeaderProps = {
  navItems: {
    id: string,
    label: string,
    icon: JSX.Element
  }[];
  currentSection: string;
  dict: any;
  currentLocale: string;
}

export function MobileHeader({ navItems, currentSection, dict, currentLocale }: MobileHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  function scrollTo(id: string) {
    scrollToById(id, () => setIsMobileMenuOpen(false));
  }

  return (
    <div className="md:hidden">
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
              <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="cursor-none"
              >
                  <MenuIcon className="h-5 w-5" />
              </Button>
          </SheetTrigger>
          <SheetContent className="z-100 w-72">
              <SheetHeader className="pb-2">
                  <SheetTitle className="text-2xl font-bold">
                      Zielis<span className="text-primary">.</span>
                  </SheetTitle>
              </SheetHeader>

              <Separator />

              <nav className="flex flex-col gap-2 px-2">
                  {navItems.map(item => (
                      <SheetClose asChild key={item.id}>
                          <Button
                              onClick={() => scrollTo(item.id)}
                              variant={currentSection === item.id ? "secondary" : "ghost"}
                              className="w-full justify-between gap-3 h-12 text-base cursor-none"
                          >
                              <div className="flex items-center gap-2">
                                  <span className={clsx(
                                      "p-2 rounded-lg",
                                      currentSection === item.id 
                                          ? "bg-primary/20 text-primary" 
                                          : "bg-muted"
                                  )}>
                                      {item.icon}
                                  </span>
                                  <p>{item.label}</p>
                              </div>
                              <div className="w-20">
                                  {currentSection === item.id && (
                                      <ChevronRightIcon className="ml-auto h-4 w-4 text-primary" />
                                  )}
                              </div>
                          </Button>
                      </SheetClose>
                  ))}
              </nav>

              <Separator />

              <div className="px-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 px-2">
                    {dict.header.language}
                  </p>
                  <div className="flex gap-2">
                      <SheetClose asChild>
                          <Button
                              asChild
                              variant={currentLocale === "pt" ? "secondary" : "ghost"}
                              className="flex-1 cursor-none"
                          >
                              <Link href="/pt">
                                  <span className="text-lg">🇧🇷</span>
                                  Português
                              </Link>
                          </Button>
                      </SheetClose>
                      <SheetClose asChild>
                          <Button
                              asChild
                              variant={currentLocale === "en" ? "secondary" : "ghost"}
                              className="flex-1 cursor-none"
                          >
                              <Link href="/en">
                                  <span className="text-lg">🇺🇸</span>
                                  English
                              </Link>
                          </Button>
                      </SheetClose>
                  </div>
              </div>

              <Separator />

              <div className="px-4">
                  <SheetClose asChild>
                      <Button
                          asChild
                          variant={"outline"}
                          className="w-full cursor-none"
                      >
                          <Link
                              href="https://docs.google.com/document/d/1yMuvbtr0Nx3zqZJLSM_-SZwGLFiD2XCai85EcAqrv9M/edit?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <PaperclipIcon className="h-4 w-4" />
                              {dict.all.view_resume}
                          </Link>
                      </Button>
                  </SheetClose>
              </div>

              <SheetFooter className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground text-center">
                      {dict.all.stack}
                  </p>
                  <Button
                      asChild
                      variant={"outline"}
                      size={"sm"}
                      className="cursor-none"
                  >
                      <Link 
                          href={"https://www.youtube.com/@LilZielis"}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          🎵 {dict.header.my_music_channel}
                      </Link>
                  </Button>
              </SheetFooter>
          </SheetContent>
      </Sheet>
  </div>
  );
}