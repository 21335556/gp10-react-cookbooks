import React, { Component } from 'react'

class Map extends Component {
  render() {
    return (
      <iframe style={{
        width: '100%',
        height: '100%'
      }}
       title="myIframe" src="https://map.baidu.com/@12959912.90468979,4759293.343133148,13.01z" frameBorder="0"
      ></iframe>
    )
  }
}

export default Map