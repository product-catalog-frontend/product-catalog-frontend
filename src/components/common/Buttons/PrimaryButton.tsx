import { cn } from '../../../lib/utils';

interface PrimaryButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  selectedLabel?: string;
  isSelected?: boolean;
}

export function PrimaryButton({
  disabled,
  label,
  selectedLabel,
  onClick,
  isSelected,
}: PrimaryButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'rounded-md text-sm button-text tracking-wide transition-all min-w-[160px] flex justify-center items-center',
        isSelected ?
          'bg-white text-[#51BA7D] border border-[#D1D5DA]'
        : 'bg-[#313237] text-white hover:bg-[#4a4a4a] shadow',
        disabled && 'opacity-50 cursor-not-allowed',
      )}
    >
      {isSelected ? selectedLabel : label}
    </button>
  );
}
