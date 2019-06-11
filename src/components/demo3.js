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
  componentWillMount (){
    console.log(this.props.navigation.state.params)
  }
  componentDidMount(){
    console.log(this.props.navigation.state.params)
  }
  componentWillUnmount(){
    console.log("组件卸载demo3")
  }
  // static navigationOptions = {
  //   title: 'demo3',
  //   headerStyle: {
  //     backgroundColor: '#f4511e',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  // }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'A Nested De'),
    };
  };


  render(){
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    const name = navigation.getParam('name');
    return  <View >
    <ActivityIndicator color="red" size="small"></ActivityIndicator>
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
      <Button
          title="返回到demo2"
          onPress={() => this.props.navigation.navigate('Demo2')}
        />
        <Button
          title="返回到首页"
          onPress={() => this.props.navigation.popToTop()}
        />
        <Text>Details Screen</Text>
        <Text>id: {id}</Text>
        <Text>name: {name}</Text>
        <Button
    title="Update the title"
    onPress={() => this.props.navigation.setParams({name: 'Updated!'})}
  />
  </View>
  }
}
