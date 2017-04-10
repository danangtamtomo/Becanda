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
import FilePickerManager from 'react-native-file-picker'
import Sound from 'react-native-sound'

class CardCreator extends Component{
  constructor(props) {
    super(props)
    this.state = {
      soundMeta: {},
      playerIcon: 'play-arrow'
    }
    this.player
  }



  _filePick() {
    FilePickerManager.showFilePicker(null, response => {
      if (response.didCancel) {
        console.log('User cancelled file picker');
      }
      else if (response.error) {
        console.log('FilePickerManager Error: ', response.error);
      }
      else {
        this.props.attachSound(this.props.index, response.path, this.props.card)
        // this.setState({
        //   soundPath: response.path
        // })
      }
    })
  }

  _playSound() {
    this.player = new Sound(this.props.card.sound, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + this.player.getDuration() + 'number of channels: ' + this.player.getNumberOfChannels());
      this.player.play((success) => {
        this.player.release()
      })
    })
    this.player.setVolume(0.5);
  }

  _pauseSound() {
    this.player.pause()
  }

  render() {
    return (
      <View>
        <View style={ CreatorStyle.card }>
          <TouchableHighlight
            underlayColor={ '#fdffca' }
            onPress={ () => this.props.removeCard(this.props.index) }
            style={ { position: 'absolute' , zIndex: 200} }
          >
            <Icon name="close" style={ CreatorStyle.optionMenuIcon }/>
          </TouchableHighlight>
          <Image source={{ uri: this.props.card.image }} style={ CreatorStyle.imageAttach }>
          </Image>
        </View>
        <View style={ CreatorStyle.optionMenus }>
          <TouchableHighlight
            underlayColor={ '#fdffca' }
            onPress={ () => this.props.attachImage(this.props.index, this.props.card) }
          >
            <Icon name="collections" style={ CreatorStyle.optionMenuIcon }/>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={ '#fdffca' }
            onPress={ () => this._filePick() }
          >
            <Icon name="attachment" style={ CreatorStyle.optionMenuIcon }/>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={ '#fdffca' }
            onPress={ () => this._playSound() }
          >
            <Icon name="play-arrow" style={ CreatorStyle.optionMenuIcon }/>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={ '#fdffca' }
            onPress={ () => this._pauseSound() }
          >
            <Icon name="pause" style={ CreatorStyle.optionMenuIcon }/>
          </TouchableHighlight>
          <Text style={
            {
              fontSize: 11
            }
          }>{ this.props.card.sound.split('/')[5] }</Text>
        </View>
      </View>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  addCard: () => dispatch(CreatorActions.addCard()),
  removeCard: key => dispatch(CreatorActions.removeCard(key)),
  attachImage: (key, card) => dispatch(CreatorActions.attachImage(key, card)),
  attachSound: (key, source, card) => dispatch(CreatorActions.attachSound(key, source, card))
})

export default connect(null, mapDispatchToProps)(CardCreator)
