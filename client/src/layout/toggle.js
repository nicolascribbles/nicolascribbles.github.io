import { useState, useContext } from 'react';
import useDarkMode from "../context/darkMode";

export default function Toggle() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="flex items-center justify-center ml-auto w-half">
      <label htmlFor="checkbox" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            className="sr-only"
            checked={colorTheme === "light" ? true : false}
            onChange={() => setTheme(colorTheme)} />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
      </label>
    </div>
  )
}
