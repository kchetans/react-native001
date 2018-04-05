import React, {Component} from "react";
import {StyleSheet, ToolbarAndroid, Text, TextInput, Button, View, Image, ToastAndroid} from "react-native";
//var ScrollableTabView = require('react-native-scrollable-tab-view');
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import LeaveStatus from "./LeaveStatus";
import LeaveRequest from "./LeaveRequest";
import LeaveBalance from "./LeaveBalance";
import SplashScreen from "react-native-splash-screen";


class Leaves extends React.Component {
    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    }


    render() {
        return (
            <ScrollableTabView>


                <LeaveRequest tabLabel="Request Leave"/>
                <LeaveStatus tabLabel="Leave Status"/>
                <LeaveBalance tabLabel="Leave Balance"/>


            </ScrollableTabView>
        );
    }
}

module.exports = Leaves;
