import { LOADDATA } from './actionTypes'

const defaultState = {
  list: {}
}

// list: [...SpeechRecognitionResult.data.category['热门'].slice(0, 11), {
//   img: '',
//   title: '更多...'
// }]

const categoriesReducer = (state=defaultState, action) => {
  switch (action.type) {
   case LOADDATA:
      return {
        list: action.data.data
      }
    default:
      return state
  }
}

export default categoriesReducer