import { useState } from 'react';
import { cn } from '../../../lib/utils';

interface NumberButtonProps {
  number: number;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function NumberButton({ number, selected, onClick, disabled }: NumberButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getStyles = () => {
    if (selected) {
      return {
        background: '#313237',
        color: 'white',
        border: '1px solid #313237',
      };
    }
    return {
      background: 'white',
      color: 'black',
      border: isHovered ? '1px solid #000' : '1px solid #B4BDC4',
    };
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={getStyles()}
      className={cn(
        'w-10 h-10 flex items-center justify-center font-medium text-sm transition-colors rounded-md',
      )}
    >
      {number}
    </button>
  );
}
