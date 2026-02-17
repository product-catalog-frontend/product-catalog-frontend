import { cn } from '../../../lib/utils';

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
      className={cn(
        'w-10 h-10 flex items-center justify-center rounded-md font-medium text-sm transition-colors',
        selected ?
          'bg-[#313237] text-white border border-[#313237]'
        : 'bg-white text-black border border-[#B4BDC4] hover:border-black',
        disabled && 'opacity-50 cursor-not-allowed',
      )}
    >
      {number}
    </button>
  );
}
