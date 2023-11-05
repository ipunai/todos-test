import { type ReactNode } from "react";
import { CACHED_TODO } from "../../constants/constants";
import "./Theme.scss";
const THEME_MODE_KEY = "themeMode";
const LIGHT = "light";
const DARK = "dark";

export const Theme = ({ children }: { children: ReactNode }) => {
  document.body.classList.add(LIGHT);
  const clearTodoCached = () => {
    localStorage.removeItem(CACHED_TODO);
  };

  const onToggleTheme = () => {
    const currentTheme = localStorage.getItem(THEME_MODE_KEY) || LIGHT;
    const newTheme = currentTheme === LIGHT ? DARK : LIGHT;

    localStorage.setItem(THEME_MODE_KEY, newTheme);
    document.body.classList.replace(currentTheme, newTheme);
  };

  return (
    <>
      <div className="theme-component">
        <button onClick={clearTodoCached}>Clear Todo Cached</button>
        <button onClick={onToggleTheme}>Toggle Theme</button>
      </div>
      {children}
    </>
  );
};
