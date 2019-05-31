import React, { Component } from 'react';
import { View, Text,FlatList,StyleSheet } from 'react-native';

export default class Flatlists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: '45ttttt'},
        {key: 'mmmmm'},
        {key: 'nnnnnn'},
        {key: 'bbbbb'},
        {key: 'vvvvvvv'},
        {key: 'wweeeee'},
        {key: 'James'},
        {key: 'ppppooo'},
        {key: 'yyyyyyy'},
        {key: 'fghfdgh'},
        {key: 'fhfhfd'},
        {key: 'dsdsds'},
        {key: 'cxxczc'},
        {key: 'fasdf'},
        {key: 'eeww'},
        {key: 'we'},
        {key: 'fasdfasdf'},
        {key: 'adfasdfsadf'},
        {key: 'dsfsafqww'},
        {key: 'Jacwerewtreyson'},
        {key: 'fdgdfhgfjfgj'},
        {key: '32323232'},
        {key: '4656556'},
        {key: '766767'},
        {key: '435467'},
        {key: '8787879'},
        {key: '43657'},
        {key: 'fdfd4343'},
        {key: '1234'},
        {key: '2345'},
        {key: '3456'},
        {key: '4567'},
        {key: '5678'},
        {key: '6789'},
        {key: 'ffrrrr'},
        {key: '555432121'},
      ]
    };
  }
  more=()=>{
    console.log("加载数据")
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          //下拉刷新
          refreshing={false}
          onRefresh={()=>{console.log("刷新")}}
          //上拉加载
          onEndReachedThreshold = {0.1}
          onEndReached = {this.more}
        />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   },
   item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

})

