import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
  Picker,
  Text,
  CameraRoll
} from 'react-native'
import HeaderNavigator from './HeaderNavigator'
import { CreatorStyle, CreatorCard } from './Styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Creator extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let box = []


    return (
      <View>
        <HeaderNavigator navigator={ this.props.navigator }/>
        <View style={ CreatorStyle.container }>
          <View style={ CreatorStyle.card }>

          </View>
          <View style={ CreatorStyle.optionMenus }>
            <TouchableHighlight
              underlayColor={ '#fdffca' }
              onPress={ () => {} }
            >
              <Icon name="attachment" style={ CreatorStyle.optionMenuIcon }/>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={ '#fdffca' }
              onPress={ () => {} }
            >
              <Icon name="keyboard-arrow-down" style={ CreatorStyle.optionMenuIcon }/>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={ '#fdffca' }
              onPress={ () => {} }
            >
              <Icon name="remove-circle" style={ CreatorStyle.optionMenuIcon }/>
            </TouchableHighlight>

            <Picker>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        </View>
      </View>
    )
  }
}

export default Creator