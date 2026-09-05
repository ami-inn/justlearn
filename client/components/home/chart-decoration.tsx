import { cn } from "@/lib/utils";

interface ChartDecorationProps {
  className?: string;
}

/** Smooth glowing area-chart silhouette, cropped by the bottom of the page. Purely decorative. */
export function ChartDecoration({ className }: ChartDecorationProps) {
  return (
    <div
      aria-hidden
      className={cn("relative h-40 overflow-hidden sm:h-56", className)}
    >
      <svg
        viewBox="0 0 800 240"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary-500)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-primary-500)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-lesson-fg)" />
            <stop offset="55%" stopColor="var(--color-primary-400)" />
            <stop offset="100%" stopColor="var(--color-primary-500)" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Fill under the curve */}
        <path
          d="M0,190 C60,150 100,205 160,170 C220,135 260,90 320,110
             C380,130 420,175 480,150 C540,125 580,60 640,80
             C700,100 740,140 800,120 L800,240 L0,240 Z"
          fill="url(#areaFill)"
        />

        {/* Glowing line on top */}
        <path
          d="M0,190 C60,150 100,205 160,170 C220,135 260,90 320,110
             C380,130 420,175 480,150 C540,125 580,60 640,80
             C700,100 740,140 800,120"
          fill="none"
          stroke="url(#lineStroke)"
          strokeWidth="2.5"
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
}