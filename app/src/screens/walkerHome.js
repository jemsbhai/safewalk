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




export default function WalkerHome({}) {
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
    const [name, setName] = useState('Amy Santiago');
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
              <Text style={{fontFamily:'AR', fontSize:20, color:'#FFF', textAlign:'left'}}>Help others feel safe by becoming a...</Text>
                <Text style={{fontFamily:'BR', fontSize:90, color:'#FFF', textAlign:'center', marginTop:'-2.5%'}}>SAFEWALKER</Text>
              </View>
              <View style={{marginTop:'10%', backgroundColor:'#FFF', alignSelf:'center', width:'100%'}}>
             {step && !fetchUser &&<ActivityIndicator animating={true} color={Colors.blue300} size={70} />}
             {step && fetchUser &&<View>
                 <Text style={{fontFamily:'AR', fontSize:20, color:"#83C3FF", textAlign:'center'}}>Verify yourself by taking a selfie:</Text>
                <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
                 <Avatar.Image size={100} style={{alignSelf:'center', backgroundColor:'#FFF'}} source={{uri:'https://i.pinimg.com/originals/89/8e/98/898e98b77d60b12120df8d45ccc8cf30.png'}} />
                 <Text onPress={()=>{takePicture}} style={{fontFamily:'AR', fontSize:20, fontWeight:'bold', color:'#000', textAlign:'center'}}>{name}</Text>
             </View>}
               
                 {!fetchUser &&<TouchableOpacity onPress={()=>{setStep(!step);setTimeout(() => {
                     setFtechUser(true);
                 }, 2000);}}><Text style={{fontFamily:'AR', fontSize:20, textAlign:'center', alignSelf:'center', backgroundColor:'#83C3FF', color:'#FFF', width:'70%', paddingVertical:'4.5%', borderRadius:10, elevation:2, marginTop:'15%'}}>
                     Help Someone
                 </Text></TouchableOpacity>}
                 {fetchUser && step &&<TouchableOpacity onPress={()=>{navigation.navigate('WalkerMap',{origin:origin, stop:stop, destination:destination});setFtechUser(false); setStep(false)}}><Text style={{fontFamily:'AR', fontSize:20, textAlign:'center', alignSelf:'center', backgroundColor:'#83C3FF', color:'#FFF', width:'70%', paddingVertical:'4.5%', borderRadius:10, elevation:2, marginTop:'5%'}}>
                     Verify and get details
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