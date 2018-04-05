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
//var ScrollableTabView = require('react-native-scrollable-tab-view');
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import AttendanceS from "./AttendanceS";
import MarkAttendance from "./MarkAttendance";
import DayWise from "./DayWise";
import PendingA from "./PendingA";
import SplashScreen from "react-native-splash-screen";


class Attendance extends React.Component {
    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    }


    render() {
        return (
            <ScrollableTabView
                style={{marginTop: 20,}}
                renderTabBar={() => <DefaultTabBar />}>
                <View tabLabel='Mark Attendance'><MarkAttendance/></View>
                <View tabLabel='Summary'><AttendanceS/></View>
                <View tabLabel='Daywise Analysis'><DayWise/></View>
                <View tabLabel='Pending Attendance'><PendingA/></View>

            </ScrollableTabView>
        );
    }
}

module.exports = Attendance;
