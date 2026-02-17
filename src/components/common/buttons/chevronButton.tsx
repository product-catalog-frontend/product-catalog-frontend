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
        {
          'border-[#B4BDC4] text-[#B4BDC4] opacity-60 cursor-not-allowed': disabled,
        },
      )}
    >
      <ChevronRight
        className={cn('w-4 h-4', {
          'rotate-180': direction === 'left',
        })}
      />
    </button>
  );
}
