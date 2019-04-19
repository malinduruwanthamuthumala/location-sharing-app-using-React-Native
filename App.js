import React, { Component } from 'react';
import { Text, View } from 'react-native';

import FetchLocation from './components/fetchlocation';
import Map from './components/map'
export default class HelloWorldApp extends Component {

  state={
    userLocation:null
  }

  getUserLocationhndler =()=>{
    navigator.geolocation.getCurrentPosition(position=>{
      this.setState({
        userlocation:{
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,

        }
      })
    },err=>console.log('err'));
   
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",color:"red" }}>
      
        <FetchLocation onGetlocation ={this.getUserLocationhndler}/>
        <Map  userlocation={this.state.userlocation}/>
      </View>
    );
  }
}