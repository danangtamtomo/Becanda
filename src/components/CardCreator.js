import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
  Image,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import { CreatorActions } from '../actions'
import { CreatorStyle, CreatorCard } from './Styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

class CardCreator extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <View style={ CreatorStyle.card }>
          <Image source={{ uri: this.props.card.image }} style={ CreatorStyle.imageAttach }/>
        </View>
        <View style={ CreatorStyle.optionMenus }>
          <TouchableHighlight
            underlayColor={ '#fdffca' }
            onPress={ () => this.props.attachFile(this.props.index, this.props.card) }
          >
            <Icon name="attachment" style={ CreatorStyle.optionMenuIcon }/>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={ '#fdffca' }
            onPress={ () => this.props.removeCard(this.props.index) }
          >
            <Icon name="remove-circle" style={ CreatorStyle.optionMenuIcon }/>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  addCard: () => dispatch(CreatorActions.addCard()),
  removeCard: key => dispatch(CreatorActions.removeCard(key)),
  attachFile: (key, card) => dispatch(CreatorActions.attachFile(key, card))
})

export default connect(null, mapDispatchToProps)(CardCreator)
