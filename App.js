import React, { Component } from 'react';
import { Text, View } from 'react-native';

import FetchLocation from './components/fetchlocation';
export default class HelloWorldApp extends Component {
  getUserLocationhndler =()=>{
    navigator.geolocation.getCurrentPosition(position=>{
      console.log(position.coords.altitude);
    },err=>console.log('err'));
   
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",color:"red" }}>
        <Text>Hello, world!</Text>
        <FetchLocation onGetlocation ={this.getUserLocationhndler}/>
      </View>
    );
  }
}