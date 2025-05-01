
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn("sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50", className)}>
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="font-semibold text-lg hidden md:inline-block">vibeChecks</span>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" className="text-foreground hover:text-vibe-purple transition-colors">
            <NavLink to="/app" end>Dashboard</NavLink>
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-vibe-purple transition-colors">
            <NavLink to="/app/job-posting">Job Posting</NavLink>
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-vibe-purple transition-colors">
            <NavLink to="/app/course">Course</NavLink>
          </Button>
        </nav>
      </div>
    </header>
  );
}
