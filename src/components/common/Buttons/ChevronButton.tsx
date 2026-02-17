import { ChevronRight } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface ChevronButtonProps {
  direction?: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
}

export function ChevronButton({ direction = 'right', onClick, disabled }: ChevronButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'w-10 h-10 flex items-center justify-center rounded-md bg-white transition-colors',
        'border border-black hover:border-2',
        'disabled:border-[#B4BDC4] disabled:text-[#B4BDC4] disabled:opacity-60 disabled:cursor-not-allowed',
      )}
    >
      <ChevronRight className={cn('w-4 h-4', direction === 'left' && 'rotate-180')} />
    </button>
  );
}
