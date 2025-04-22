
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10"
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <div className="flex items-center">
          {/* First checkmark - purple */}
          <svg 
            className={cn("text-vibe-purple fill-vibe-purple stroke-white stroke-2", sizeClasses[size])} 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <path 
              d="M8 12l2.5 2.5 5.5-5.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none"
            />
          </svg>
          {/* Second checkmark - orange, offset slightly */}
          <svg 
            className={cn("text-vibe-orange fill-vibe-orange stroke-white stroke-2 -ml-4", sizeClasses[size])} 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <path 
              d="M8 12l2.5 2.5 5.5-5.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none"
            />
          </svg>
        </div>
      </div>
      
      {showText && (
        <span className={cn(
          "font-bold tracking-tight bg-gradient-to-r from-vibe-purple to-vibe-orange bg-clip-text text-transparent",
          {
            "text-lg": size === "sm",
            "text-xl": size === "md",
            "text-2xl": size === "lg"
          }
        )}>
          vibeChecks
        </span>
      )}
    </div>
  );
}
