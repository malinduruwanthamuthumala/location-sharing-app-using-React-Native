import React from 'react';
import {View,StyleSheet} from 'react-native';
import Mapview from 'react-native-maps';
const map = props => {
    let userlocationmarker=null;
    if(props.userlocation){
        userlocationmarker= <Mapview.Marker coordinate={props.userlocation}/>
    }
    const usersMarkers=props.userplaces.map(userPlace=><Mapview.Marker coordinate={userPlace} key={userPlace.id}/>)
return (
    <View style={{   width:'100%' ,
    height:'80%'}}>
        <Mapview  style={{   width:'100%',
    height:'100%',}}
    initialRegion={{
        latitude: 5.9704804,
        longitude: 80.708440,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      region={props.userlocation}>
     {userlocationmarker}
     {usersMarkers}
      </Mapview>
    </View>
);
};

export default map;