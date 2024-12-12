import { createContext, useState } from 'react';

// Create the context
export const StoreContext = createContext();

// Context provider component
export const StoreProvider = ({ children }) => {
    const [name, setName] = useState("User");

    return (
        <StoreContext.Provider value={{ name, setName }}>
            {children}
        </StoreContext.Provider>
    );
};
