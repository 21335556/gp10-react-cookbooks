import React, { Component } from 'react'

import Header from './header/Header'
import ListContent from './listcontent/ListContent'

class List extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <ListContent></ListContent>
      </>
    );
  }
}

export default List