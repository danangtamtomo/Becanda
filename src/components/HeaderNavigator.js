import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StatusBar
} from 'react-native'
import { HeaderNavigatorStyle } from './Styles'
import Icon from 'react-native-vector-icons/EvilIcons'

class HeaderNavigator extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View style={ HeaderNavigatorStyle.container }>
        <TouchableHighlight onPress={ () => this.props.navigator.pop() }>
          <Icon name="chevron-left" style={ HeaderNavigatorStyle.backIcon }/>
        </TouchableHighlight>
      </View>
    )
  }
}

export default HeaderNavigator