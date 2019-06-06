/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';

import {createStackNavigator} from 'react-navigation'


import Demo1 from './src/components/demo1';
import Demo2 from './src/components/demo2';
// const Rootmap = createStackNavigator({
//   'login':{screen:Demo1},
//   'register':{screen:Demo2}
// })

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
