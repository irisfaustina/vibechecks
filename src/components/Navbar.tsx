
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex text-foreground hover:text-vibe-purple transition-colors">
            <a href="#features" onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Features
              </a>
          </Button>
          <Button variant="ghost" className="hidden md:inline-flex text-foreground hover:text-vibe-purple transition-colors">
          <a href="#demo" onClick={(e) => {
                e.preventDefault();
                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Contact
              </a>
          </Button>
          <Button className="bg-gradient-to-r from-vibe-purple to-vibe-orange text-white hover:opacity-90 transition-opacity">
          <a href="#demo" onClick={(e) => {
                e.preventDefault();
                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Get Started
              </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
