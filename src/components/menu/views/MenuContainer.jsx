import React, { Component } from 'react'

import MenuUI from './MenuUI'

import BScroll from 'better-scroll'

import { connect } from 'react-redux'

const mapState = state => {
  let { category, material } = state.menulist.list
  return {
    category: state.menulist.list.category,
    material: state.menulist.list.material
  }
}

class MenuContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentKey: this.props.type === 'category' ? '热门' : '肉类'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    let { type, category, material } = this.props
    return (
      <MenuUI
        type={type}
        currentKey={this.state.currentKey}
        data={type === 'category' ? category : material}
        onChange={this.handleChange}>
        </MenuUI>
    )
  }

  componentDidMount() {
    let { type } = this.props
    this.bScrollLeft = new BScroll(`#left-${type}`, { click: true })
    new BScroll(`#right-${type}`, { click: true })
  }

  handleChange(key, e) {
    this.setState({
      currentKey: key
    })
  }
}

export default connect(mapState)(MenuContainer)