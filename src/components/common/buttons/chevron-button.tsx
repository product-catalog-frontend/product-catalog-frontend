import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface ChevronButtonProps {
  direction?: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
}

export function ChevronButton({ direction = 'right', onClick, disabled }: ChevronButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getStyles = () => {
    if (disabled) {
      return {
        background: 'white',
        color: '#B4BDC4',
        border: '1px solid #B4BDC4',
      };
    }
    return {
      background: 'white',
      color: 'black',
      border: isHovered ? '2px solid #000' : '1px solid #000',
    };
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={getStyles()}
      className={cn(
        'w-10 h-10 flex items-center justify-center transition-colors rounded-md',
        disabled && 'cursor-not-allowed opacity-60',
      )}
    >
      <ChevronRight className={cn('w-4 h-4', direction === 'left' && 'rotate-180')} />
    </button>
  );
}
