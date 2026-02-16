import { useState } from 'react';
import { cn } from '../../../lib/utils';

interface PrimaryButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export function PrimaryButton({ disabled }: PrimaryButtonProps) {
  const [selected, setSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getStyles = () => {
    if (selected) {
      return {
        padding: '10px 61px',
        background: 'white',
        color: '#51BA7D',
        border: '1px solid #D1D5DA',
      };
    }

    return {
      padding: '10px 61px',
      background: isHovered ? '#4a4a4a' : '#313237',
      color: 'white',
      border: 'none',
      boxShadow: isHovered ? '0 2px 8px rgba(0,0,0,0.2)' : '0 1px 4px rgba(0,0,0,0.15)',
    };
  };

  const handleClick = () => {
    if (!disabled) {
      setSelected((prev) => !prev);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={getStyles()}
      className={cn(
        'rounded-md font-semibold text-sm uppercase tracking-wide transition-all',
        disabled && 'cursor-not-allowed opacity-50',
      )}
    >
      {selected ? 'Selected' : 'Primary'}
    </button>
  );
}
