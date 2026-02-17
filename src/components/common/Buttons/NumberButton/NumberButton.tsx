import './NumberButton.scss';

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
      className={`numberButton ${selected ? 'selected' : ''}`}
    >
      {number}
    </button>
  );
}
