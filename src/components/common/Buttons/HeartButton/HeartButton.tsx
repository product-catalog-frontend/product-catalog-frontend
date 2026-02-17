import { Heart } from 'lucide-react';
import './HeartButton.scss';

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
      className={`heartButton ${selected ? 'selected' : ''}`}
    >
      <Heart className="icon" />
    </button>
  );
}
