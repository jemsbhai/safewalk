import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function SafeWalker({}) {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        BR: require('../assets/fonts/BR.otf'),
        AR: require('../assets/fonts/AR.otf'),

      });
      
      if (!fontLoaded) {
        return null;
      }
   
 
    
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '-40%'}}>
            <Image source={require('../assets/safewh.png')} style={{height:500, width:600, resizeMode:'contain', alignSelf:'center'}}></Image>
              <View style={{position:'absolute', zIndex:2, top:'20%', alignSelf:'center'}}>
              <Text style={{fontFamily:'AR', fontSize:20, color:'#FFF', textAlign:'left'}}>Help others feel safe by becoming a...</Text>
                <Text style={{fontFamily:'BR', fontSize:90, color:'#FFF', textAlign:'center', marginTop:'-2.5%'}}>SAFEWALKER</Text>
              </View>
              <View style={{marginTop:'-1%', backgroundColor:'#FFF', alignSelf:'center', width:'100%'}}>
                 <Image source={require('../assets/security.png')} style={{height:'40%', width:'80%', resizeMode:'contain', alignSelf:'center', marginTop:'-10%'}}></Image>
                 <Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', marginTop:'1%', width:'80%', alignSelf:'center', color:'#000'}}>Are you currently employed as a security officer? Become a SafeWalker today</Text>
                 <TouchableOpacity onPress={()=>{navigation.navigate('SignUpWalker')}}><Text style={{fontFamily:'AR', fontSize:20, textAlign:'center', alignSelf:'center', backgroundColor:'#83C3FF', color:'#FFF', width:'70%', paddingVertical:'4.5%', borderRadius:10, elevation:1, marginTop:'5%'}}>
                     Sign Up
                 </Text></TouchableOpacity>
                 <TouchableOpacity><Text style={{fontFamily:'AR', fontSize:20, textAlign:'center', alignSelf:'center', borderColor:'#83C3FF', borderWidth:2, backgroundColor:'#FFF', color:'#83C3FF', width:'70%', paddingVertical:'4.5%', borderRadius:10, elevation:1, marginTop:'5%'}}>
                     Login
                 </Text></TouchableOpacity>

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

});