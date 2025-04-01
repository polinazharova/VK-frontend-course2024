import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggler = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <p id="theme-toggler" onClick={()=> {
            if (themeContext[0]) {
                themeContext[1](0);
                localStorage.setItem('theme', JSON.stringify(0));
            } else {
                themeContext[1](1);
                localStorage.setItem('theme', JSON.stringify(1));
            }
        }}>{themeContext[0] ? 'dark mode' : 'light mode'}</p>
    );
}

export default ThemeToggler;