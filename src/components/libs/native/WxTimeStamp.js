import React,{ components} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ListView,
  ScrollView
} from 'react-native';

export default class TimeStamp extends React.Component{
 render(){
   return(

     <Text style={{color:'#6c86ff',fontSize:12}}>{this.props.metadata.time_stamp}</Text>
     )
 }
}
