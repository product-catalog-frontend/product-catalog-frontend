import { ChevronRight } from 'lucide-react';
import { cn } from '../../../lib/utils';
import React from 'react';

interface ChevronButtonProps {
  direction?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const ChevronButton: React.FC<ChevronButtonProps> = ({
  direction = 'right',
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'w-10 h-10 flex items-center justify-center rounded-md bg-white transition-colors',
        'border border-black hover:border-2',
        'disabled:border-[#B4BDC4] disabled:text-[#B4BDC4] disabled:opacity-60 disabled:cursor-not-allowed',
        className,
      )}
    >
      <ChevronRight className={cn('w-4 h-4', direction === 'left' && 'rotate-180')} />
    </button>
  );
};
