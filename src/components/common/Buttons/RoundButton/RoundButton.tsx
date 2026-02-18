import styles from './RoundButton.module.scss';

interface RoundButtonProps {
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function RoundButton({ selected, onClick, disabled }: RoundButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${styles.roundButton} ${selected ? styles.selected : ''}`}
    />
  );
}
