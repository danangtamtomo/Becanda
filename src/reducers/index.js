import { combineReducers } from 'redux'
import { navigator } from './navigatorReducer'
import { cards } from './creatorReducers'

const rootReducers = combineReducers({
  navigator: navigator,
  cards: cards
})

export default rootReducers