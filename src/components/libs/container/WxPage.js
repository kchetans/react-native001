import React, {Component} from "react";
import {Text,View} from "react-native";
import WxElement from "../native/WxElement";

export default class WxPage extends Component {

  render() {
    let item                            = this.props.metadata;
    let {header, fields, code, style}   =  item;
    console.log("item => ", item);

    return (
      <View style={style}>
      {header ? <WxElement onChange={this.props.onChange} onTouchTap={this.props.onTouchTap}
      elementState={this.props.elementState} fields={header}/> : null }

      <WxElement onChange={this.props.onChange} onTouchTap={this.props.onTouchTap}
      elementState={this.props.elementState} fields={fields}/>
      </View>
    )
  }
}
