import React, { Component } from 'react'
// import { Provider } from 'react-redux'
// import store from './store'

import {
  View,
  Text,
  Navigator
} from 'react-native'
import Timeline from './components/Timeline'

class Main extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Navigator
        initialRoute={
          {
            title: 'Timeline'
          }
        }
        renderScene={
          (route, navigator) => {
            switch (route.title) {
              case 'Timeline':
                return <Timeline navigator={ navigator } />
                break
              default:
                return <Timeline navigator={ navigator } />
            }
          }}
        configureScene={ (route, routeStack) => Navigator.SceneConfigs.FadeAndroid }
      />
    )
  }
}

export default Main