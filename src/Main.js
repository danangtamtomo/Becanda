import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
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
            scene: 'Timeline'
          }
        }
        renderScene={
          (route, navigator) => {
            switch (this.props.navigatorState.navigator.scene) {
              case 'Timeline':
                return <Timeline/>
                break
              case 'Creator':
                return <Creator/>
                break
              case 'Back':
                navigator.pop()
              default:
                return <Timeline/>
            }
          }}
        configureScene={ (route, routeStack) => Navigator.SceneConfigs.FloatFromBottomAndroid }
      />
    )
  }
}

const mapStateToProps = state => ({
  navigatorState: state
})
export default connect(mapStateToProps, null)(Main)