
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text
} from 'react-native';
import {WxElementsConstants} from "../../../libs/constants/app-constants";
import Badge from 'react-native-smart-badge'

export default class WxBadge extends Component {
  render() {
    let metadata  = this.props.metadata;

  //  let {badgeContent, badgeBody, iconColor} =  metadata;
    return (
      <View>
      <Badge textStyle={{color: '#fff',}}>
          {this.props.badgeContent}
      </Badge>
    </View>


  );
  }
}
