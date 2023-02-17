import { createContext, useState } from "react";

export const ThemeContext = createContext(false)

export const ThemeProvider = ({children}) => {

  const [darkMode, setDark] = useState(false)

  const toggleDarkMode = () => {
    setDark(prev => !prev)
  }

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme: toggleDarkMode}}
    >
      {children}
    </ThemeContext.Provider>
  )
}