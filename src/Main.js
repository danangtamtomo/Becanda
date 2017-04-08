import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Navigator,
  View,
  StatusBar
} from 'react-native'
import Timeline from './components/Timeline'
import Creator from './components/Creator'

class Main extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View style={
        {
          width: '100%',
          height: '100%'
        }
      }>
        <StatusBar
          backgroundColor={'rgba(0, 0, 0, 0.5)' }
          translucent={ true }
        />
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
      </View>
    )
  }
}

const mapStateToProps = state => ({
  navigatorState: state
})
export default connect(mapStateToProps, null)(Main)