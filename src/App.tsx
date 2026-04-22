import { useEffect, useState } from 'react';
import { Home } from './pages/Home';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'quickbook-theme';

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return <Home theme={theme} onThemeChange={setTheme} />;
}

export default App;
