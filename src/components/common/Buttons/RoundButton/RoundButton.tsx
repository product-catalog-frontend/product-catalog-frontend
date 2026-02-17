import './RoundButton.scss';

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
      className={`roundButton ${selected ? 'selected' : ''}`}
    />
  );
}
