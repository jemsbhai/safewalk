import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function SelectTime({route}) {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        BR: require('../assets/fonts/BR.otf'),
        AR: require('../assets/fonts/AR.otf'),

      });
      const [stopText2, setStopText2] = useState('');
      const { origin, stop, destination, originText, stopText, destinationText, skip } = route.params;
      useEffect(()=>{
          if(skip){
             setStopText2('-');
          }
          else{
              setStopText2(stopText);
          }
          setTimeout(() => {
            navigation.navigate('ViewMap',{origin,stop,destination});
          }, 2000);
          
      })
      if (!fontLoaded) {
        return null;
      }
    //   const stopArray = initialArr.map(stopField => (
    //     <Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', paddingLeft:'5%', color:'#9F9F9F', 
    //     paddingTop:'2.5%', backgroundColor:'#E4E4E4', borderRadius:20, width:'90%', alignSelf:'center'}}>Set Destination</Text>
    //   ));
    
 
    
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '-10%'}}>
            <Image source={require('../assets/header.png')} style={{height:'40%', width:'105%', resizeMode:'contain', alignSelf:'center'}}></Image>
              <View style={{position:'absolute', zIndex:2, top:'10%', alignSelf:'center'}}>
              <Text style={{fontFamily:'AR', fontSize:30, color:'#FFF', textAlign:'left'}}>So you want to go on a...</Text>
                <Text style={{fontFamily:'BR', fontSize:205, color:'#FFF', textAlign:'center', marginTop:'-10%'}}>Walk</Text>
              </View>
              <View style={{marginTop:'1.5%', backgroundColor:'#FFF', alignSelf:'center', width:'100%'}}>
                  <View style={{elevation:3, borderRadius:10,  width:'90%', backgroundColor:'#FFF', alignSelf:'center', paddingVertical:'5%'}}>
                      <Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', paddingLeft:'5%', color:'#0085FF', marginBottom:'1.5%'}}>Original Location</Text>
                      <TouchableOpacity><Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', paddingLeft:'5%', color:'#9F9F9F', 
                      paddingTop:'2.5%', backgroundColor:'#E4E4E4', borderRadius:20, width:'90%', alignSelf:'center'}}>{originText}</Text></TouchableOpacity>
                  </View>
                  <Image source={require('../assets/arrow1.png')} style={{height:'10%', width:'70%', resizeMode:'contain', alignSelf:'center'}}></Image>

                  <View style={{elevation:3, borderRadius:10,  width:'90%', backgroundColor:'#FFF', alignSelf:'center', paddingVertical:'5%'}}>
                      <Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', paddingLeft:'5%', color:'#0085FF', marginBottom:'1.5%'}}>Stop Location</Text>
                     <TouchableOpacity><Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', paddingLeft:'5%', color:'#9F9F9F', 
                      paddingTop:'2.5%', backgroundColor:'#E4E4E4', borderRadius:20, width:'90%', alignSelf:'center'}}>{stopText2}</Text></TouchableOpacity>
                      
                  </View>
                  <Image source={require('../assets/arrow2.png')} style={{height:'10%', width:'50%', resizeMode:'contain', alignSelf:'center'}}></Image>

                  <View style={{elevation:3, borderRadius:10,  width:'90%', backgroundColor:'#FFF', alignSelf:'center', paddingVertical:'5%'}}>
                      <Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', paddingLeft:'5%', color:'#0085FF', marginBottom:'1.5%'}}>Destination Location</Text>
                      <TouchableOpacity><Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', paddingLeft:'5%', color:'#9F9F9F', 
                      paddingTop:'2.5%', backgroundColor:'#E4E4E4', borderRadius:20, width:'90%', alignSelf:'center'}}>{destinationText}</Text></TouchableOpacity>
                  </View>
                  <Text style={{marginTop:'5%', fontFamily:'AR', fontSize:15, textAlign:'center'}}>Finding your safest route...</Text>
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