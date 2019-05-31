import React, { Component } from 'react';
import { View, Text ,Modal,Button,TouchableHighlight,AppState} from 'react-native';

export default class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      appState: AppState.currentState
    };
  }
  open=()=>{
    var m=this.state.modalVisible;
    this.setState({ modalVisible:!m });
  }
show=()=>{
  this.setState({ modalVisible:true });
}

_handleAppStateChange = (nextAppState) => {
  if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
    console.log('App has come to the foreground!')
  }
  this.setState({appState: nextAppState});
}
componentDidMount() {
  AppState.addEventListener('change', this._handleAppStateChange);
}

componentWillUnmount() {
  AppState.removeEventListener('change', this._handleAppStateChange);
}


  render() {
    return (
      <View>
       
        <Modal
          animationType="fade "//animationType指定了 modal 的动画类型。
          transparent={false}// 属性是指背景是否透明，默认为白色，将这个属性设为：true 的时候弹出一个透明背景层的modal。
          onShow={(m)=>{//回调函数会在 modal 显示时调用。
            console.log(m)
            console.log(1111)
          }}
          visible={this.state.modalVisible}//visible属性决定 modal 是否显示。
          onRequestClose={() => {//onRequestClose回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发
            alert("Modal has been closed.");
          }}
        ></Modal>

      <Button onPress={this.open}
          title="显示"></Button>
        <TouchableHighlight
          onPress={this.show}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>

        <Text>Current state is: {this.state.appState}</Text>

      </View>
    );
  }
}
