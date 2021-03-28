import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { colors, Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import MapView, { Marker, Polygon, Polyline } from 'react-native-maps'
import * as Location from 'expo-location';
import { FAB, Portal, Provider, Avatar, Modal } from 'react-native-paper';
import { BarCodeScanner } from 'expo-barcode-scanner';



export default function WalkerMap({route}) {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        BR: require('../assets/fonts/BR.otf'),
        AR: require('../assets/fonts/AR.otf'),

      });
      const [visible, setVisible] = useState(false);
      const showModal = () => {setVisible(true);}
      const hideModal = () => {setVisible(false);}
    const { origin, stop, destination } = route.params;
    const [markers,setMarkers] = useState([origin.latlng,stop.latlng,destination.latlng]);
    const [locText,setLocText] = useState('Text SafeWalk Bot for directions at if you do not have an active internet connection at +1 (111) 123-4567');
    const [state, setState] = useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;
    const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate('WalkerHome');
  };
    
    
 


      if (!fontLoaded) {
        return null;
      }
    

 
    
   
    return (
        <View style={styles.container}>
     
                <View style={{elevation:3, borderRadius:10,  width:'90%', backgroundColor:'#FFF', alignSelf:'center', paddingVertical:'5%', marginTop:'10%'}}>
                      <Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', paddingLeft:'5%', color:'#0085FF', marginBottom:'1.5%'}}>Map</Text>
                      <TouchableOpacity><Text style={{fontFamily:'AR', fontSize:15, textAlign:'left', paddingLeft:'2.5%', color:'#9F9F9F', 
                      paddingTop:'2.5%', backgroundColor:'#FFF', borderRadius:20, width:'90%', alignSelf:'center'}}>{locText}</Text></TouchableOpacity>
                  </View>
                  <View>
                  </View>
            <View style={{position:'absolute', width:'100%', height:'100%', zIndex:4}}>
              <Text> </Text>
              
              <Provider>
      <Portal>
        <View>
          <View style={styles.mapContainer}>
            <MapView style={styles.map}
             style={styles.map}
             initialRegion={{
             latitude:37.71848102153304, 
             longitude: -122.17900091737451,
             latitudeDelta: .005,
             longitudeDelta: .005
             }} 
             
            >
              
             {markers.map((marker,index) => ( 
             <Marker coordinate={marker} key={index}><Image source={require('../assets/pin.png')} style={{width:24, height:24, resizeMode:'contain'}}></Image></Marker>))}
             <Polyline
             coordinates={markers}
             strokeColor="#0085FF"
             strokeWidth={3}>

             </Polyline>
             <Marker coordinate={markers[0]}><Image source={require('../assets/circle.png')} style={{width:24, height:24, resizeMode:'contain'}}></Image></Marker>
             <Marker coordinate={markers[1]}><Avatar.Image size={30} style={{alignSelf:'center', backgroundColor:'#FFF'}} source={{uri:'https://i.pinimg.com/originals/89/8e/98/898e98b77d60b12120df8d45ccc8cf30.png'}} /></Marker>
            </MapView>
          </View>
        </View>
        
        <FAB.Group
          open={open}
          color="#FFF"
          fabStyle={{backgroundColor:'#0085FF'}}
          icon={open ? 'close' : 'dots-horizontal'}
          actions={[
            
            {
              icon: 'barcode-scan',
              color:'#0085FF',
              label: 'Scan and End Walk',
              onPress: () => showModal(),
            },
            {
              icon: 'alert-plus',
              color:'#0085FF',
              label: 'Report an incident',
              onPress: () => navigation.navigate('ReportIncident'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              //select action
            }
          }}
        />
        <Modal visible={visible} onDismiss={hideModal} 
         contentContainerStyle={{borderRadius:10, height:200, width:'80%', backgroundColor:'#83C3FF', alignSelf:'center', marginTop:'50%'}}>
          <Text style={{fontFamily:'AR', fontSize:20, textAlign:'center', color:'#FFF'}}>Scan the QR code to end walk</Text>
          <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{width:100, height:120, alignSelf:'center'}}
      />
        </Modal>
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
        marginTop:'40%',
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