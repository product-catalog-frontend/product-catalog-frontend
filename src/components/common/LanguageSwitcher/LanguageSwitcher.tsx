import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggle = () => {
    const newLang = i18n.language === 'en' ? 'uk' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      className={styles.switcher}
      onClick={toggle}
    >
      {i18n.language === 'en' ? 'UA' : 'EN'}
    </button>
  );
};
