import React, {Component} from "react";
import {View, Text, Image, StyleSheet,ToastAndroid} from "react-native";
import WxElement from "../native/WxElement";
import WxHeader from "../native/WxHeader";
import {getTheme} from "react-native-material-kit";

const theme = getTheme();

let style = {
    margin     : 10,
    shadowColor: '#000'
};

export default class WxSection extends Component {

  constructor(props) {
      super(props);
      this.state           = {
          showElement: false
      };
  }

  inputChange = (args) => {
    if (this.props.onChange)
    this.props.onChange(args);
  };


 showHideSection = (args) => {
     if( this.state.showElement === true)
       this.setState({showElement:false})
     else
      this.setState({showElement:true})

  };


    render() {
        let {metadata:item, onChange, elementState, onTouchTap}= this.props;
        let {title, name, subTitle, style, fields              = [], icon, isExpandable = false, avatar} =  item;
        let myTheme                                            = Object.assign({}, theme.cardStyle, style);
        console.log("subTitle => ", subTitle);
        return (
            <View style={myTheme}>
                <View style={styles.withShadow }>
                    <WxHeader metadata={{title, subTitle, icon,isExpandable}}  onShow={this.showHideSection}/>
                    {isExpandable=== false || this.state.showElement === true?<WxElement onChange ={this.inputChange} fields={item.fields}/>:undefined}

                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({

    title     : {
        fontSize       : 20,
        backgroundColor: 'transparent',
        marginBottom   : 10
    },
    withShadow: {
        // height: 200,
        // width: 200,
        backgroundColor: '#d3d3d3',
        borderRadius   : 3,
        shadowColor    : "#FFFFFF",
        shadowOpacity  : 0.8,
        shadowRadius   : 2,
        shadowOffset   : {
            height: 4,
            width : -4
        }
    }
});
