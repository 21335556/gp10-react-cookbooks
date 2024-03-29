import {
  combineReducers
} from 'redux'

import { reducer as foodlist } from 'cookbook/swiper/'
import { reducer as menulist } from 'cookbook/hot-categories'

const reducer = combineReducers({
  foodlist,
  menulist
})

export default reducer