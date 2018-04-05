import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ToolbarAndroid,
  Text, TextInput,
  Button,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';
const styles = StyleSheet.create({

  dividerLine:{
    borderColor:'#ffffff',
    borderWidth:0.3
    ,
    height:50,
  //  marginLeft:10
  //  paddingLeft:5,
  }
});

class CardDivider extends React.Component{
  render(){
    return (
      <View style={styles.dividerLine}>
      </View>
    )
  }
}
class SearchBox extends React.Component{
 render(){
   return(
     <View >
         <StatusBar backgroundColor='rgba(17, 64, 170, 0.37)'/>

         <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:"#6c86ff",}} elevation={5} >
         <View style={{flexDirection:'row', alignItems:'flex-start'}}>
           <View style={{marginHorizontal:0,padding:10,}}>
             <Image source={require('./assets/logo_white.png')}
               style={{ marginTop: 7,height:18,width:40}}></Image>
           </View>
           <View style={{marginHorizontal:5,justifyContent:'space-around',}}>
              <CardDivider/>
           </View>
           <View style={{paddingTop:15,marginLeft:5}}>
           <Icon name="md-search" size={25} style={{color:"rgba(255,255,255,0.7)"}} />
           </View>
           <TextInput
               style={{color:"rgba(255,255,255,0.7)",width:260,fontSize:13.95}}
                   placeholderTextColor="rgba(255,255,255,0.7)"
                   underlineColorAndroid="rgba(255,255,255,0.7)"
                   placeholder="Search for actions, feeds, message" />
         </View>
       </View>
     </View>
   )
 }
}
module.exports =SearchBox;
