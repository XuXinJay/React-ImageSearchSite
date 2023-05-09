import React from "react";
import { useState } from "react";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTextDarkMode, setIsTextDarkMode] = useState(false);

function changeColor() {
  const newColor = isDarkMode ? "#f5f5f5" : "#293a4c";
  const newTextColor = isTextDarkMode ? "#293a4c" : "#f5f5f5";
  document.documentElement.style.setProperty("--body-color", newColor);
  document.documentElement.style.setProperty("--text-color", newTextColor);
  setIsDarkMode(!isDarkMode);
  setIsTextDarkMode(!isTextDarkMode)
}

  return <header className="website_header"><div>XuXinJie</div> <div>
  <i
    id="change"
    onClick={changeColor}
    className={`uil uil-brightness-half ${
      isDarkMode && isTextDarkMode ? "is-active" : ""
    }`}
  ></i>
</div></header>;
}

export default Header;
