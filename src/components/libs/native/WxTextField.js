import React, {Component} from "react";
import {Text, TextInput,StyleSheet,View} from 'react-native';
let WxTextFieldConstant = require('../../../libs/constants/app-constants').WxElementsConstants.WxTextFieldConstant;

export default class WxTextField extends Component {

  render() {
    let data         = this.props.metadata || {};
    let {
      disabled = WxTextFieldConstant.DISABLED,
      type     = WxTextFieldConstant.TYPE,
      full     = WxTextFieldConstant.FULL,
      title,hint,input_type,defaultValue
    }            = data;
    let name=data.name
    return (
      <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput
      defaultValue={defaultValue}
      placeholder={hint}
      secureTextEntry= { input_type==='password' ? true : false}
      onChangeText={( text) =>{
        this.props.onChange({text, name})}}
        />


        </View>

      );
    }
  }
  var styles = StyleSheet.create({
    TextBox: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1

    },
    text: {
      //fontSize: 14,
      textAlign: 'left',
      fontWeight: '500',

    }
  });
