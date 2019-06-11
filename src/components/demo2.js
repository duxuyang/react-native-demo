import React, { Component } from 'react';
import {Text,View,StyleSheet,Button,TextInput,FlatList,Image,ScrollView} from 'react-native'



export default class Demo2 extends Component{
  constructor(){
    super();
    this.state = {list:[111111111,222222222,33333],
      myContent:""
    }
  }
  showItem=(info)=>{
    return <Text>{info.item}</Text>
  }
  change=(msg)=>{
    this.setState({myContent:msg})
  }
  handlePress=()=>{
    //获取输入框的值
    var myValue = this.state.myContent;
    //将值插入到list中
    var nowList = this.state.list;
    nowList.push(myValue);
    this.setState({list:nowList},()=>{
      console.log(this.state.list)
    })
  }
  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  }
  componentWillUnmount(){
    console.log("组件卸载demo2")
  }
  render(){
    return <ScrollView>
      <View>
      <TextInput onChangeText={this.change}></TextInput>
      <Button title="add" onPress={this.handlePress}></Button>
      <FlatList 
        renderItem={this.showItem}
        extraData={this.state}
        data={this.state.list}></FlatList>
        <Image source={require("../images/3.jpg")}></Image>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Demo2')}
        />
        <Button
          title="demo3"
          onPress={() => this.props.navigation.navigate('Demo3',{
            id:111,
            name:'tom'
          })}
        />
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Demo2')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="返回到首页"
          onPress={() => this.props.navigation.popToTop()}
        />
        <Button
          title="返回到首页111"
          onPress={() => this.props.navigation.navigate('Demo1')}
        />

    </View>
  </ScrollView>
  }
}
