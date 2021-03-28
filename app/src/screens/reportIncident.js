import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon, ButtonGroup } from 'react-native-elements'
import { useFonts } from 'expo-font';
import MapView, { Marker, Polygon, Polyline } from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Location from 'expo-location';
import { Modal, Portal, Provider } from 'react-native-paper';





export default function ReportIncident() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        BR: require('../assets/fonts/BR.otf'),
        AR: require('../assets/fonts/AR.otf'),

      });
      const [visible, setVisible] = useState(false);
      const showModal = () => {setVisible(true);setModal(0);}
      const hideModal = () => {setVisible(false);setModal(3);navigation.goBack();}
    const [incType, setIncType] = useState(null);
    const [marker,setMarker] = useState(null);
    const [modal,setModal] = useState(3);
    const [locText,setLocText] = useState('Select on map');
    const [origin,setOrigin] = useState(null);
    const [stop,setStop] = useState(null);
    const [skip,setSkip] = useState(false);
    const [destination,setDestination] = useState(null);
    let controller;
    const buttons = ['Theft', 'Dark', 'Suspicious','Boken'];
    
    const [step, setStep] = useState(0);
    const [stepLabel, setStepLabel] = useState('Incident Type');
    const _setLocation = (loc) =>{
        if(step>=2){
            setLocText('Select on map');
            setDestination(loc);
            setLocText(loc.latlng.latitude.toString()+","+loc.latlng.longitude.toString());
            setStep(3);
        }
    }
    const updateIndex = (selectedIndex) => {
        setIncType(selectedIndex);
        console.log(selectedIndex);
        setStep(1);
    };
    useEffect(()=>{
        if(step==1){
            setStepLabel('Description');
            setLocText('Tell us more');
        }
        else if(step==2){
            setStepLabel('Destination Location');
            setLocText('Select on map');
        }
        else if(step==3){
            setStepLabel('Destination Location');
           
        }
        
    },[step]);


      if (!fontLoaded) {
        return null;
      }
    

 
    
   
    return (
        <View style={styles.container}>
            <Provider>
      <Portal>
        
            <View style={{  width:'100%',marginTop:'-30%', marginLeft:'-1%'}}>
            <Image source={require('../assets/reporth.png')} style={{height:'70%', width:'105%', resizeMode:'contain', alignSelf:'center'}}></Image>
              <View style={{position:'absolute', zIndex:4, top:'25%', alignSelf:'center'}}>
              <Text style={{fontFamily:'AR', fontSize:25, color:'#FFF', textAlign:'left',paddingLeft:'.5%'}}>So you have something to...</Text>
                <Text style={{fontFamily:'BR', fontSize:170, color:'#FFF', textAlign:'center', marginTop:'-5%'}}>REPORT</Text>
              </View>
              </View>
         
                <View style={{elevation:modal, borderRadius:10,  width:'90%', backgroundColor:'#FFF', alignSelf:'center', paddingVertical:'5%', marginTop:'-60%'}}>
                      <View style={{flexDirection:'row', display:'flex'}}>
                        <Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', paddingLeft:'5%', color:'#FF5C00', marginBottom:'1.5%'}}>{stepLabel}</Text>
                      {step==1 &&<TouchableOpacity onPress={()=>{setStep(2);setStop(marker);setSkip(true)}}><Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', marginLeft:'65%', color:'#83C3FF', marginBottom:'1.5%'}}>Skip</Text></TouchableOpacity>}
                     </View>
                     {step==1 &&<TextInput style={{fontFamily:'AR', fontSize:20, textAlign:'left', paddingLeft:'5%', color:'#FF5C00', 
                      paddingTop:'2.5%', backgroundColor:'#E4E4E4', borderRadius:20, width:'90%', alignSelf:'center'}} placeholder={locText}></TextInput>}
                      {step>1 &&<TouchableOpacity><Text style={{fontFamily:'AR', fontSize:20, textAlign:'left', paddingLeft:'5%', color:'#9F9F9F', 
                      paddingTop:'2.5%', backgroundColor:'#E4E4E4', borderRadius:20, width:'90%', alignSelf:'center'}}>{locText}</Text></TouchableOpacity>}
                      {step==0 &&<View>
                          {/* <DropDownPicker
                        items={[
                            {label: 'Theft', value: 'theft'},
                            {label: 'Dark Street', value: 'dark'},
                            {label: 'Suspicious Activity', value: 'sus'},
                            {label: 'Broken Sidewalk', value: 'broken'},
                        ]}
                        defaultValue={'theft'}
                        placeholder={'Select'}
                        placeholderStyle={{color:'#FF5C00', fontFamily:'AR'}}
                        globalTextStyle={{color:'#FF5C00', fontFamily:'AR'}}
                        containerStyle={{height: 40, width:'90%', alignSelf:'center', color:'#FF5C00'}}
                        style={{backgroundColor: '#fafafa', color:'#FF5C00'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        controller={instance => controller = instance}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={(item) => {setIncType(item.value); console.log(item)}}
                        
                    /> */}
                    <ButtonGroup
                    onPress={(e)=>updateIndex(e)}
                    selectedIndex={incType}
                    buttons={buttons}
                    containerStyle={{height:30, borderRadius:10, width:'90%', alignSelf:'center', borderColor:'#FF5C00'}}
                    selectedButtonStyle={{backgroundColor:'#FF5C00'}}
                    textStyle={{color:'#FF5C00', fontFamily:'AR'}}
                  /></View>}
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
            {step==3 && !visible &&<View style={{position:'absolute', zIndex:1, bottom:10,width:'70%', backgroundColor:'#FF5C00', elevation:2, borderRadius:10, alignSelf:'center', }}>
                <TouchableOpacity><Text style={{fontFamily:'AR', fontSize:20,
         paddingVertical:'5%', textAlign:'center',  color:'#FFF'}} onPress={showModal}>Confirm</Text></TouchableOpacity></View>}
         <Modal visible={visible} onDismiss={hideModal} 
         contentContainerStyle={{borderRadius:10, height:100, width:'80%', backgroundColor:'#FF5C00', alignSelf:'center', marginTop:'50%'}}>
          <Text style={{fontFamily:'AR', fontSize:20, textAlign:'center', color:'#FFF'}}>Thank you for your report!</Text>
        </Modal>
      </Portal>
    </Provider>
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