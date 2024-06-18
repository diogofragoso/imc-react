import React, { createContext, useState } from 'react';

// Definindo os temas
const themes = {
    masculine: {
        background: '#4B79A188',
        color: '#000000',
        fontsize: '16px',
       
        
    },
    feminine: {
        background: '#F8BBD088',
        color: '#000000',
        fontsize: '16px',
        
        
    }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.masculine);

    const switchTheme = (gender) => {
        setTheme(gender === 'male' ? themes.masculine : themes.feminine);
    };

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
