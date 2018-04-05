
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import BottomSheet from 'react-native-bottom-sheet';
import Icon from "react-native-vector-icons/Ionicons";

export default class WxBottomSheet extends Component {
  render() {
    return (
      <TouchableOpacity style={{marginRight: 7}}
        onPress={ () => {
             BottomSheet.showBottomSheetWithOptions({
               options: ['Bookmarks', 'View Analatics', 'Not Intrested', 'Flag This Post'],
               title: 'WxBottomSheet',
               message: 'check',
               cancelButtonIndex: 3,
             }, (value) => {
               alert(value);
             })
           } }>
          <Icon name="md-more" size={24} style={{color: "#b4b4b4"}}/>
      </TouchableOpacity>

    );
  }
}
