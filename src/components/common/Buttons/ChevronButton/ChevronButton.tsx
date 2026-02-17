import { ChevronRight } from 'lucide-react';
import './ChevronButton.scss';

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
      className="chevronButton"
    >
      <ChevronRight className={`icon ${direction === 'left' ? 'iconLeft' : ''}`} />
    </button>
  );
}
