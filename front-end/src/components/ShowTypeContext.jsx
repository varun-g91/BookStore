import React, { createContext, useState, useContext } from 'react';

const ShowTypeContext = createContext();

export const useShowType = () => useContext(ShowTypeContext);

export const ShowTypeProvider = ({ children }) => {
    const [showType, setShowType] = useState('table'); // Default view is 'table'

    return (
        <ShowTypeContext.Provider value={{ showType, setShowType }}>
            {children}
        </ShowTypeContext.Provider>
    );
};
