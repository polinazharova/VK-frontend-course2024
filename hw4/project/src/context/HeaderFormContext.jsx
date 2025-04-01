import React, { createContext, useState } from 'react';

const HeaderFormContext = createContext();

const HeaderFormProvider = ({ children }) => {
    const [formInput, setFormInput] = useState('');

    return (
        <HeaderFormContext.Provider value={[formInput, setFormInput]}>
            {children}
        </HeaderFormContext.Provider>
    );
};

export {HeaderFormContext, HeaderFormProvider};