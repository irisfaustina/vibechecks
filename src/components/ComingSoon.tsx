
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCheck } from "lucide-react";

interface ComingSoonProps {
  className?: string;
}

export function ComingSoon({ className }: ComingSoonProps) {
  return (
    <section className={cn("py-16 bg-vibe-purple-light", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-sm animate-pulse-slow">
            <CheckCheck className="h-8 w-8 text-vibe-purple" />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're putting the finishing touches on vibeChecks. Sign up for our waitlist 
              to be one of the first to experience it.
            </p>
          </div>
          
          <div className="w-full max-w-md mx-auto flex flex-col sm:flex-row items-stretch gap-3">
            <Button asChild size="lg" className="bg-gradient-to-r from-vibe-purple to-vibe-orange hover:opacity-90 text-white flex-1">
              <a href="https://forms.gle/3U1Ad5rreBsyzusRA" target="_blank" rel="noopener noreferrer">
                Join Waitlist
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-center">
            <div className="flex items-center gap-2">
              <CheckCheck className="h-4 w-4 text-vibe-purple" />
              <span>Early Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCheck className="h-4 w-4 text-vibe-purple" />
              <span>Special Launch Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCheck className="h-4 w-4 text-vibe-purple" />
              <span>Exclusive Beta Features</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
