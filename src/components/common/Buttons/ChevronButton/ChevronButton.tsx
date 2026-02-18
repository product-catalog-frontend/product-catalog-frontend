import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ChevronButton.module.scss';

interface ChevronButtonProps {
  direction?: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

export function ChevronButton({
  direction = 'right',
  onClick,
  disabled,
  ariaLabel,
}: ChevronButtonProps) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || direction}
      className={styles.chevronButton}
    >
      <Icon className={styles.icon} />
    </button>
  );
}
