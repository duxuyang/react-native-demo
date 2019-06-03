import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';


export default class Position extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.box1}></View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
    main:{
     flex: 1,
    },
    box1:{
      position:'absolute',
      top:50,
      left:50,
      width:100,
      height:100,
     backgroundColor: 'red',
    //   transform:'translate(-50%,-50%)',
    }
  })