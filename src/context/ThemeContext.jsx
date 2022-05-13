import React from "react";
import { createContext, useContext, useState } from "react";

const themeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export { ThemeProvider, themeContext };
