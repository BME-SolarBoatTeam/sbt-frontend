'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';

export function ModeToggle() {
  const { setTheme, resolvedTheme: theme } = useTheme();

  const handleClick = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log('theme changed to: ' + theme + '!');
  }, [theme, setTheme]);

  return (
    <button className="group/toggle h-8 w-8 cursor-pointer px-0" onClick={handleClick}>
      <SunIcon className="hidden dark:block" stroke="black" />
      <MoonIcon className="block dark:hidden" stroke="black" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
