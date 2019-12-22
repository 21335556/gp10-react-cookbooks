import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import HotCateGoiesUI from './HotCategoriesUI'

import { loadDataAsync } from '../actionCreator'

const mapState = state => ({
  list: state.menulist.list
})

const mapDispatch = (dispatch) => ({
  loadData() {
    dispatch(loadDataAsync())
  }
})

class HotCateGoies extends Component {
  state = {
    list: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.list.category) {
      return {
        list: [...nextProps.list.category['热门'].slice(0, 11), {
          img: '',
          title: '更多...'
        }]
      }
    }

    return null
  }

  render() {
    return (
      <HotCateGoiesUI onItemClick={this.handleItemClick.bind(this)} list={this.state.list}></HotCateGoiesUI>
    )
  }

  componentDidMount() {
    this.props.loadData()
  }

  handleItemClick() {
    this.props.history.push('/list', { id: 0 })
  }
}

export default withRouter(connect(mapState, mapDispatch)(HotCateGoies))

