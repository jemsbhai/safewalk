import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';





export default function SignUpWalker({}) {
    const navigation = useNavigation();
    const [stepLabel, setStepLabel] = useState('Next');
    const [fontLoaded] = useFonts({
        BR: require('../assets/fonts/BR.otf'),
        AR: require('../assets/fonts/AR.otf'),

      });
      
      if (!fontLoaded) {
        return null;
      }
   
 
    
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '-30%'}}>
            <Image source={require('../assets/safewh.png')} style={{height:450, width:600, resizeMode:'contain', alignSelf:'center'}}></Image>
              <View style={{position:'absolute', zIndex:2, top:'19%', alignSelf:'center'}}>
              <Text style={{fontFamily:'AR', fontSize:20, color:'#FFF', textAlign:'left'}}>Help others feel safe by becoming a...</Text>
                <Text style={{fontFamily:'BR', fontSize:90, color:'#FFF', textAlign:'center', marginTop:'-2.5%'}}>SAFEWALKER</Text>
              </View>
              <View style={{marginTop:'10%', backgroundColor:'#FFF', alignSelf:'center', width:'100%'}}>
                  {stepLabel=='Next' &&<View>
                 <TextInput style={{borderColor:'#83C3FF', width:'80%', borderRadius:10, borderWidth:1, alignSelf:'center', fontSize:20, paddingLeft:'5%', paddingVertical:'2.5%'}} placeholder={'Full name'} placeholderTextColor={'#83C3FF'}></TextInput>
                 <TextInput style={{borderColor:'#83C3FF', width:'80%', borderRadius:10, borderWidth:1, alignSelf:'center', fontSize:20, paddingLeft:'5%', paddingVertical:'2.5%', marginTop:'2.5%'}} placeholder={'SSN'} placeholderTextColor={'#83C3FF'}></TextInput>
                 <TextInput style={{borderColor:'#83C3FF', width:'80%', borderRadius:10, borderWidth:1, alignSelf:'center', fontSize:20, paddingLeft:'5%', paddingVertical:'2.5%', marginTop:'2.5%'}} placeholder={'Employer'} placeholderTextColor={'#83C3FF'}></TextInput>
                 <TextInput style={{borderColor:'#83C3FF', width:'80%', borderRadius:10, borderWidth:1, alignSelf:'center', fontSize:20, paddingLeft:'5%', paddingVertical:'2.5%', marginTop:'2.5%'}} placeholder={'E-mail address'} placeholderTextColor={'#83C3FF'}></TextInput>
                 <TextInput style={{borderColor:'#83C3FF', width:'80%', borderRadius:10, borderWidth:1, alignSelf:'center', fontSize:20, paddingLeft:'5%', paddingVertical:'2.5%', marginTop:'2.5%'}} placeholder={'Password'} placeholderTextColor={'#83C3FF'}></TextInput>
                </View>}
                {stepLabel=='Signup' &&<View>
                    
                    </View>}
                 <TouchableOpacity onPress={()=>setStepLabel('Signup')}><Text style={{fontFamily:'AR', fontSize:20, textAlign:'center', alignSelf:'center', backgroundColor:'#83C3FF', color:'#FFF', width:'70%', paddingVertical:'4.5%', borderRadius:10, elevation:1, marginTop:'7.5%'}}>
                     {stepLabel}
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