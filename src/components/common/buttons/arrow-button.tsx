import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface ArrowButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function ArrowButton({ text = 'Hover', onClick, disabled }: ArrowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const textColor =
    disabled ? '#B4BDC4'
    : isHovered ? '#2C2C2C'
    : '#A0A5AA';
  const iconColor = disabled ? '#B4BDC4' : '#000000';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'none',
        border: 'none',
        color: textColor,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      className={cn(
        'inline-flex items-center gap-1 text-sm font-medium transition-colors',
        isHovered && !disabled && 'font-bold',
      )}
    >
      <ChevronLeft
        className="w-4 h-4 shrink-0"
        style={{ color: iconColor }}
      />
      {text}
    </button>
  );
}
