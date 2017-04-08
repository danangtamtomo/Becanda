/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './src/store'
import {
  AppRegistry,
} from 'react-native';
import Main from './src/Main'

export default class Becanda extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Main/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Becanda', () => Becanda);
