import { LOADDATA } from './actionTypes'
const { Map, fromJS } = require('immutable')


const defaultState = Map({
  list: Map({})
})

// list: [...SpeechRecognitionResult.data.category['热门'].slice(0, 11), {
//   img: '',
//   title: '更多...'
// }]

const categoriesReducer = (state=defaultState, action) => {
  switch (action.type) {
   case LOADDATA:
      // return {
      //   list: action.data.data
      // }
      return state.set('list', fromJS(action.data.data))
    default:
      return state
  }
}

export default categoriesReducer