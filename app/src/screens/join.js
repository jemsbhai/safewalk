import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Join({}) {
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
            <View style={{ marginTop: '-50%'}}>
            <Image source={require('../assets/header.png')} style={{height:'40%', width:'105%', resizeMode:'contain', alignSelf:'center'}}></Image>
              <View style={{position:'absolute', zIndex:2, top:'25%', alignSelf:'center'}}>
                <Text style={{fontFamily:'BR', fontSize:90, color:'#FFF', textAlign:'center', marginTop:'-10%'}}>Welcome</Text>
              </View>
              <View style={{marginTop:'-1.5%', backgroundColor:'#FFF', alignSelf:'center', width:'100%'}}>
                 
                 <Image source={require('../assets/safe.png')} style={{height:'40%', width:'80%', resizeMode:'contain', alignSelf:'center'}}></Image>
                 <Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', marginTop:'-5%', width:'80%', alignSelf:'center', color:'#000'}}>Heading out? Find the safest route to your destination with SafeWalk</Text>
                 <TouchableOpacity><Text style={{fontFamily:'AR', fontSize:20, textAlign:'center', alignSelf:'center', backgroundColor:'#0038FF', color:'#FFF', width:'70%', paddingVertical:'4.5%', borderRadius:10, elevation:1, marginTop:'5%'}}>
                     Sign Up
                 </Text></TouchableOpacity>
                 <TouchableOpacity><Text style={{fontFamily:'AR', fontSize:20, textAlign:'center', alignSelf:'center', borderColor:'#0038FF', borderWidth:2, backgroundColor:'#FFF', color:'#0038FF', width:'70%', paddingVertical:'4.5%', borderRadius:10, elevation:1, marginTop:'5%'}}>
                     Login
                 </Text></TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('SetMap')}><Text style={{marginTop:'2.5%', fontFamily:'AR', fontSize:20, textAlign:'center'}}>or continue as guest</Text></TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('SafeWalker')}><Text style={{marginTop:'5%', fontFamily:'AR', fontSize:18, textAlign:'center', color:'#FF9900'}}>Interested in becoming a SafeWalker?</Text></TouchableOpacity>
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