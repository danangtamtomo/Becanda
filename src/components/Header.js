import React, { Component } from 'react'
import {
  View,
  TextInput,
  Image
} from 'react-native'
import { HeaderStyle } from './Styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Header extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
    <View style={ HeaderStyle.container }>
      <View style={ HeaderStyle.wrapper }>
        <TextInput
          style={ HeaderStyle.search }
          onChangeText={(text) => this.setState({text})}
        />
        <Icon
          name="search"
          style={ HeaderStyle.searchIcon }
        />
      </View>
    </View>
    )
  }
}

export default Header