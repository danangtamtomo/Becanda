import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StatusBar
} from 'react-native'
import { connect } from 'react-redux'
import { NavigatorActions } from '../actions'
import { HeaderNavigatorStyle } from './Styles'
import Icon from 'react-native-vector-icons/EvilIcons'

class HeaderNavigator extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View style={ HeaderNavigatorStyle.container }>
        <TouchableHighlight onPress={ () => this.props.navigateBack() }>
          <Icon name="chevron-left" style={ HeaderNavigatorStyle.backIcon }/>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  navigateBack: () => dispatch(NavigatorActions.navigateBack())
})

export default connect(null, mapDispatchToProps)(HeaderNavigator)