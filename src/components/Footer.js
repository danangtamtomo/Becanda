import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigatorActions } from '../actions'
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
          onPress={ () => this.props.navigateToCreator({ scene: 'Creator' }) }>
          <Text style={ FooterStyle.post }><Icon style={ FooterStyle.addIcon } name="add-circle"/></Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  navigateToCreator: payloads => dispatch(NavigatorActions.navigateToCreator(payloads))
})

export default connect(null, mapDispatchToProps)(Footer)