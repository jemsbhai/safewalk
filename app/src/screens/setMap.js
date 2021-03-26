import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import MapView, { Marker, Polygon, Polyline } from 'react-native-maps'
import * as Location from 'expo-location';





export default function SetMap() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        BR: require('../assets/fonts/BR.otf'),
        AR: require('../assets/fonts/AR.otf'),

      });
    const [marker,setMarker] = useState(null);
    const [locText,setLocText] = useState('Select on the map');
    const [origin,setOrigin] = useState(null);
    const [stop,setStop] = useState(null);
    const [destination,setDestination] = useState(null);


    const [step, setStep] = useState(0);
    const [stepLabel, setStepLabel] = useState('Original Location');
    const _setLocation = (loc) =>{
        if(step==0){
            setOrigin(loc);
            setLocText(loc.latlng.latitude.toString()+","+loc.latlng.longitude.toString());
            setStep(1);
        }
        else if(step==1){
            setStop(loc);
            setLocText(loc.latlng.latitude.toString()+","+loc.latlng.longitude.toString());
            setStep(2);
        }
        else if(step==2){
            setDestination(loc);
            setLocText(loc.latlng.latitude.toString()+","+loc.latlng.longitude.toString());
            setStep(3);
        }
    }
    useEffect(()=>{
        if(step==1){
            setStepLabel('Stop Location');
        }
        else if(step==2){
            setStepLabel('Destination Location');
        }
        else if(step==3){
            setStepLabel('Complete');
            navigation.navigate('SelectTime',{origin:`${origin.latlng.latitude.toString()},${origin.latlng.longitude.toString()}`,stop:`${stop.latlng.latitude.toString()},${stop.latlng.longitude.toString()}`,destination:`${destination.latlng.latitude.toString()},${destination.latlng.longitude.toString()}`});
        }
        
    },[step]);


      if (!fontLoaded) {
        return null;
      }
    

 
    
   
    return (
        <View style={styles.container}>
            <View style={{  width:'100%',marginTop:'-25%', marginLeft:'-1%'}}>
            <Image source={require('../assets/header.png')} style={{height:'70%', width:'105%', resizeMode:'contain', alignSelf:'center'}}></Image>
              <View style={{position:'absolute', zIndex:4, top:'20%', alignSelf:'center'}}>
              <Text style={{fontFamily:'AR', fontSize:30, color:'#FFF', textAlign:'left'}}>So you want to go on a...</Text>
                <Text style={{fontFamily:'BR', fontSize:205, color:'#FFF', textAlign:'center', marginTop:'-10%'}}>Walk</Text>
              </View>
              </View>
         
                <View style={{elevation:3, borderRadius:10,  width:'90%', backgroundColor:'#FFF', alignSelf:'center', paddingVertical:'5%', marginTop:'-55%'}}>
                      <Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', paddingLeft:'5%', color:'#0085FF', marginBottom:'1.5%'}}>{stepLabel}</Text>
                      <TouchableOpacity><Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', paddingLeft:'5%', color:'#9F9F9F', 
                      paddingTop:'2.5%', backgroundColor:'#E4E4E4', borderRadius:20, width:'90%', alignSelf:'center'}}>{locText}</Text></TouchableOpacity>
                  </View>
              <View style={styles.mapContainer}> 
              
                <MapView
                style={styles.map}
                initialRegion={{
                latitude:37.71848102153304, 
                longitude: -122.17900091737451,
                latitudeDelta: .005,
                longitudeDelta: .005
                }} 
                onPress={(e) => {setMarker({ latlng: e.nativeEvent.coordinate  });_setLocation({ latlng: e.nativeEvent.coordinate  });}}
               >
          
                {marker &&
                <Marker coordinate={marker.latlng} pinColor="red" ></Marker>}
              
                    
            
            </MapView>
            </View>
         
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: '75%',
        width: '100%',
        marginTop: '5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    mapContainer: {
        height: '45%',
        width:'90%',
        alignSelf:'center',
        position:'relative',
        backgroundColor:'#F2F3F5',
        alignContent:'center',
        marginTop:'2.5%',
        borderRadius:20,
      },
    map: {
        height: '92%',
        borderRadius:100,
        width:'90%',
        margin:'5%',
        alignSelf:'center',
        
      },

});