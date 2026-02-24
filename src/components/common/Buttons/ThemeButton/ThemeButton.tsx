import { Moon, Sun } from 'lucide-react';
import styles from './ThemeButton.module.scss';

interface ThemeButtonProps {
  isDark: boolean;
  onClick: () => void;
  className?: string;
}

export function ThemeButton({ isDark, onClick, className }: ThemeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.themeButton} ${className || ''}`}
    >
      {isDark ?
        <Sun
          strokeWidth={2}
          className={styles.icon}
        />
      : <Moon
          strokeWidth={2}
          className={styles.icon}
        />
      }
    </button>
  );
}
