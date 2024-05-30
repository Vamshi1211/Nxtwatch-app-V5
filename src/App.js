import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import LoginRoute from './components/LoginRoute'
import Home from './components/Home'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedRoute from './components/SavedRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// const sideBarMenu = [
//   {displayId: 'HOME', displayText: 'Home'},
//   {displayId: 'TRENDING', displayText: 'Trending'},
//   {displayId: 'GAMING', displayText: 'Gaming'},
//   {displayId: 'SAVED', displayText: 'Saved Videos'},
// ]

class App extends Component {
  state = {isDarkTheme: false}

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
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute exact path="/saved-videos" component={SavedRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
