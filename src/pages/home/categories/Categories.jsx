import React, { Component } from 'react'

import { HeaderContainer as Header } from './header/'
import { MenuContainerLeft as MenuLeft, MenuContainerRight as MenuRight } from './menu/'
import Search from 'components/search/Search'

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
    return (
      <StyledCategories>
        <Header onMessage={this.handleMessage}></Header>
        <Search background="#eee" hasBorder={false}></Search>
        <Route path="/category" component={MenuLeft}></Route>
        <Route path="/material" component={MenuRight}></Route>
      </StyledCategories>
    )
  }

  handleMessage(dir) {
    let path = dir === 'left' ? 'category' : 'material'
    this.props.history.push(path)
  }
}

export default withRouter(Categories)