import React, {Component} from "react";
import {View, AppRegistry, Image, Text} from "react-native";
import {WxElementsConstants} from "../../../libs/constants/app-constants";
import UserAvatar from "react-native-user-avatar";
import Icon from "react-native-vector-icons/FontAwesome";

class WxAvatar extends Component {
    render() {

        let {
                background, icon, iconColor, fontColor,
                size = WxElementsConstants.WxAvatarConstant.SIZE,
            }        =  this.props.metadata || {};


        let {mIcon, url, text}   =  icon || {};
        if (url || text)
            return (
                <View>
                    <UserAvatar textColor={fontColor} color={background} name={text || "sample-text"} src={url}
                                size={size}/>
                </View>
            );
        else if (mIcon)
            return (
                <Icon name={mIcon} size={parseInt(size)} color={iconColor}/>
            );
        else
            return (<View></View>)
    }
}


WxAvatar.propTypes = {};

export default WxAvatar;
