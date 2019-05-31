import React, { Component } from 'react';
import {Text,View,StyleSheet,Button,FlatList,Image,ScrollView} from 'react-native'


export default class Demo3 extends Component{
  constructor(){
    super();
    this.state = {list:[]}
  }

  showItem=(info)=>{
    return <Text key={info.index}>
        {info.item.title}
      </Text>
  }
  handlePress=()=>{
    //发送请求
  //  var url = "http://jsonplaceholder.typicode.com/posts";
    
    // fetch(url)
    //   .then((response)=>response.json())
    //   .then((result)=>{
    //     //是一个对象数组
    //     console.log(result)
    //     //处理数据，添加key
    //     for(var i=0;i<result.length;i++){
    //       result[i].key = i;
    //     }
    //     //保存数据，到列表中显示
    //     this.setState({list:result})
    //   })
  }


  render(){
    return  <View style={styles.main}>
      <View style={styles.header}>
        <View ></View>
        <View ><Text>头部</Text></View>
        <View ></View>
      </View>
    
  </View>
  }
}


var styles = StyleSheet.create({
  main:{
     flex:1,
  },
  header:{
    height:44,
    //width:300,
    flexDirection: 'row',
    backgroundColor:'skyblue',
    alignItems:'center',
  }
})


