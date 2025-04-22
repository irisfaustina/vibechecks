
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn("border-t py-8 bg-background", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-muted-foreground text-sm">
            <p>© {currentYear} vibeChecks. All rights reserved.</p>
            <div className="flex gap-4">
{/*               <a href="#" className="hover:text-vibe-purple transition-colors">Privacy</a>
              <a href="#" className="hover:text-vibe-purple transition-colors">Terms</a>
              <a href="#" className="hover:text-vibe-purple transition-colors">Contact</a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
