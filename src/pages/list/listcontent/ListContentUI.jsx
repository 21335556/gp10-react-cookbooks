import React from 'react'
import { ListView } from 'antd-mobile';

import { StyledListContent, BorderItem, EllipsedBurdens } from '../listcontent/StyledListContent'

import '../List.css'

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}


const row = (value, id) => {
  return (
    <BorderItem key={id + value.id} hasBorder={true}>
      <div>
        <img src={value.img} alt="" />
      </div>
      <div>
        <h1>{value.name}</h1>
        <EllipsedBurdens>{value.burdens}</EllipsedBurdens>
        <h3>{value.all_click} 浏览 {value.favorites}收藏</h3>
      </div>
    </BorderItem>
  );
};

export default (props) => {
  return (
    <StyledListContent>
      <ListView
        // ref={el => this.lv = el}
        dataSource={props.dataSource}
        // renderHeader={() => <Header />}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {props.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderBodyComponent={() => <MyBody />}
        renderRow={row}
        style={{
          height: props.height,
          overflow: 'auto',
        }}
        pageSize={4}
        // onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={props.onEndReached}
        onEndReachedThreshold={10}
      />
    </StyledListContent>
  )
}