import React, { useContext, useEffect } from 'react';
import icon from '../assets/header-icon.png'
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import useTheme from '../hooks/useTheme';
import HeaderForm from './HeaderForm';
import { HeaderFormContext } from '../context/HeaderFormContext';

const Header = () => {
    const themeContext = useContext(ThemeContext);
    const setFormInput = useContext(HeaderFormContext)[1];

    useTheme(themeContext[0]);

    useEffect(() => {
        let localStorageTheme = localStorage.getItem('theme');

        if (localStorageTheme) {
            localStorageTheme = JSON.parse(localStorageTheme)

            themeContext[1](localStorageTheme);
        }
    }, []);

    const navigate = useNavigate();

    return (
        <header id="header">
            <Link onClick={() => {setFormInput('')}} to="/"><img className="header__icon" src={icon} alt="header icon" /></Link>
            <h1 id="header__main-title">Polina Zharova's Feed</h1>
            <button id="header__create-post-btn" type="button" onClick={() => {navigate('/create')}}>Create a post</button>
            <HeaderForm />
        </header>
    );
}

export default Header;