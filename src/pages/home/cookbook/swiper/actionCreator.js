import { LOADDATA } from './actionTypes'
// import SwiperContainer from './views/SwiperContainer';

const syncLoadData = list => ({
  type: LOADDATA,
  list
})

const asyncLoadData = () => {
  return (dispatch) => {
    fetch('/api/list')
      .then(response => response.json())
      .then(result => {
        dispatch(syncLoadData(result.data))
      })
  }
}

export {
  syncLoadData,
  asyncLoadData
}