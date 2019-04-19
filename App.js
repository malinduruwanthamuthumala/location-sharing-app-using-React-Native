import React, { Component } from 'react';
import { Text, View ,Button} from 'react-native';

import FetchLocation from './components/fetchlocation';
import Map from './components/map'
export default class HelloWorldApp extends Component {

  state={
    userLocation:null,
    userplaces:[]
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
      }); 
       fetch('https://location-sharing-4785d.firebaseio.com/places.json',{
             method:'POST',
           body: JSON.stringify({
             latitude: position.coords.latitude,
               longitude: position.coords.longitude,
             })
          })
             .then(res=>console.log(res))
             .catch(err=>console.log(err));
      
    },err=>console.log('dsfsdferr'));
   
  }

  getuserplacesHandler=() => {
    console.log("working");
    fetch('https://location-sharing-4785d.firebaseio.com/places.json')
             .then(res=>res.json())
             .then(parsedRes=>{
               const placesArray=[];
               for   (const key in parsedRes){
                 placesArray.push({
                   latitude:parsedRes[key].latitude,
                   longitude:parsedRes[key].longitude,
                   id:key
                 });
                 console.log(placesArray);
               }
               this.setState({
                 userplaces:placesArray
               })
             })
             .catch(err=>console.log(err));
            
  }
  
  
  
  render() {
    return (
      // <View ></View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",color:"red" }}>
      <Button title="Get user places" onPress={this.getuserplacesHandler}></Button>
        <FetchLocation onGetlocation ={this.getUserLocationhndler}/>
        <Map  userlocation={this.state.userlocation}
        userplaces={this.state.userplaces}/>
      </View>
    );
  }
}