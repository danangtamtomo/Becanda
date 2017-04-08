import { combineReducers } from 'redux'
import { navigator } from './navigatorReducer'

const rootReducers = combineReducers({
  navigator: navigator
})

export default rootReducers