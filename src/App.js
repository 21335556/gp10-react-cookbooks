import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store/index'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from './pages/home/Home'
import List from './pages/list/List'

import './assets/styles/reset.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Redirect from="/" to="/home" exact></Redirect>
            <Route path="/home"  component={Home}></Route>
            <Route path="/list" component={List}></Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App