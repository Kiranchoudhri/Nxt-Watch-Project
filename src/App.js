import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'

// Replace your code here
class App extends Component {
  state = {savedVideosList: [], isDarkTheme: false}

  onClickToggleTheme = () => {
    console.log('changed')
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onClickSaveVideo = videoItem => {
    const {savedVideosList} = this.state
    const newVideo = {
      ...videoItem,
      isActive: true,
    }
    const isFound = savedVideosList.findIndex(
      eachVideo => eachVideo.id === videoItem.id,
    )
    if (isFound > -1) {
      this.setState(prevState => ({
        savedVideosList: prevState.savedVideosList.map(eachVideo => {
          if (eachVideo.id === videoItem.id) {
            return {
              ...eachVideo,
              isActive: !eachVideo.isActive,
              isLiked: !eachVideo.isLiked,
              isDisliked: !eachVideo.isDisliked,
            }
          }
          return eachVideo
        }),
      }))
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, newVideo],
      }))
    }
  }

  render() {
    const {savedVideosList, isDarkTheme} = this.state
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                onClickToggleTheme={this.onClickToggleTheme}
                isDarkTheme={isDarkTheme}
              />
            )}
          />
          <ProtectedRoute
            exact
            path="/trending"
            render={props => (
              <Trending
                {...props}
                isDarkTheme={isDarkTheme}
                onClickToggleTheme={this.onClickToggleTheme}
              />
            )}
          />
          <ProtectedRoute
            exact
            path="/gaming"
            render={props => (
              <Gaming
                {...props}
                isDarkTheme={isDarkTheme}
                onClickToggleTheme={this.onClickToggleTheme}
              />
            )}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            render={props => (
              <SavedVideos
                {...props}
                savedVideosList={savedVideosList}
                isDarkTheme={isDarkTheme}
                onClickToggleTheme={this.onClickToggleTheme}
              />
            )}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            render={props => (
              <VideoItemDetails
                {...props}
                onClickSaveVideo={this.onClickSaveVideo}
                isDarkTheme={isDarkTheme}
                onClickToggleTheme={this.onClickToggleTheme}
              />
            )}
          />
          <Route
            path="/not-found"
            render={props => <NotFound {...props} isDarkTheme={isDarkTheme} />}
          />
          <Redirect to="not-found" />
        </Switch>
      </div>
    )
  }
}

export default App
