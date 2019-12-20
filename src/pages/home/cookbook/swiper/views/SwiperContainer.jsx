import React from 'react'
import { connect } from 'react-redux'
import { asyncLoadData } from '../actionCreator'

import SwiperUI from './SwiperUI'

const mapState = state => {
  return {
    list: state.foodlist.list.slice(0, 5)
  }
}

const mapDispatch = dispatch => ({
  loadData: dispatch(asyncLoadData(SwiperContainer))
})

class SwiperContainer extends React.Component {
  render() {
    return (
      <SwiperUI { ...this.props }></SwiperUI>
    )
  }
}

export default connect(mapState, mapDispatch)(SwiperContainer)