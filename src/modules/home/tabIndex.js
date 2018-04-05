import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    ToolbarAndroid,
    Text,
    TextInput,
    AsyncStorage,
    Button,
    View,
    Image,
    ToastAndroid
} from "react-native";
import {TabNavigator, StackNavigator} from "react-navigation";
//import { Icon } from 'react-native-elements';
import apiConstant from "../../components/libs/data/apiConstant";
import ActionsTab from "./tab_actions";
import NotificationsTab from "./tab_notifications";
import SettingsTab from "./tab_settings";
import Feed from "./feed/feed.js";
import FeedManager from "./feed/feedManager.js";
import SplashScreen from "react-native-splash-screen";
import AttendenceNav from "../attendance/AttendenceNav";
import Icon from "react-native-vector-icons/Ionicons";
import RegistrationPage from "../login/registrationPage";
import LeaveNav from "../leave/LeaveNav";
import Feedback from "../feedback/feedback";
import QuizHome from "../quiz/QuizHome";
//import ChatTab from './chatTab'
import Chats from "../chat/chat";
import LoginScreen from "../login/WxLogin";
import SalarySlip from "../../SalarySlip";

export const Tabs  = TabNavigator({
        Feed:{
            screen: Feed,
            navigationOptions: {
                tabBar: {
                    label: 'Feed',
                    icon : ({tintColor}) => <Icon name="md-home" size={25} color="#6c86ff"/>
                },
                header: {visible: false},
            },
        },
        ActionsTab      : {
            screen           : ActionsTab,
            navigationOptions: {
                tabBar: {
                    label: 'Action',
                    icon : ({tintColor}) => <Icon name="md-list-box" size={25} color="#6c86ff"/>
                },
                header: {visible: false},

            }
        },
        ChatTab         : {
            screen           : Chats,
            navigationOptions: {
                tabBar: {
                    label: 'chat',
                    icon : ({tintColor}) => <Icon name="md-chatbubbles" size={25} color="#6c86ff"/>
                },
                header: {visible: false},
            }
        },
        NotificationsTab: {
            screen           : NotificationsTab,
            navigationOptions: {
                tabBar: {
                    label: 'Notifications',
                    icon : ({tintColor}) => <Icon name="md-notifications" size={25} color="#6c86ff"/>
                },
                header: {visible: false},
            }
        },


        SettingsTab: {
            screen           : SettingsTab,
            navigationOptions: {
                tabBar: {
                    label: 'Setting',
                    icon : ({tintColor}) => <Icon name="md-person" size={25} color="#6c86ff"/>
                },
                header: {visible: false},
            }
        }
    },
    {
        swipeEnabled    : true,
        animationEnabled: false,
        tabBarPosition  : 'bottom',
        lazyLoad        : false,

        tabBarOptions: {
            indicatorStyle   : {
                borderBottomColor: '#ffffff',
                borderBottomWidth: 2,
            },
            activeTintColor  : 'red',
            inactiveTintColor: 'blue',
            showIcon         : true,
            showLabel        : false,
            style            : {
                backgroundColor: '#ffffff',
            },
        }
    }
);
export const Tabs2 = TabNavigator({
        Feed            : {
            screen           : FeedManager,
            navigationOptions: {
                tabBar: {
                    label: 'Feed',
                    icon : ({tintColor}) => <Icon name="md-home" size={25} color="#6c86ff"/>
                },
                header: {visible: false},
            },
        },
        ActionsTab      : {
            screen           : ActionsTab,
            navigationOptions: {
                tabBar: {
                    label: 'Action',
                    icon : ({tintColor}) => <Icon name="md-list-box" size={25} color="#6c86ff"/>
                },
                header: {visible: false},

            }
        },
        ChatTab         : {
            screen           : Chats,
            navigationOptions: {
                tabBar: {
                    label: 'chat',
                    icon : ({tintColor}) => <Icon name="md-chatbubbles" size={25} color="#6c86ff"/>
                },
                header: {visible: false},
            }
        },
        NotificationsTab: {
            screen           : NotificationsTab,
            navigationOptions: {
                tabBar: {
                    label: 'Notifications',
                    icon : ({tintColor}) => <Icon name="md-notifications" size={25} color="#6c86ff"/>
                },
                header: {visible: false},
            }
        },


        SettingsTab: {
            screen           : SettingsTab,
            navigationOptions: {
                tabBar: {
                    label: 'Setting',
                    icon : ({tintColor}) => <Icon name="md-person" size={25} color="#6c86ff"/>
                },
                header: {visible: false},
            }
        }
    },
    {
        swipeEnabled    : true,
        animationEnabled: false,
        tabBarPosition  : 'bottom',
        lazyLoad        : false,

        tabBarOptions: {
            indicatorStyle   : {
                borderBottomColor: '#ffffff',
                borderBottomWidth: 2,
            },
            activeTintColor  : 'red',
            inactiveTintColor: 'blue',
            showIcon         : true,
            showLabel        : false,
            style            : {
                backgroundColor: '#ffffff',
            },
        }
    }
);

export const Root = StackNavigator({
        Tabs         : {
            screen: Tabs,
            navigationOptions: {
                header: {visible: false},
            }
        },
        LoginScreen  : {
            screen: LoginScreen,
        },
        Registration : {screen: RegistrationPage},
        AttendenceNav: {screen: AttendenceNav},
        LeaveNav     : {screen: LeaveNav},
        Feedback     : {screen: Feedback},
        QuizHome     : {screen: QuizHome},
        SalarySlip   : {screen: SalarySlip},
    },
    {
    });

export const Root2 = StackNavigator({
        Tabs         : {
            screen: Tabs2,
        },
        LoginScreen  : {
            screen: LoginScreen,
        },
        Registration : {screen: RegistrationPage},
        AttendenceNav: {screen: AttendenceNav},
        LeaveNav     : {screen: LeaveNav},
        Feedback     : {screen: Feedback},
        QuizHome     : {screen: QuizHome},
        SalarySlip   : {screen: SalarySlip},
    },
    {
    });

class TabIndex extends React.Component {
    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    };



    render() {
         const {params} = this.props.navigation.state;
          console.log("params.userinfo",params.userInfo);
      //  if (params && params.user === "manager")
        if (params.userInfo)
            return (<Root2/>);
        else
            return (<Root/>);

    }
}


module.exports = TabIndex;
