import React, {Component} from "react";
import WxElement from "../native/WxElement";
import map from "lodash/map";
import {View, Text, ToastAndroid} from "react-native";

export default class WxVerticalStack extends Component {

  inputChange = (args) => {
    if (this.props.onChange)
    this.props.onChange(args);
  };

    render() {
        let {fields, padding, style, margin, title, rowSpacing} =  this.props.metadata;

        let vertical_elements = map(fields, (field, index) => {
            return <View style={{paddingTop: rowSpacing}} key={index}>
                <WxElement onTouchTap={this.props.onTouchTap} onChange={this.inputChange} fields={field}
                           elementState={this.props.elementState}/>
            </View>
        });

        return (
            <View style={style}>
                {title ? <Text>{title}</Text> : undefined }
                <View style={{flex: 1, flexDirection: 'column', padding, margin}}>
                    {vertical_elements}
                </View>
            </View>
        )
    }
}
