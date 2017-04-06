import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import {
  View,
  Text,
} from 'react-native'

class Main extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Provider store={ store }>
        
      </Provider>
    )
  }
}

export default Main