import React, { createContext, useState, useContext } from 'react';

interface Theme {
  theme: 'light' | 'dark';
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: { theme: 'light' },
  toggleTheme: () => {},
});

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>({ theme: 'light' });

  const toggleTheme = () => {
    setTheme({ theme: theme.theme === 'light' ? 'dark' : 'light' });
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
