"use client"

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  function toggle() {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }

  return (
    <button aria-label="Toggle theme" onClick={toggle} className="btn">
      {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}
