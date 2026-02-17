import { useState } from 'react';
import { cn } from '../../../lib/utils';

interface PrimaryButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  selectedLabel?: string;
}

export function PrimaryButton({ disabled, label, selectedLabel }: PrimaryButtonProps) {
  const [selected, setSelected] = useState(false);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => !disabled && setSelected((p) => !p)}
      className={cn(
        'rounded-md text-sm button-text tracking-wide transition-all min-w-[160px] flex justify-center items-center',
        selected ?
          'bg-white text-[#51BA7D] border border-[#D1D5DA]'
        : 'bg-[#313237] text-white hover:bg-[#4a4a4a] shadow',
        disabled && 'opacity-50 cursor-not-allowed',
      )}
    >
      {selected ? selectedLabel : label}
    </button>
  );
}
