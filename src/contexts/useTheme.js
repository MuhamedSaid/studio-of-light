import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default useTheme;

// Usage
// const { theme, toggleTheme } = useTheme();
