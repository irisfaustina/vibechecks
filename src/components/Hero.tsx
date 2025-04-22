
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCheck } from "lucide-react";
import { HeroImage } from "./HeroImage";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn("py-20 md:py-28 overflow-hidden relative", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl mx-auto">
              Understand your AI code in{" "}
              <span className="bg-gradient-to-r from-vibe-purple to-vibe-blue bg-clip-text text-transparent">
                plain English
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              vibeChecks helps non-technical builders decode AI-generated codebases and get their apps 
              production-ready with simple, human explanations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
            <Button size="lg" className="bg-gradient-to-r from-vibe-purple to-vibe-orange hover:opacity-90 text-white">
              Join Waitlist
            </Button>
            <Button size="lg" variant="outline" className="border-vibe-purple text-vibe-purple hover:bg-vibe-purple-light">
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground mt-6">
            <CheckCheck className="h-5 w-5 text-vibe-purple" />
            <span>No coding experience required</span>
          </div>
          
          <HeroImage className="mt-10" />
        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute -z-10 top-1/3 -left-64 w-96 h-96 rounded-full bg-vibe-purple/10 blur-3xl" />
      <div className="absolute -z-10 bottom-1/4 -right-64 w-96 h-96 rounded-full bg-vibe-orange/10 blur-3xl" />
    </section>
  );
}
