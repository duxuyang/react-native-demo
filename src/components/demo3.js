import React, { Component } from 'react';
import {Text,View,TouchableOpacity,Button,ActivityIndicator,Image,ScrollView} from 'react-native'




export default class Demo3 extends Component{
  constructor(){
    super();
    var tmpList = [];
    for(var i=0;i<100;i++){
      tmpList.push("商品"+i)
    }
    this.state = {list:tmpList}
  }
  componentDidMount(){
    console.log('组件挂载完毕')
    var url = "http://jsonplaceholder.typicode.com/users"
    
    fetch(url)
    .then((response)=>response.json())
    .then((result)=>{
      console.log(result)
    })

  }
  next=()=>{
    this.props.navigation.navigate("demo2")
  }
  render(){
    return  <View >
    <ActivityIndicator color="red" size="small"></ActivityIndicator>
    {/* <ScrollView>
    {
      this.state.list.map((value)=>{
        return <Text>{value+"\n"}</Text>
      })
    }
    </ScrollView> */}
    <View>
      <Button title="页脚的一个按钮"></Button>
    </View>
    <View style={{height:100,backgroundColor:'red',alignItems:'center'}}>
       <Text>水平居中</Text>
      </View>

      <View style={{height:100,backgroundColor:'powderblue',justifyContent:'center'}}>
        <Text>垂直居中</Text>
      </View>
      <View style={{height:100,backgroundColor:'blue',
      alignItems:'center',
      justifyContent:'center'}}>
        <Text>居中</Text>
      </View>
      <Button title="跳转" onPress={this.next}></Button>
  </View>
  }
}
