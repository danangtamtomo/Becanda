import React, { Component } from 'react'
// import { Provider } from 'react-redux'
// import store from './store'

import {
  View,
  Text,
  Navigator
} from 'react-native'
import Timeline from './components/Timeline'
import Creator from './components/Creator'

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
              case 'Creator':
                return <Creator navigator={ navigator } />
                break
              default:
                return <Timeline navigator={ navigator } />
            }
          }}
        configureScene={ (route, routeStack) => Navigator.SceneConfigs.FloatFromBottom }
      />
    )
  }
}

export default Main