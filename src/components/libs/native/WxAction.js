import React, {Component} from "react";
import {Text,TouchableOpacity,View} from 'react-native';
import WxBadge from './WxBadge'
import CornerLabel from 'react-native-smart-corner-label'

export default class WxAction extends Component {

  render() {
    console.log('nav',this.props.nav);
    return (
      <TouchableOpacity onPress={this.props.onPress}>

           <View style={{ overflow: 'hidden', //don't forget to set this
                     justifyContent: 'center', alignItems: 'center',backgroundColor:'#FFCC80', height: 80, width: 80,
                       borderColor:this.props.nav.backgroundColor,marginRight:20,marginBottom:10,backgroundColor:this.props.nav.backgroundColor, padding:10,borderRadius: 15}}>
                       <View style={{justifyContent:"center", flexDirection:'row', marginTop:5}}>

                       <Text
                       style={{fontSize:27, marginTop:5, textAlign:'center',color:this.props.nav.textColor}}
                       >{this.props.nav.title}</Text>
                       </View>
                       <View style={{justifyContent:"center", flexDirection:'row'}}>
                       <Text
                       style={{fontSize:9, marginTop:5, textAlign:'center',color:this.props.nav.textColor}}
                       >{this.props.nav.label}</Text>
                       </View>

        {this.props.nav.notificationCount?<CornerLabel
          alignment={'right'}
          cornerRadius={45}
          style={{backgroundColor: '#FDFDFD',height:25,}}
          textStyle={{fontSize: 12, color: this.props.nav.backgroundColor, }}>{this.props.nav.notificationCount}</CornerLabel>:undefined}

      </View>


          </TouchableOpacity>);

        }
      }
