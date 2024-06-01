import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import LoginRoute from './components/LoginRoute'
import Home from './components/Home'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedRoute from './components/SavedRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import NotFoundRoute from './components/NotFoundRoute'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'


class App extends Component {
  state = {isDarkTheme: false, savedList: []}

  addVideo = video => {
    const {savedList} = this.state

    const index = savedList.findIndex(eachVideo => eachVideo.id === video.id)

    if (index === -1) {
      this.setState({savedList: [...savedList, video]})
    } else {
      savedList.splice(index, 1)
      this.setState({savedList})
    }
  }

  themeChange = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme, savedList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          savedList,
          themeChange: this.themeChange,
          addVideo: this.addVideo,
        }}
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
          <Route path="/not-found" component={NotFoundRoute} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
