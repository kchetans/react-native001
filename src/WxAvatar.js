import React, {components} from "react";
import {Text, View, StyleSheet, ListView, ScrollView} from "react-native";
import UserAvatar from "react-native-user-avatar";


export default class Avatar extends React.Component {
    render() {
        return (

            <UserAvatar textColor={this.props.metadata.name_color} color={this.props.metadata.name_color}
                        name={this.props.metadata.name || "sample-text"} src={this.props.metadata.avatar}
                        size={50}/>
        )
    }
}
