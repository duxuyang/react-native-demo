
import React, { Component } from 'react';
import { View, Text ,Button,Image, Alert,Platform, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';
export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: {},
    };
  }
  open=()=>{
    const options = {
      title: '',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '选择照片',
      storageOptions: {
          skipBackup: true,
          path: 'images',
      }
  };
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
        console.log('User cancelled image picker');
    } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
    } else {
        const source = {uri: response.uri};
        this.setState({
            avatarSource: source,
        });
        console.warn(this.state.avatarSource.uri);
    }
  });
  }
  render() {
    return (
      <View>
        <Button
          onPress={this.open}
          title="打开相机"
        />
        <Image source={this.state.avatarSource} style={styles.uploadAvatar}/>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  uploadAvatar:{
    width: 150,
    height: 150,
  }
})