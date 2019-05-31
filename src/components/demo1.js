import React, { Component } from 'react';
import {Text,View,StyleSheet,Button,TextInput,Switch} from 'react-native'

export default class Demo1 extends Component{
  constructor(){
    super();
    this.state = {count:0,name:'jim',list:[1,3,4,5,6,711,34],
    datas:[
      {name:'jim',age:12,sex:'男'},
      {name:'tom',age:15,sex:'女'},
      {name:'nana',age:22,sex:'男'},
      {name:'list',age:33,sex:'女'}
    ],
    val:'',
    myValue:true
  }
  }
  add=()=>{
    var m=this.state.count;
    m++;
    this.setState({count:m})
  }
  change=(text)=>{
    this.setState({val:text})
  }
  handleValueChange=(value)=>{
    console.log(value)
    this.setState({myValue:value})
  }
  render(){
    return <View>
    <Text style={{fontSize:18,color:'blue'}}>三十多岁</Text>   
    <Text style={myStyles.main}>都是佛山市</Text>
    <Text>{this.state.count}  {this.state.name}</Text>      
    {/* {
      this.state.list.map((value,index)=>{
        return <Text key={index}>
              {value}
        </Text>
      })
    }
    {
      this.state.datas.map((value,index)=>{
        return <Text key={index}>{value.name}--{value.age}--{value.sex}</Text>
      })
    } */}
    <Text>-----------------------------------------</Text>
    <Text>{this.state.count}</Text>
    <Button title="click" onPress={this.add}></Button>
    <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={this.change}  secureTextEntry={true}
        />
    <Text>{this.state.val}</Text>
    <Switch 
    value={this.state.myValue}
    onValueChange={this.handleValueChange}></Switch>
  </View>
  }
}

var myStyles = StyleSheet.create({
  main:{
    fontSize:16,
    color:'red',

  }
})




