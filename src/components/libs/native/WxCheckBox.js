import React, {Component} from "react";
import {Text, View, StyleSheet} from 'react-native';
import {MKCheckbox} from 'react-native-material-kit';
let WxCheckBoxConstant = require('../../../libs/constants/app-constants').WxElementsConstants.WxCheckBoxConstant;

export default class WxCheckBox extends Component {
    render() {
        let data              = this.props.metadata;
        let {
                checked       = WxCheckBoxConstant.CHECKED,
                disabled      = WxCheckBoxConstant.DISABLED,
                labelPosition = WxCheckBoxConstant.LABEL_POSITION,
                title
            }                 = data;
        let name= data.title
        return (
            <View  style={styles.container}>

                <MKCheckbox
                    checked={true}
                    onCheckedChange={( event) =>{
                      let text=event.checked
                      this.props.onChange({text,name})}}
                      />

                <Text>{title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
   }
})
