'use client';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [changeThemeValue, setChangeThemeValue] = useState();

  useEffect(() => {
    setChangeThemeValue(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  useEffect(() => {
    const checkDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const newValue = theme === 'dark' ? 'light' : theme === 'light' ? 'dark' : checkDarkTheme ? 'light' : 'dark';
    setChangeThemeValue(newValue);
  }, []);

  return (
    <div className="h-8 w-8 cursor-pointer" onClick={() => setTheme(changeThemeValue ?? 'dark')}>
      <SunIcon
        size={32}
        strokeWidth={2.25}
        className="stroke-bme-black dark:stroke-bme-orange xl:!stroke-bme-black hidden dark:block"
      />
      <MoonIcon size={32} strokeWidth={2.25} className="stroke-bme-black block dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
