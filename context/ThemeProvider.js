import {createContext, useContext, useEffect, useRef, useState} from 'react'

import {randomElementOfArray} from '../utils'
import {GOOGLE_COLORS, RANDOM_GOOGLE_COLOR} from '../constants'

/**
 * This context provider will provide the theme data throughout the website..
 * theme: true for default or light theme and false for dark theme or not default theme
 */
const ThemeContextProvider = createContext({
    theme: true,
    toggleTheme: () => {},
})
function ThemeProvider(props) {
    // the actual theme of the website
    // or in other words colorscheme provider of website
    const [theme, setTheme] = useState(true)

    // get the theme from local data of browser
    useEffect(() => {
        updateThemeEverywhere()

        document.body.classList.add(RANDOM_GOOGLE_COLOR)
    }, [])

    // update the local instance of the theme when the theme is updated in the website
    useEffect(() => {
        localStorage.theme = String(theme)

        // also setting the colors for scroll bar
        // since it won't take from the native file system
        if (theme) document.body.classList.value = RANDOM_GOOGLE_COLOR
        else document.body.classList.value = 'white'
    }, [theme])

    const toggleTheme = () => {
        setTheme(value => !value)
    }
    // getting the local theme data from localStorage
    const updateThemeEverywhere = () => {
        const localTheme = localStorage.theme
        if (localTheme === 'true') setTheme(true)
        else setTheme(false)
    }

    const value = {
        theme: theme,
        toggleTheme: toggleTheme,
    }
    return (
        <ThemeContextProvider.Provider value={value}>
            <div className={`${theme ? 'light-theme' : 'dark-theme'} ${theme ? RANDOM_GOOGLE_COLOR : 'white'}`}>{props.children}</div>
        </ThemeContextProvider.Provider>
    )
}

export default ThemeProvider
export const useTheme = () => useContext(ThemeContextProvider)
