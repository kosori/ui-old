'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ToggleTheme = () => {
  const [mounted, setMouted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMouted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value='system'>System</option>
      <option value='dark'>Dark</option>
      <option value='light'>Light</option>
    </select>
  );
};

export default ToggleTheme;
