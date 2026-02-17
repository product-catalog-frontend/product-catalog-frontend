import { cn } from '../../../lib/utils';
import { Icon } from '../../common/Icon';

interface HeartButtonProps {
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function HeartButton({ selected, onClick, disabled }: HeartButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'w-10 h-10 flex items-center justify-center rounded-md bg-white transition-colors border border-[#E2E6E9]',
        {
          'hover:border-2 hover:border-black': !selected && !disabled,
          'opacity-50 cursor-not-allowed': disabled,
        },
      )}
    >
      <Icon
        name="heart"
        className={cn('w-5 h-5', {
          'fill-[#E74C3C] text-[#E74C3C]': selected,
          'text-black': !selected,
        })}
      />
    </button>
  );
}
