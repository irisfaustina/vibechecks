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
          <Button variant="ghost" className="text-foreground hover:text-vibe-purple transition-colors" onClick={() => {
            const section = document.getElementById('coming-soon');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Contact
          </Button>
          <Button className="bg-gradient-to-r from-vibe-purple to-vibe-orange text-white hover:opacity-90 transition-opacity">
            <a href="https://forms.gle/3U1Ad5rreBsyzusRA" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
