import React from 'react'
import { useState } from 'react';

export default function Dark() {
    const [darkMode, setDarkMode] = useState(false);

    function toggleMode(){
        setDarkMode(!darkMode);
    }
  return (
    <div className={`${darkMode ? "bg-sky-400" : "light"}`}>
    <button onClick={toggleMode}>ダークモードに切り替え</button>
</div>
  )
}
