import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

//引入可以配置路由的工具
import {createStackNavigator} from 'react-navigation'


import Demo1 from './src/components/demo1'
import Demo2 from './src/components/demo2'


//配置路由
var myNavigator = createStackNavigator({
  'main':{
    screen:Demo1
  },
  'demo2':{
    screen:Demo2
  }
})

export default  myNavigator ;