import React, { Component } from 'react';
import { View, Text,StyleSheet ,SafeAreaView,StatusBar} from 'react-native';


export default class StateBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

componentDidMount() {
  StatusBar.setBarStyle('light-content'); //状态栏文字颜色
  StatusBar.setBackgroundColor('#e12828'); //状态栏背景色
  //StatusBar.setHidden(true);//隐藏状态栏
  //StatusBar.setTranslucent(true);//指定状态栏是否透明

}
  render() {
    return ( <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
    <View style={{ flex: 1,backgroundColor:'gray'}}>
      <Text style={{color:'#fff'}}>Hello World!</Text>
      <Text>Hello World!</Text>
      <Text>Hello World!</Text>
      <Text>Hello World!</Text>
    </View>
  </SafeAreaView>
     
    );
  }
}
var styles = StyleSheet.create({

  })