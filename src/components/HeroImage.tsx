import { cn } from "@/lib/utils";

interface HeroImageProps {
  className?: string;
}

export function HeroImage({ className }: HeroImageProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-3xl mx-auto mt-8 md:mt-16 px-4 sm:px-6",
        className
      )}
    >
      <div className="rounded-lg overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-br from-vibe-purple/5 to-vibe-orange/5 backdrop-blur-sm">
        <div className="relative aspect-[10/8] sm:aspect-[16/9] overflow-hidden" id="features">
          {/* Code Editor Mock */}
          <div className="absolute inset-0 bg-gray-900 text-white p-3 sm:p-4 font-mono text-xs sm:text-sm" >
            <div className="h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-white/70">app.js</span>
            </div>

            <div className="space-y-2 text-left flex-1 overflow-y-auto">
              {" "}
              {/* Added text-left here */}
              <div className="flex">
                <span className="text-blue-400 mr-4">import</span>
                <span className="text-yellow-300">&#123; useState &#125;</span>
                <span className="text-blue-400 mx-1">from</span>
                <span className="text-green-400">&apos;react&apos;</span>
                <span>;</span>
              </div>
              <div className="flex">
                <span className="text-blue-400 mr-4">import</span>
                <span className="text-yellow-300">axios</span>
                <span className="text-blue-400 mx-1">from</span>
                <span className="text-green-400">&apos;axios&apos;</span>
                <span>;</span>
              </div>
              <br></br>
              <div className="mt-4">
                <span className="text-purple-400">const</span>
                <span className="text-yellow-300 mx-1">App</span>
                <span className="mx-1">=</span>
                <span className="text-yellow-300">() =&gt;</span>
                <span className="mx-1">&#123;</span>
              </div>
              <div className="ml-4">
                <span className="text-purple-400">const</span>
                <span className="mx-1">[</span>
                <span className="text-yellow-300">data</span>
                <span>,</span>
                <span className="text-yellow-300 ml-1">setData</span>
                <span className="mx-1">] =</span>
                <span className="text-yellow-300">useState</span>
                <span>(null);</span>
              </div> 
              <br></br>
              {/* Explanation overlay */}
              <div className="bg-white/95 dark:bg-black/80 p-6 sm:p-8 rounded-md shadow-lg border border-vibe-purple/30 backdrop-blur-sm mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-4 rounded-full bg-vibe-purple flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-vibe-purple font-medium">
                    vibeChecker
                  </span>
                </div>
                <p className="text-gray-800 dark:text-gray-200 text-sm">
                  This code uses React to build app and Axios to get data from
                  the internet. It starts with no data, but will fill in once
                  the information is received.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-vibe-purple rounded-full blur-xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 bg-vibe-orange rounded-full blur-xl opacity-20 animate-pulse-slow"></div>
    </div>  );
}
