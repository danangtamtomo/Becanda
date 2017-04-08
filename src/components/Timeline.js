import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  StatusBar
} from 'react-native'
import TimelineItem from './TimelineItem'
import Header from './Header'
import Footer from './Footer'
import { TimelineStyle } from './Styles'

class Timeline extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let dummyData = []
    for (let i=0;i<10;i++) {
      dummyData.push(
        {
          id: Math.round(Math.random()*(1000-1)+1),
          title: 'Dummy '+(i+1)
        }
      )
    }
    return (
      <View>
        <ScrollView>
          <Header/>
          <View style={ TimelineStyle.container }>
            { dummyData.map(dummy => <TimelineItem key={ dummy.id } timeline={ dummy }/>) }
          </View>
        </ScrollView>
        <Footer navigator={ this.props.navigator }/>
      </View>
    )
  }
}

export default Timeline