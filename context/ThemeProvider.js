import { createContext, useContext, useRef, useState } from 'react'

import { randomElementOfArray } from '../utils'
import { GOOGLE_COLORS, RANDOM_GOOGLE_COLOR } from '../constants'

/**
* This context provider will provide the theme data throughout the website..
* theme: true for default or light theme and false for dark theme or not default theme
*/
const ThemeContextProvider = createContext({
    theme: true,
    toggleTheme: () => { },
})
function ThemeProvider(props) {
    // the actual theme of the website
    // or in other words colorscheme provider of website
    const [theme, setTheme] = useState(true)

    const toggleTheme = () => {
        setTheme(value => !value)
    }

    const value = {
        theme: theme,
        toggleTheme: toggleTheme,
    }
    return (
        <ThemeContextProvider.Provider value={value}>
            <div className={`${theme ? 'light-theme' : 'dark-theme'} ${theme ? RANDOM_GOOGLE_COLOR : 'white'}`}>
                {props.children}
            </div>
        </ThemeContextProvider.Provider>
    )
}

export default ThemeProvider
export const useTheme = () => useContext(ThemeContextProvider)
