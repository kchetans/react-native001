import React, {Component} from "react";
import WxAvatar from "../native/WxAvatar";
import {
    AppRegistry,
    StyleSheet,
    ToolbarAndroid,
    Text,
    TextInput,
    Button,
    View,
    Image,
    ToastAndroid,
    ScrollView,
    ListView,
    TouchableOpacity
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    cardWrapper         : {
        marginHorizontal: 20,
        marginVertical  : 5,
        borderColor     : 'lightgray',
        borderRadius    : 5,
        borderWidth     : 1
    },
    cardheader          : {
        padding: 10
    },
    cardheader_header   : {
        fontSize  : 15,
        fontWeight: 'bold',
        color     : '#757575'
    },
    cardheader_subheader: {
        color    : '#9E9E9E',
        fontStyle: 'italic',
        fontSize : 12
    },
    cardContentWrapper  : {
        paddingHorizontal: 15,
        paddingTop       : 10,
        bottom           : 5
    },
    cardActionsWrapper  : {
        paddingVertical: 4,
        flexDirection  : 'row',
        alignItems     : 'center',
        justifyContent : 'space-around'
    },
    actionButton        : {
        color      : '#E3F2FD',
        flex       : 1,
        marginRight: 10
    },
    dividerLine         : {
        borderColor: '#E3F2FD',
        borderWidth: 0.5,
        height     : 1
    },
    iconContainer       : {
        padding     : 15,
        borderWidth : 0.5,
        borderRadius: 30,
        height      : 40,
        borderColor : '#9E9E9E',
        marginRight : 10
    },
    header_icon         : {
        paddingVertical: 0
    }
});

export default  class WxHeader extends React.Component {
    render() {
        let {title, subtitle, icon, isExpandable}   = this.props.metadata;
    //    console.log("subTitle => ", subTitle);
        return (
          <TouchableOpacity onPress={() =>{
          this.props.onShow()}}>
            <View style={styles.cardheader}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{marginHorizontal: 10}}>
                        <WxAvatar metadata={{icon}}/>
                    </View>
                    <View>
                        <Text style={{fontSize: 16.05,fontWeight:'bold',textAlign:'center'}}>{title}</Text>
                        <Text style={[styles.Timestamp],{textAlign:'center'}}>{subtitle}</Text>
                    </View>
                    <View style ={{flexDirection: 'row', justifyContent: 'flex-end'}} >
                    {isExpandable=== true ?<Icon name='md-arrow-dropdown' size={35} />:<View></View>}
                    </View>
                </View>

            </View>
          </TouchableOpacity>
        );
    }
}
