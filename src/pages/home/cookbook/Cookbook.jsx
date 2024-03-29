import React, { Component } from 'react'

import Header from './header/Header'
import { SwiperContainer as Swiper } from './swiper/'
import Search from 'components/search/Search'
import { HotCategories } from './hot-categories/'
import ExllentFood from './excellent-food/ExcellentFood'

import {
  CookbookContainer
} from './StyleCookbook'

export default class Cookbook extends Component {
  render() {
    return (
      <CookbookContainer>
        <Header></Header>
        <Swiper></Swiper>
        <Search background="transparent" hasBorder={true}></Search>
        <HotCategories></HotCategories>
        <ExllentFood></ExllentFood>
      </CookbookContainer>
    )
  }
}
