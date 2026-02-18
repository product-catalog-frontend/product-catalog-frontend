import { ChevronLeft } from 'lucide-react';
import styles from './ArrowButton.module.scss';

interface ArrowButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

export function ArrowButton({ text = 'Hover', onClick, disabled, ariaLabel }: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || text}
      className={styles.arrowButton}
    >
      <ChevronLeft className={styles.arrowIcon} />
      {text}
    </button>
  );
}
