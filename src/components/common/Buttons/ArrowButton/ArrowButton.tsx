import { ChevronLeft } from 'lucide-react';
import './ArrowButton.scss';

interface ArrowButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function ArrowButton({ text = 'Hover', onClick, disabled }: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="arrowButton"
    >
      <ChevronLeft className="arrowIcon" />
      {text}
    </button>
  );
}
