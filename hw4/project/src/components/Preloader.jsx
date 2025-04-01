import React from 'react';
import preloaderIcon from '../assets/preloader.gif'

const Preloader = () => {
    return (
        <img id="preloader" src={preloaderIcon} alt="preloader gif" />
    );
};

export default Preloader;