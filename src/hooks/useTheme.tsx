import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Type voor de thema context
type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

// Creëer een context met default waarden
const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

// Hook om de thema context te gebruiken
export const useTheme = () => useContext(ThemeContext);

// Provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Probeer om de voorkeur uit localStorage te halen
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // Check ook de OS voorkeur als er niets in localStorage staat
    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Toggle functie
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Bijwerken van de document class en localStorage wanneer de theme state verandert
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
