/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Platform, ScrollView,StyleSheet, Text, View,Button,Alert,Image} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import StateBar from './src/components/stateBar';

import Demo1 from './src/components/demo1';
import Demo2 from './src/components/demo2';
import Demo3 from './src/components/demo3';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: Demo1
  },
  Demo2:{
    screen: Demo2
  },
  Demo3:{
    screen: Demo3
  },
},{
  initialRouteName: "Home"
});
const AppContainer = createAppContainer(AppNavigator);


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (<AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
     //flexDirection:'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'green',
   
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color:'#fff',
  },
  main:{
   width:200,
    height:40,
    backgroundColor:'red',
    color:'#fff',
  }
});
