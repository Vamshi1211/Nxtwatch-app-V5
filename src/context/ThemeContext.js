import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  savedList: [],
  addVideo: () => {},
  themeChange: () => {},
})

export default ThemeContext
