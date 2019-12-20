import React, { Component } from 'react'

import {StyledHeaderContainer as StyleHeader} from './StyledHeader'

class HeaderContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dir: 'left'
    }
    this.handleClickMove = this.handleClickMove.bind(this)
  }

  render() {
    let { dir } = this.state
    return (
      <StyleHeader>
        <ul>
          <li onClick={() => this.handleClickMove('left')} className={dir==='left'? 'active' : ''}>分类</li>
          <li onClick={() => this.handleClickMove('right')} className={dir==='right'? 'active' : ''}>食材</li>
          <li className={dir==='right' ? 'slider right' : 'slider'}></li>
        </ul>
      </StyleHeader>
    )
  }

  handleClickMove(dir) {
    this.setState({
      dir
    })
    this.props.onMessage(dir)
  }
}

export default HeaderContainer