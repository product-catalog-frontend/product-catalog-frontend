import { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface HeartButtonProps {
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function HeartButton({ selected, onClick, disabled }: HeartButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getStyles = () => {
    if (selected) {
      return {
        background: 'white',
        border: '1px solid #E2E6E9',
      };
    }
    return {
      background: 'white',
      border: isHovered ? '2px solid #000' : '1px solid #E2E6E9',
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
        disabled && 'cursor-not-allowed opacity-50',
      )}
    >
      <Heart
        className="w-5 h-5"
        style={{
          fill: selected ? '#E74C3C' : 'none',
          color: selected ? '#E74C3C' : 'black',
        }}
      />
    </button>
  );
}
