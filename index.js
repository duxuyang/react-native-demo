/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';

import {createStackNavigator} from 'react-navigation'


// const Rootmap = createStackNavigator({
//     login:Demo1,
//     register:Demo2
//   },
//   {
//     initialRouteName: 'Home',
//     /* The header config from HomeScreen is now here */
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//   },
// }
// )

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
