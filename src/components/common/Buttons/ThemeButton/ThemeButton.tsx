import { Moon, Sun } from 'lucide-react';
import styles from './ThemeButton.module.scss';

interface ThemeButtonProps {
  isDarkTheme: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export function ThemeButton({ isDarkTheme, onClick, disabled }: ThemeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={styles.themeButton}
    >
      {isDarkTheme ?
        <Sun />
      : <Moon />}
    </button>
  );
}
