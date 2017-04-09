import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
} from 'react-native'
import { connect } from 'react-redux'
import { NavigatorActions } from '../actions'
import { HeaderNavigatorStyle } from './Styles'
import { CreatorActions } from '../actions'
import Icon from 'react-native-vector-icons/EvilIcons'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'

class HeaderNavigator extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View style={ HeaderNavigatorStyle.container }>
        <TouchableHighlight
          onPress={ () => this.props.navigateBack() }
          style={ HeaderNavigatorStyle.backButton }
          underlayColor={ 'rgba(0, 0, 0, 0.4)' }
        >
          <Icon name="chevron-left" style={ HeaderNavigatorStyle.backIcon }/>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={ 'rgba(0, 0, 0, 0)' }
          style={ HeaderNavigatorStyle.backButton }
          onPress={ () => this.props.addCard() }
        >
          <IconMaterial name="playlist-add" style={ HeaderNavigatorStyle.addCardIcon }/>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  navigateBack: () => dispatch(NavigatorActions.navigateBack()),
  addCard: () => dispatch(CreatorActions.addCard())
})

export default connect(null, mapDispatchToProps)(HeaderNavigator)