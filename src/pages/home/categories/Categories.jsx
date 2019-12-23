import React, { Component } from 'react'

import { HeaderContainer as Header } from './header/'
import { MenuContainerLeft as MenuLeft, MenuContainerRight as MenuRight } from './menu/'
import Search from 'components/search/Search'

import 'assets/styles/animate.css'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import {
  Route,
  withRouter
} from 'react-router-dom'

import {
  StyledCategories
} from './StyledCatrgories'

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'category'
    }
    this.handleMessage = this.handleMessage.bind(this)
  }

  render() {
    let path = this.props.match.path
    let state = this.props.location.state
    let dir = state && state.dir || 'left'
    console.log(dir);
    return (
      <StyledCategories>
        <Header onMessage={this.handleMessage}></Header>
        <Search background="#eee" hasBorder={false}></Search>
        <TransitionGroup>
          <CSSTransition
            timeout={300}
            key={this.props.location.key}
            classNames={{
              enter: 'animated',
              enterActive: dir === 'left' ? 'slideInLeft' : 'slideInRight',
              exit: 'animated',
              exitActive: dir === 'left' ? 'slideOutLeft' : 'slideOutRight'
            }}
          >
            <>
              <Route path={`${path}/category`} component={MenuLeft}></Route>
              <Route path={`${path}/material`} component={MenuRight}></Route>
            </>
          </CSSTransition>
        </TransitionGroup>
      </StyledCategories>
    )
  }

  handleMessage(dir) {
    let path = dir === 'left' ? '/category' : '/material'
    this.props.history.push(this.props.match.path + path, { dir })
  }
}

export default withRouter(Categories)