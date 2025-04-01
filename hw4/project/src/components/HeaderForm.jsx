import React, { useRef, useContext } from 'react';
import formSearchIcon from '../assets/search-icon.png'
import { HeaderFormContext } from '../context/HeaderFormContext';
import { useNavigate } from 'react-router-dom';

const HeaderForm = () => {
    const setFormInput = useContext(HeaderFormContext)[1];

    const formRef = useRef();
    const inputRef = useRef();
    
    const navigate = useNavigate();

    const onClick = () => {
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event('submit', { bubbles: true }));
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputRef.current) {
           setFormInput(inputRef.current.value);
           navigate('/');
        } 

        formRef.current.reset();
    }

    return (
        <form onSubmit={onSubmit} ref={formRef} className="form" action="...">
            <input ref={inputRef} id="header__form" className="input" type="text" placeholder="Enter a post title" />
            <img onClick={onClick} className="form__search-icon" src={formSearchIcon} alt="search icon" />
        </form>
    );
}

export default HeaderForm;