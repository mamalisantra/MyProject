import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div style={{ background: darkMode ? "black" : "white", color: darkMode ? "white" : "black", height: "100vh" }}>
      <h1>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
