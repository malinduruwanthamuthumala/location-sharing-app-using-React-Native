import React from 'react';
import {View,StyleSheet} from 'react-native';
import Mapview from 'react-native-maps';
const map = props => {
    let userlocationmarker=null;
    if(props.userlocation){
        userlocationmarker= <Mapview.Marker coordinate={props.userlocation}/>
    }
return (
    <View style={{   width:'100%' ,
    height:'80%'}}>
        <Mapview  style={{   width:'100%',
    height:'100%',}}
    initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      region={props.userlocation}>
     {userlocationmarker}
      </Mapview>
    </View>
);
};

export default map;