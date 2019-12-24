import React from 'react'

import StyledMenuContainer, { BorderItem, Item } from './StyledMenuContainer'

import { Seq } from 'immutable'

export default (props) => {
  return (
    <StyledMenuContainer hasBorder={true}>
      <div id={`left-${props.type}`}>
        <ul>
          {
            props.data && Seq(props.data.keys()).map(value => {
              return value === props.currentKey 
              ? <li key={value} className="active"><BorderItem hasBorder={true}>{value}</BorderItem></li>
              : <li onTouchStart={props.onChange.bind(this, value)} key={value}><Item hasBorder={true}>{value}</Item></li>
              // console.log(value);
            }).toJS()
          }
        </ul>
      </div>
      <div id={`right-${props.type}`}>
        <ul>
          {
            props.data && props.data.get(props.currentKey).map((value,index) => (
              <li
                onClick={() => {props.history.push('/list', {id: value.id})}}
                key={`${value}-${index}`}
              ><span>{typeof value === 'string' ? value : value.get('title')}</span></li>
            ))
          }
        </ul>
      </div>
    </StyledMenuContainer>
  )
}