import React, {Component} from "react";
import {View, Switch, Text,StyleSheet} from 'react-native';
let WxToggleConstant = require('../../../libs/constants/app-constants').WxElementsConstants.WxToggleConstant;


export default class WxToggle extends Component {

    state = {
        colorTrueSwitchIsOn:  this.props.metadata.checked=== true ? true : false
    };


    render() {
        let item              = this.props.metadata || {};
        let {
                title,
                labelPosition = WxToggleConstant.LABEL_POSITION,
                value         = WxToggleConstant.VALUE,
                disabled      = WxToggleConstant.DISABLED
            }                 = item;
        let name = item.name
        return (
            <View style={styles.container}>
            {labelPosition=== 'left' ? <Text>{title}</Text> : <View></View>}
                <Switch
                    onValueChange={(value) => {this.setState({colorTrueSwitchIsOn: value})
                    let text= value
                    this.props.onChange({text, name})
                  }}
                    value={this.state.colorTrueSwitchIsOn}/>
            {  labelPosition==='right' || labelPosition=== null? <Text>{title}</Text> : <View></View>  }
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
