import React from 'react';
import {View,StyleSheet} from 'react-native';
import Mapview from 'react-native-maps';
const map = props => {
return (
    <View style={{   width:200 ,
    height:200}}>
        <Mapview  style={{   width:200,
    height:100,}}/>
    </View>
);
};

export default map;