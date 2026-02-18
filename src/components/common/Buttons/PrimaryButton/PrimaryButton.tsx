import { useState } from 'react';
import styles from './PrimaryButton.module.scss';

interface PrimaryButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export function PrimaryButton({ onClick, disabled }: PrimaryButtonProps) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setSelected((p) => !p);
      onClick?.();
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={`${styles.primaryButton} ${selected ? styles.selected : ''}`}
    >
      {selected ? 'Selected' : 'Primary'}
    </button>
  );
}
