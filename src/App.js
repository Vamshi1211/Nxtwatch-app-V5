import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import LoginRoute from './components/LoginRoute'
import Home from './components/Home'
import './App.css'

const sideBarMenu = [
  {displayId: 'HOME', displayText: 'Home'},
  {displayId: 'TRENDING', displayText: 'Trending'},
  {displayId: 'GAMING', displayText: 'Gaming'},
  {displayId: 'SAVED', displayText: 'Saved Videos'},
]

class App extends Component {
  state = {isDarkTheme: false, activeId: sideBarMenu[0].displayId}

  themeChange = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    console.log(isDarkTheme)
    return (
      <ThemeContext.Provider
        value={{isDarkTheme, themeChange: this.themeChange}}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <Route exact path="/" component={Home} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
