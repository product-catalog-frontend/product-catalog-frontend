import styles from './NumberButton.module.scss';

interface NumberButtonProps {
  number: number;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function NumberButton({ number, selected, onClick, disabled }: NumberButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${styles.numberButton} ${selected ? styles.selected : ''}`}
    >
      {number}
    </button>
  );
}
