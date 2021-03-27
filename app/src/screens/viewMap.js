import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { colors, Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import MapView, { Marker, Polygon, Polyline } from 'react-native-maps'
import * as Location from 'expo-location';
import { FAB, Portal, Provider } from 'react-native-paper';




export default function ViewMap({route}) {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        BR: require('../assets/fonts/BR.otf'),
        AR: require('../assets/fonts/AR.otf'),

      });
    const { origin, stop, destination } = route.params;
    const [markers,setMarkers] = useState([origin.latlng,stop.latlng,destination.latlng]);
    const [locText,setLocText] = useState('Text SafeWalk Bot for directions at if you do not have an active internet connection at +1 (111) 123-4567');
    const [state, setState] = useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;
    
    
 


      if (!fontLoaded) {
        return null;
      }
    

 
    
   
    return (
        <View style={styles.container}>
     
                <View style={{elevation:3, borderRadius:10,  width:'90%', backgroundColor:'#FFF', alignSelf:'center', paddingVertical:'5%', marginTop:'10%'}}>
                      <Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', paddingLeft:'5%', color:'#0085FF', marginBottom:'1.5%'}}>Safest Route</Text>
                      <TouchableOpacity><Text style={{fontFamily:'AR', fontSize:15, textAlign:'left', paddingLeft:'2.5%', color:'#9F9F9F', 
                      paddingTop:'2.5%', backgroundColor:'#FFF', borderRadius:20, width:'90%', alignSelf:'center'}}>{locText}</Text></TouchableOpacity>
                  </View>
                  <View>
                  </View>
            <View style={{position:'absolute', width:'100%', zIndex:4}}>
              <Text> </Text>
              <Provider>
      <Portal>
        <FAB.Group
          open={open}
          color="#FFF"
          fabStyle={{backgroundColor:'#0085FF'}}
          icon={open ? 'close' : 'dots-horizontal'}
          actions={[
            
            {
              icon: 'account-star',
              color:'#0085FF',
              label: 'Find a SafeWalker',
              onPress: () => console.log('SafeWalker'),
            },
            {
              icon: 'email',
              color:'#0085FF',
              label: 'Share my location with SafeContact',
              onPress: () => console.log('SafeContact'),
            },
            {
              icon: 'alert-plus',
              color:'#0085FF',
              label: 'Report an incident',
              onPress: () => console.log('Incident'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              //select action
            }
          }}
        />
      </Portal>
    </Provider>
         
                  </View>
              
            
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF',
    },
    header: {
        height: '75%',
        width: '100%',
        marginTop: '5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    mapContainer: {
        height: '78%',
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