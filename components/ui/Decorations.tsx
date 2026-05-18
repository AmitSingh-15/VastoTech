import { cn } from '@/lib/utils';

/**
 * Reusable decorative accents (asset-sheet panel #12)
 * - Pure SVG / Tailwind — no images required.
 */

interface BaseProps {
  className?: string;
}

/** Short solid bar — used under hero headlines and section titles. */
export function AccentBar({
  className,
  color = 'orange',
}: BaseProps & { color?: 'orange' | 'navy' }) {
  return (
    <span
      aria-hidden
      className={cn(
        'block h-1 w-14 rounded-sm',
        color === 'orange' ? 'bg-orange-400' : 'bg-navy-800',
        className,
      )}
    />
  );
}

/** Soft blob — sits behind imagery as a floating accent. */
export function OrangeBlob({ className }: BaseProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 220 120"
      className={cn('text-orange-400', className)}
      fill="currentColor"
    >
      <path d="M0,60 C0,30 30,0 80,0 L160,0 C200,0 220,30 220,60 C220,90 200,120 160,120 L80,120 C30,120 0,90 0,60 Z" />
    </svg>
  );
}

/** Navy curved tab — used as background accent behind hero / footer. */
export function NavyCurve({ className }: BaseProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 240 120"
      className={cn('text-navy-800', className)}
      fill="currentColor"
    >
      <path d="M0,0 L200,0 C224,0 240,16 240,40 L240,80 C240,104 224,120 200,120 L0,120 Z" />
    </svg>
  );
}

/** Diagonal stripe — used in stats bar and CTA strips. */
export function DiagonalStripe({
  className,
  color = 'orange',
  opacity = 1,
}: BaseProps & { color?: 'orange' | 'navy'; opacity?: number }) {
  return (
    <div
      aria-hidden
      style={{ opacity }}
      className={cn(
        '-skew-x-12',
        color === 'orange' ? 'bg-orange-400' : 'bg-navy-800',
        className,
      )}
    />
  );
}

/** Dot grid — used in section corners. */
export function DotGrid({
  className,
  rows = 6,
  cols = 6,
}: BaseProps & { rows?: number; cols?: number }) {
  const dots: React.ReactNode[] = [];
  const gap = 14;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={4 + c * gap}
          cy={4 + r * gap}
          r="1.6"
          fill="currentColor"
        />,
      );
    }
  }
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${cols * gap} ${rows * gap}`}
      className={cn('text-navy-200', className)}
    >
      {dots}
    </svg>
  );
}

/** Flowing wave lines — used as soft footer / hero background detail. */
export function WaveLines({ className }: BaseProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 120"
      className={cn('text-navy-200', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0,80 C100,40 200,100 400,60" />
      <path d="M0,90 C100,50 200,110 400,70" opacity="0.7" />
      <path d="M0,100 C100,60 200,120 400,80" opacity="0.5" />
      <path d="M0,110 C100,70 200,130 400,90" opacity="0.3" />
    </svg>
  );
}

/** Tiny corner flag — used on the About experience badge. */
export function CornerFlag({ className }: BaseProps) {
  return (
    <span
      aria-hidden
      className={cn(
        'absolute -bottom-2 -right-2 h-7 w-7 rounded-md bg-orange-400 shadow',
        className,
      )}
    />
  );
}
