import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  EfContainer
} from './StyledExcellentFood'

const mapState = state => ({
  list: state.foodlist.list.slice(0, 10)
})

class ExllentFood extends Component {
  render() {
    return (
      <EfContainer>
        <div>精品好菜</div>
        <div>
          {
            this.props.list.map(value => (
              <dl key={value.id}>
                <dt>
                  <img src={value.img} alt={value.name} />
                </dt>
                <dd>{value.name}</dd>
                <dd>{value.all_click} 浏览 {value.favorites} 收藏</dd>
              </dl>
            ))
          }
        </div>
      </EfContainer>
    )
  }

  componentDidMount() {
    fetch('/api/list')
      .then(response => response.json())
      .then(result => {
        this.setState({
          list: result.data.slice(0, 10)
        })
      })
  }
}

export default connect(mapState)(ExllentFood)