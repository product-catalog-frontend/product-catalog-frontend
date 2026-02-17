import { cn } from '../../../lib/utils';
import { Icon } from '../../common/Icon';

interface ArrowButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function ArrowButton({ text = 'Hover', onClick, disabled }: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn('inline-flex items-center gap-1 text-sm font-medium transition-colors', {
        'text-[#A0A5AA] hover:text-[#2C2C2C] hover:font-bold': !disabled,
        'text-[#B4BDC4] cursor-not-allowed': disabled,
      })}
    >
      <Icon
        name="chevronLeft"
        className={cn('w-4 h-4 shrink-0', {
          'text-black': !disabled,
          'text-[#B4BDC4]': disabled,
        })}
      />
      {text}
    </button>
  );
}
