import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { HomeButton } from "./home-button";
import { Button } from "./ui/button";

type FooterProps = {
    dict: any
}

export function Footer({ dict }: FooterProps) {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <HomeButton />
                        <p className="text-sm text-muted-foreground mt-1">
                            © {currentYear} Zielis Gabriel. {dict.footer.copyright}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            size={"icon"}
                            variant={"ghost"}
                            asChild
                        >
                            <Link
                                href="https://github.com/zielisgabriel"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <GitHubLogoIcon className="h-8 w-8" />
                            </Link>
                        </Button>
                        <Button
                            size={"icon"}
                            variant={"ghost"}
                            asChild
                        >
                            <Link
                                href="https://www.linkedin.com/in/josgabrielalmeida/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <LinkedInLogoIcon className="h-8 w-8" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}