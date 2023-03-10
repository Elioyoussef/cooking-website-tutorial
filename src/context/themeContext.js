import { createContext, useReducer } from 'react';

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    switch (action) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload}
        default:
            return state
    }
}

export const ThemeProvider = ({ children }) => {
   const [state, dispatch] = useReducer(themeReducer, {
        color:'blue'
    })

    const changeColor = (color) => {
        dispatch({ type: 'CHANGE_COLOR', payload: color })
    }

    return (
        <ThemeContext.Provider value={{ ...state, changeColor}}>
            { children }
        </ThemeContext.Provider>
    )
}