import React, {Component} from "react";
import {Text, TextInput,StyleSheet,View} from 'react-native';
let WxTextFieldConstant = require('../../../libs/constants/app-constants').WxElementsConstants.WxTextFieldConstant;

export default class WxTextArea extends Component {

    render() {
        let data         = this.props.metadata || {};
        let {
                disabled = WxTextFieldConstant.DISABLED,
                type     = WxTextFieldConstant.TYPE,
                full     = WxTextFieldConstant.FULL,
                 hint, title,rows
            }            = data;
        let name= data.name
        return (

          <View>
            <Text style={styles.text}>{title}</Text>
            <TextInput
              style={styles.TextBox}
              multiline={true}
              numberOfLines={rows}
              onChangeText={( text) =>{
                this.props.onChange({text, name})}}
                />

        </View>
        );
    }
}
var styles = StyleSheet.create({
  TextBox: {
    //height: 40,
    borderColor: 'gray',
    borderWidth: 1

  },
  text: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '500',
    margin: 10,
  },
});
