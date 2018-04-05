import React,{ components} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ListView,
  ScrollView
} from 'react-native';

export default class HeaderTitle extends React.Component{
 render(){
   return(

     <View>
       <Text style={{fontSize:14,color:this.props.metadata.name_color}}>
         {this.props.metadata.name}
       </Text>
     </View>
   )
 }
}
