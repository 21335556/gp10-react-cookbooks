import React from 'react'

import { StyledListContent, BorderItem, EllipsedBurdens } from './StyledListContent'

export default (props) => {
  return (
    <StyledListContent>
      {
        props.list.map((value, index) => (
          <BorderItem key={index + value.id} hasBorder={true}>
            <div>
              <img src={value.img} alt="" />
            </div>
            <div>
              <h1>{value.name}</h1>
              <EllipsedBurdens>{value.burdens}</EllipsedBurdens>
              <h3>{value.all_click} 浏览 {value.favorites}收藏</h3>
            </div>
          </BorderItem>
        ))
      }
    </StyledListContent>
  )
}