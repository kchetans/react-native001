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
import LeaveStatus from "./LeaveStatus";
import LeaveRequest from "./LeaveRequest";
import LeaveBalance from "./LeaveBalance";
import SplashScreen from "react-native-splash-screen";
import AttendenceNav from "../attendance/AttendenceNav";


export const LeaveTabs = TabNavigator({

        LeaveRequest: {
            screen           : LeaveRequest,
            navigationOptions: {
                tabBar: {
                    label: 'Request',
                    //icon:({tintColor}) => <Icon name="md-open" size={25} color={tintColor}/>
                },
                header: {visible: false},
            }
        },
        LeaveStatus : {
            screen           : LeaveStatus,
            navigationOptions: {
                tabBar: {
                    label: 'Status',
                    //icon:({tintColor}) => <Icon name="md-list" size={25} color={tintColor}/>
                },
                header: {visible: false},
            }
        },
        LeaveBalance: {
            screen           : LeaveBalance,
            navigationOptions: {
                tabBar: {
                    label: 'Balance',
                    //icon:({tintColor}) => <Icon name="md-notifications" size={25} color={tintColor}/>
                },
                header: {visible: false},
            }
        }
    },
    {
        swipeEnabled    : true,
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


const LeaveRoot = StackNavigator({
        LeaveTabs    : {
            screen: LeaveTabs,
        },
        // AttendenceNav: {
        //     screen: AttendenceNav,
        // }

    },
    {
        mode: 'modal',
        //headerMode: 'none',
    });

class LeaveNav extends React.Component {
    static navigationOptions = {
        title: 'Leave',
    };

    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    };

    render() {
        return (
            <LeaveRoot/>
        );
    }
}

module.exports = LeaveNav;
