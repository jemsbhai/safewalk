import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { ActivityIndicator, Colors, Avatar } from 'react-native-paper';
import { Camera } from 'expo-camera';




export default function FindWalkerHome({}) {
    const navigation = useNavigation();
    const [fetchUser, setFtechUser] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const origin = {"latlng":{
        "latitude":37.71848102153304, 
        "longitude": -122.13900091737451}};
const stop = {"latlng":{
    "latitude":37.71848102153304, 
    "longitude": -122.17100091737451}};
    const destination = {"latlng":{
        "latitude":37.71848102153304, 
        "longitude": -122.12500091737451}};
    
    const [fontLoaded] = useFonts({
        BR: require('../assets/fonts/BR.otf'),
        AR: require('../assets/fonts/AR.otf'),

      });
    const [name, setName] = useState('Jake Peralta');
      const [step,setStep]=useState(false);
      useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
      if (!fontLoaded) {
        return null;
      }
   
 
    
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '-20%'}}>
            <Image source={require('../assets/safewh.png')} style={{height:450, width:600, resizeMode:'contain', alignSelf:'center'}}></Image>
              <View style={{position:'absolute', zIndex:2, top:'20%', alignSelf:'center'}}>
              <Text style={{fontFamily:'AR', fontSize:20, color:'#FFF', textAlign:'left'}}>So, you're looking for a...</Text>
                <Text style={{fontFamily:'BR', fontSize:90, color:'#FFF', textAlign:'center', marginTop:'-2.5%'}}>SAFEWALKER</Text>
              </View>
              <View style={{marginTop:'10%', backgroundColor:'#FFF', alignSelf:'center', width:'100%'}}>
             {step && !fetchUser &&<ActivityIndicator animating={true} color={Colors.blue300} size={70} />}
             {step && fetchUser &&<View>
                 <Text style={{fontFamily:'AR', fontSize:20, color:"#83C3FF", textAlign:'center'}}>SafeWalker Selfie for verification</Text>
                <Image source={{uri:'https://i.pinimg.com/236x/21/be/ba/21bebab1fbac9e1a24a9aaa394dd5412.jpg'}} style={{width:100, height:125, alignSelf:'center'}}></Image>
                 <Avatar.Image size={100} style={{alignSelf:'center', backgroundColor:'#FFF'}} source={{uri:'https://static.wikia.nocookie.net/brooklynnine-nine/images/8/88/S7_Andy_Samberg_-_Jake_Peralta.png/revision/latest/top-crop/width/360/height/360?cb=20200312165943'}} />
                 <Text onPress={()=>{takePicture}} style={{fontFamily:'AR', fontSize:20, fontWeight:'bold', color:'#000', textAlign:'center'}}>{name}</Text>
             </View>}
               
                 {!fetchUser &&<TouchableOpacity onPress={()=>{setStep(!step);setTimeout(() => {
                     setFtechUser(true);
                 }, 2000);}}><Text style={{fontFamily:'AR', fontSize:20, textAlign:'center', alignSelf:'center', backgroundColor:'#83C3FF', color:'#FFF', width:'70%', paddingVertical:'4.5%', borderRadius:10, elevation:2, marginTop:'15%'}}>
                     Find Someone
                 </Text></TouchableOpacity>}
                 {fetchUser && step &&<TouchableOpacity onPress={()=>{navigation.navigate('ViewMap',{origin:origin, stop:stop, destination:destination, walker:true});setFtechUser(false); setStep(false)}}><Text style={{fontFamily:'AR', fontSize:20, textAlign:'center', alignSelf:'center', backgroundColor:'#83C3FF', color:'#FFF', width:'70%', paddingVertical:'4.5%', borderRadius:10, elevation:2, marginTop:'5%'}}>
                     Accept and send details
                 </Text></TouchableOpacity>}
                 

              </View>
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
    camera: {
        height:125,
        width:100,
        alignSelf:'center'
        
    }

});