import { cn } from '../../../lib/utils';

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
      className={cn(
        'w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-[#F7E5D1]',
        selected ? 'border-2 border-black' : (
          'border border-[#B4BDC4] hover:border-2 hover:border-[#8E8E93]'
        ),
        disabled && 'opacity-50 cursor-not-allowed',
      )}
    />
  );
}
