import React, { Component } from 'react'
import {
  View,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import RNFetchBlob from 'react-native-fetch-blob'
import HeaderNavigator from './HeaderNavigator'
import CardCreator from './CardCreator'
import { CreatorStyle } from './Styles'
import { CreatorActions } from '../actions'

class Creator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={ {width: '100%', height: '100%'} }>
        <HeaderNavigator/>
        <ScrollView style={ {width: '100%', height: '100%'} }>
          <View style={ CreatorStyle.container }>
              { this.props.cards.map((card, index) => <CardCreator key={ index } index={ index } card={ card }/>) }
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => ({
  submitCards: () => dispatch(CreatorActions.submitCards)
})

export default connect(mapStateToProps, mapDispatchToProps)(Creator)