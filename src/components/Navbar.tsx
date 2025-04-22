
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn("w-full border-b bg-background/80 backdrop-blur-sm z-10", className)}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="flex items-center gap-4">
          <Button variant="ghost" className="text-foreground hover:text-vibe-purple transition-colors">
            About
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-vibe-purple transition-colors">
            Features
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-vibe-purple transition-colors">
            Contact
          </Button>
          <Button className="bg-gradient-to-r from-vibe-purple to-vibe-orange text-white hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}
