import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    ToolbarAndroid,
    Text,
    StatusBar,
    TextInput,
    AsyncStorage,
    Button,
    View,
    Image,
    ToastAndroid
} from "react-native";
import {TabNavigator, StackNavigator} from "react-navigation";
//import { Icon } from 'react-native-elements';
import AttendanceS from "./AttendanceS";
import MarkAttendance from "./MarkAttendance";
import DayWise from "./DayWise";
import PendingA from "./PendingA";
import SplashScreen from "react-native-splash-screen";
import Icon from "react-native-vector-icons/Ionicons";
import apiConstant from "../../components/libs/data/apiConstant";
let {attendenceConfigApi}= apiConstant;
export const AttendenceTabs = TabNavigator({
        MarkAttendance: {
            screen           : MarkAttendance,
            navigationOptions: {
                tabBar: {
                    label: 'Attendance',
                    icon : ({tintColor}) => <Icon name="md-list" size={25} color={tintColor}/>
                },
                header: {visible: false},
            },
        },
        AttendanceS   : {
            screen           : AttendanceS,
            navigationOptions: {
                tabBar: {
                    label: 'Summary',
                    icon : ({tintColor}) => <Icon name="md-open" size={25} color={tintColor}/>
                },
                header: {visible: false},
            }
        },
        DayWise       : {
            screen           : DayWise,
            navigationOptions: {
                tabBar: {
                    label: 'Analysis',
                    icon : ({tintColor}) => <Icon name="md-notifications" size={25} color={tintColor}/>
                },
                header: {visible: false},
            }
        },
        PendingA      : {
            screen           : PendingA,
            navigationOptions: {
                tabBar: {
                    label: 'Pending',
                    icon : ({tintColor}) => <Icon name="md-options" size={25} color={tintColor}/>
                },
                header: {visible: false},
            }
        }
    },
    {
        swipeEnabled    : false,
        animationEnabled: false,
        tabBarPosition  : 'top',
        lazyLoad        : false,

        tabBarOptions: {
            indicatorStyle: {
                borderBottomColor: '#FFFFFF',
                borderBottomWidth: 2,
            },

            showIcon  : false,
            showLabel : true,
            style     : {
                backgroundColor: '#ab47bc',
            },
            labelStyle: {
                fontSize: 9,
            },
        },
    }
);

export const AttemdenceRoot = StackNavigator({
        AttendenceTabs: {
            screen: AttendenceTabs,
        },

    },
    // {
    //     mode       : 'modal',
    //
    //     //headerMode: 'none',
    // }
  );

class AttendenceNav extends React.Component {
    static navigationOptions = {
        title: 'Attendance',
        header: navigation => ({
      style: {
        backgroundColor: '#ab47bc'
      },
      titleStyle: {
        color: '#FFFFFF'
      }
    })
    };

      // componentWillMount() {
      //       this.getTheData();
      // }

    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    };

    //
    // async getTheData() {
    //   try {
    //     console.log('attendenceConfigApi',attendenceConfigApi);
    //     let response = await fetch(attendenceConfigApi, {
    //       method : 'GET',
    //       // headers: {
    //       //   'wx-user-token': parseInt(userId),
    //       // },
    //     });
    //     console.log('response',response);
    //     let responseJson = await response.json();
    //     console.log('responseJson',responseJson);
    //     let attendance_config_file1 = responseJson;
    //     // this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseJson)});
    //     // this.setState({ dataSource1: this.state.dataSource.cloneWithRows(responseJson)});
    //     console.log('attendance_config_file1',attendance_config_file1);
    //       AsyncStorage.setItem('attendance_config_file',JSON.stringify(responseJson));
    //   } catch(error) {
    //     console.error(error);
    //   }
    //
    // }

    render() {
        //console.log('attendance_config_file1',attendance_config_file1);
        return (
          <AttemdenceRoot/>
        );
    }
}

module.exports = AttendenceNav;
