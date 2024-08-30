import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from './ui/switch';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const checkLocalStorage = localStorage.getItem("theme");
    if (!checkLocalStorage) {
      const checkDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(checkDarkTheme ? "dark" : "light");
    }
  }, [setTheme]);

  return (
    <Switch
      checked={theme === 'light'}
      onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  );
};

export default ThemeSwitcher;
