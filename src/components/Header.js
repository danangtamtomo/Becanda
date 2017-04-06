import React, { Component } from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import { HeaderStyle } from './Styles'

class Header extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View style={ HeaderStyle.container }>
        <Image
          source={ require('../images/logo.png') }
          style={ HeaderStyle.image }
        />
      </View>
    )
  }
}

export default Header