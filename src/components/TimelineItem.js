import React, { Component } from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import { TimelineItemStyle } from './Styles'

class TimelineItem extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View style={ TimelineItemStyle.container }>
        <Image
          source={ { uri: 'https://unsplash.it/200/300/?random' } }
          style={ TimelineItemStyle.image }
        >
          <View style={ TimelineItemStyle.titleContainer }>
            <Text style={ TimelineItemStyle.title }>{ this.props.timeline.title }</Text>
          </View>
        </Image>
      </View>
    )
  }
}

export default TimelineItem