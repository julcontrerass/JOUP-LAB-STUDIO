import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/shared/contexts';
import '../../styles/ui/theme-toggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <FaSun className="theme-toggle-icon" />
      ) : (
        <FaMoon className="theme-toggle-icon" />
      )}
    </button>
  );
};

export default ThemeToggle;
