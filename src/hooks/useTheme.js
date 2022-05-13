import { useContext } from "react";
import { themeContext } from "../context";

const useTheme = () => {
  const { theme, setTheme } = useContext(themeContext);
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return { theme, toggleTheme };
};

export { useTheme };
