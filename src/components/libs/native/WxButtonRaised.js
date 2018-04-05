import React, {Component} from "react";
import {ToastAndroid, StyleSheet, Text, View, ScrollView, Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const MK                   = require('react-native-material-kit');
let WxRaisedButtonConstant = require('../data/app-constants').WxElementsConstants.WxRaisedButtonConstant;

const {
          MKButton,
          MKColor,
      } = MK;

export default class WxRaisedButton extends Component {
    render() {
        let {metadata : data, onTouchTap}      = this.props;
        let {
                disabled,
                labelPosition                  = WxRaisedButtonConstant.LABEL_POSITION,
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

    // render2() {
    //     let data = this.props.metadata;
    //     console.log("data", data);
    //     let RaisedBtn = MKButton.coloredButton()
    //         .withText(data.title)
    //         .withBackgroundColor(data.color)
    //         .withOnPress(() => {
    //             console.log("Hi, it's a colored button!");
    //         })
    //         .build();
    //     return <View><RaisedBtn /></View>
    // }
}
