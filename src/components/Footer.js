import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native'
import { FooterStyle } from './Styles'

class Footer extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View style={ FooterStyle.container }>
        <TouchableHighlight >
          <Text style={ FooterStyle.post }>ADD</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Footer