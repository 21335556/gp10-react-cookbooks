import React from 'react'
import { Carousel, ActivityIndicator  } from 'antd-mobile';
import './swiper.css'

export default (props) => {
  return (
    <>
      {
        props.list.length > 0
          ? (
            <Carousel
              autoplay={false}
              infinite
            >
              {
                props.list.toJS().map(value => (
                  <img key={value.id} src={value.img} alt={value.name} />
                ))
              }
            </Carousel>
          )
        : (
          <ActivityIndicator text="正在加载" />
          )
      }
    </>
  )
}