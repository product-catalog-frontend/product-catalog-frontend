import { useState } from 'react';
import { cn } from '../../../lib/utils';

interface RoundButtonProps {
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function RoundButton({ selected, onClick, disabled }: RoundButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getStyles = () => {
    const baseBg = '#F7E5D1';
    if (selected) {
      return {
        background: baseBg,
        border: '2px solid #000',
      };
    }
    return {
      background: baseBg,
      border: isHovered ? '2px solid #8E8E93' : '1px solid #B4BDC4',
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
        'w-10 h-10 rounded-full flex items-center justify-center transition-colors',
        disabled && 'cursor-not-allowed opacity-50',
      )}
    />
  );
}
