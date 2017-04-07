import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FooterStyle } from './Styles'

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={ FooterStyle.container }>
        <TouchableHighlight
          underlayColor={ '#201a0f' }
          style={ FooterStyle.createButton }
          onPress={ () => this.props.navigator.push({ title: 'Creator' }) }>
          <Text style={ FooterStyle.post }><Icon style={ FooterStyle.addIcon } name="add-circle" color="#fff874"/></Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Footer