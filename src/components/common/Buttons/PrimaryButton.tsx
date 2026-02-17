import { useState } from 'react';
import { cn } from '../../../lib/utils';

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
      className={cn(
        'rounded-md font-semibold text-sm uppercase tracking-wide transition-all px-[61px] py-[10px]',
        selected ?
          'bg-white text-[#51BA7D] border border-[#D1D5DA]'
        : 'bg-[#313237] text-white hover:bg-[#4a4a4a] shadow',
        disabled && 'opacity-50 cursor-not-allowed',
      )}
    >
      {selected ? 'Selected' : 'Primary'}
    </button>
  );
}
