import { useState } from 'react';
import './PrimaryButton.scss';

interface PrimaryButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export function PrimaryButton({ disabled }: PrimaryButtonProps) {
  const [selected, setSelected] = useState(false);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => !disabled && setSelected((p) => !p)}
      className={`primaryButton ${selected ? 'selected' : ''}`}
    >
      {selected ? 'Selected' : 'Primary'}
    </button>
  );
}
