import React, {Component} from "react";
import {ToastAndroid, StyleSheet, Text, View, ScrollView, Image} from "react-native";
const MK = require('react-native-material-kit');

const {
          MKButton,
          MKColor,
      } = MK;

export default class WxFabButton extends Component {
    render() {
        let data = this.props.metadata;
        console.log("data", data);
        let ColoredFab = MKButton.coloredFab()
        //.withStyle(styles.fab)
            .build();
        return (
            <View style={{marginTop: 10}}>
                <ColoredFab>
                    <Image pointerEvents="none"
                           source={data.src}/>
                </ColoredFab>
            </View>
        )
    }
}
