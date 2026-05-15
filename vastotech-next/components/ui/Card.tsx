import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white shadow-card transition-all duration-300',
        hover && 'hover:-translate-y-1 hover:shadow-card-hover',
        className,
      )}
    >
      {children}
    </div>
  );
}
