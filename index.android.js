/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, Button} from "react-native";
//import WxForm from "./src/components/NewOlrForm.js";
import WxImage from './src/components/libs/native/WxImage';
import WxForm from "./src/components/NewOlrForm.js";
import StartScreen from "./src/modules/welcomePage/startPage";
import LoginScreen from "./src/modules/login/WxLogin";
import WxAvatar from "./src/components/libs/native/WxAvatar";
//import FormComponent from './src/components/libs/Form.js';
import Feedback from "./src/modules/feedback/feedback.js";
import Feed from "./src/modules/home/feed/feed.js";
import RegistrationPage from "./src/modules/login/registrationPage";
import ForgetPassword from "./src/modules/login/forgetPassword";
import VerifyOtp from "./src/otp.js";
import ChangePassword from "./src/modules/login/changePassword.js";
import {StackNavigator} from "react-navigation";
import AttendanceS from "./src/modules/attendance/AttendanceS";
import MarkAttendance from "./src/modules/attendance/MarkAttendance";
import DayWise from "./src/modules/attendance/DayWise";
import Attendance from "./src/modules/attendance/Attendance";
import LeaveBalance from "./src/modules/leave/LeaveBalance";
import LeaveStatus from "./src/modules/leave/LeaveStatus";
import LeaveRequest from "./src/modules/leave/LeaveRequest";
import AddFeed from "./src/modules/home/feed/AddFeed.js";
//import  LeaveNav from './src/LeaveNav';
import Leaves from "./src/modules/leave/Leaves";
import QuizHome from "./src/modules/quiz/QuizHome";
//import Quiz from "./src/quiz";
import QuizUserKey from "./src/modules/quiz/quizUserKey.js";
import TabIndex from "./src/modules/home/tabIndex";
import AttendenceNav from "./src/modules/attendance/AttendenceNav";
import FCMNotification from "./src/fcmNotification";
//import LeaveNav from './src/LeaveNav.js';
import ChatTab from "./src/modules/chat/chatTab";
import GaForm from "./src/components/GaForm.js";
import LeaveForm from "./src/components/LeaveForm.js";

export default class AwesomeProject extends Component {

    render() {
        return (
            <App></App>
        );
    }
}
LoginScreen.navigationOptions      = {header: {visible: false}}
StartScreen.navigationOptions      = {header: {visible: false}}
TabIndex.navigationOptions         = {header: {visible: false}}
Leaves.navigationOptions           = {header: {visible: false}}
Attendance.navigationOptions       = {header: {visible: true}, title: "Attendance"}
RegistrationPage.navigationOptions = {header: {visible: false}}
ForgetPassword.navigationOptions   = {header: {visible: false}}
VerifyOtp.navigationOptions        = {header: {visible: false}}
ChangePassword.navigationOptions   = {header: {visible: false}}
ChatTab.navigationOptions          = {header: {visible: false}}
//QuizHome.navigationOptions          ={header:{visible: true},title:"Quiz", headerRight: <Button title="Info" />}
Feedback.navigationOptions         = {header: {visible: true}, title: "Feedback"}

const MyApp = StackNavigator({
  //AddFeed:{screen: AddFeed},
    LoginScreen: {screen: LoginScreen},

 LeaveForm       : {screen: LeaveForm},
  //   WxImage: {screen: WxImage},
    // //
    // //
    //  WxForm       : {screen: WxForm},
      GaForm : {screen: GaForm},
    //

    //WxForm     : {screen: WxForm},

    TabIndex: {screen: TabIndex},

    ChatTab: {screen: ChatTab},
    // WxForm     : {screen: WxForm},
    // TabIndex:{screen:TabIndex},

    AttendenceNav: {screen: AttendenceNav},

//LeaveNavPage:{screen:LeaveNavPage},

    WxAvatar: {screen: WxAvatar},

//  LeaveNav :{screen:LeaveNav},

    FCMNotification: {screen: FCMNotification},
    QuizUserKey    : {screen: QuizUserKey},
//  TabIndex:{screen:TabIndex},
    Feedback       : {screen: Feedback},

    QuizHome: {screen: QuizHome},
    Leaves  : {screen: Leaves},

    Feed          : {screen: Feed},
    Registration  : {screen: RegistrationPage},
    AttendanceS   : {screen: AttendanceS},
    MarkAttendance: {screen: MarkAttendance},
    ForgetPassword: {screen: ForgetPassword},
    VerifyOtp     : {screen: VerifyOtp},
    ChangePassword: {screen: ChangePassword},
    Attendance    : {screen: Attendance},
    DayWise       : {screen: DayWise},
    LeaveBalance  : {screen: LeaveBalance},
    LeaveRequest  : {screen: LeaveRequest},
    LeaveStatus   : {screen: LeaveStatus},
});

const styles = StyleSheet.create({
    container   : {
        flex           : 1,
        justifyContent : 'center',
        alignItems     : 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome     : {
        fontSize : 20,
        textAlign: 'center',
        margin   : 10,
    },
    instructions: {
        textAlign   : 'center',
        color       : '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => MyApp);
