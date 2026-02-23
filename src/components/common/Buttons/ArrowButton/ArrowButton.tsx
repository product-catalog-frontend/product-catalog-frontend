import { ChevronLeft } from 'lucide-react';
import styles from './ArrowButton.module.scss';
import { useNavigate } from 'react-router-dom';

interface ArrowButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  back?: boolean;
}

export function ArrowButton({
  text = 'Hover',
  onClick,
  disabled,
  ariaLabel,
  back,
}: ArrowButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (back) {
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate('/');
      }
    } else {
      onClick?.();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel || text}
      className={styles.arrowButton}
    >
      <ChevronLeft className={styles.arrowIcon} />
      {text}
    </button>
  );
}
