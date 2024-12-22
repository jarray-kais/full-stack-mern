import { createContext, useState } from 'react';

// Create the context
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [title, setTitle] = useState("");

    return (
        <StoreContext.Provider value={{ title, setTitle }}>
            {children}
        </StoreContext.Provider>
    );
};