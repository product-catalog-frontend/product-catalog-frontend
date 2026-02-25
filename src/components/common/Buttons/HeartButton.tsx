import { Heart } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface HeartButtonProps {
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function HeartButton({ selected, onClick, disabled }: HeartButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'w-10 h-10 flex items-center justify-center rounded-md bg-white transition-colors',
        selected ? 'border border-[#E2E6E9]' : (
          'border border-[#E2E6E9] hover:border-2 hover:border-black'
        ),
        disabled && 'opacity-50 cursor-not-allowed',
      )}
    >
      <Heart className={cn('w-5 h-5', selected ? 'fill-[#E74C3C] text-[#E74C3C]' : 'text-black')} />
    </button>
  );
}
