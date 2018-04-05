import React, {Component} from "react";
import {ToastAndroid, StyleSheet, Text, View, ScrollView, Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const MK                 = require('react-native-material-kit');
let WxFlatButtonConstant = require('../data/app-constants').WxElementsConstants.WxFlatButtonConstant;

const {
          MKButton,
          MKColor,
      } = MK;

export default class WxButtonFlat extends Component {
    render() {
        let {metadata : data, onTouchTap}      = this.props;
        let {
                disabled,
                labelPosition                  = WxFlatButtonConstant.LABEL_POSITION,
                icon, backgroundColor,
                iconColor, name, webhook, size = 18,
                title, style, type
            }                                  = data;

        return (
            <MKButton
                backgroundColor={backgroundColor || MKColor.Indigo}
                onPress={() => {
                    console.log('hi, raised button!');
                }}
            >
                <View style={{justifyContent: 'center', flex: 1, flexDirection: 'row', margin: 7}}>
                    {labelPosition === "right" && icon ?
                        <Icon style={{padding: 5}} name={icon} color={iconColor} size={size}/> : undefined }
                    <Text pointerEvents="none" style={{color: 'white', fontSize: 18}}>
                        {title}
                    </Text>
                    {labelPosition === "left" && icon ?
                        <Icon style={{padding: 5}} name={icon} color={iconColor} size={size}/> : undefined }
                </View>
            </MKButton>
        )
    }
}
