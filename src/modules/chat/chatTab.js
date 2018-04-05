import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    ToolbarAndroid,
    Text,
    TextInput,
    Button,
    View,
    Image,
    ToastAndroid
} from "react-native";
import {TabNavigator, StackNavigator} from "react-navigation";
//import { Icon } from 'react-native-elements';
import LeaveBalance from "../leave/LeaveBalance";
import SplashScreen from "react-native-splash-screen";
import Icon from "react-native-vector-icons/Ionicons";
import AttendenceNav from "../attendance/AttendenceNav";
import Chats from "./chat";

export const LeaveTabs = TabNavigator({

        Chats       : {
            screen           : Chats,
            navigationOptions: {
                tabBar: {
                    label: 'Chat',
                    icon : ({tintColor}) => <Icon name="md-chatbubbles" size={25} color='6c86ff'/>
                }
            }
        },
        LeaveBalance: {
            screen           : LeaveBalance,
            navigationOptions: {
                tabBar: {
                    label: 'Contact',
                    //icon:({tintColor}) => <Icon name="md-notifications" size={25} color={tintColor}/>
                }
            }
        }
    },
    {
        swipeEnabled    : false,
        animationEnabled: false,
        tabBarPosition  : 'top',
        lazyLoad        : false,

        tabBarOptions: {
            indicatorStyle  : {
                borderBottomColor: '#1a94f0',
                borderBottomWidth: 2,

            },
            animationEnabled: false,

            showIcon  : false,
            showLabel : true,
            style     : {
                backgroundColor: '#6c86ff',
            },
            labelStyle: {
                fontSize: 10,
            },
        },
    }
);


const ChatRoot = StackNavigator({
        LeaveTabs    : {
            screen: LeaveTabs,
        },
        AttendenceNav: {
            screen: AttendenceNav,
        }

    },
    {
        mode: 'modal',
//  headerMode: 'none',
    });

class ChatTab extends React.Component {
    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    };

    render() {
        return (

            <ChatRoot/>

        );
    }
}

module.exports = ChatTab;
