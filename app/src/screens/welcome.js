import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Welcome() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        BR: require('../assets/fonts/BR.otf'),
        AR: require('../assets/fonts/AR.otf'),

      });
      useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Join');
        }, 1000);
      },[]);

      if (!fontLoaded) {
        return null;
      }
      
    
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '25%', alignSelf:'center' }}>
              <Image source={require('../assets/splash.png')}></Image>
              <View style={{position:'absolute', zIndex:2, top:'50%', alignSelf:'center'}}>
                <Text style={{fontFamily:'BR', fontSize:90, color:'#FF5C00'}}>Safe<Text style={{color:'#0085FF'}}>Walk</Text></Text>
                <Text style={{fontFamily:'AR', fontSize:25, color:'#000', textAlign:'center'}}>Stay Safe, Walk Freely</Text>
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
        height: '55%',
        width: '100%',
        marginTop: '-5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});