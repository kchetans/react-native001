import React, {Component} from 'react';
import FCM, {
    FCMEvent,
    RemoteNotificationResult,
    WillPresentNotificationResult,
    NotificationType
} from 'react-native-fcm';
import {
    Text
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'


class FCMNotification extends React.Component {
    constructor(props) {
        super()
        this.state = {
            deviceToken: '',
        }
    }

    componentDidMount() {
        SplashScreen.hide();
        FCM.getFCMToken().then(token => {
            console.log("TOKEN (getFCMToken)", token);
            this.setState({deviceToken: token})
        });
        this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, (token) => {
            console.log(token)
            // fcm token may not be available on first load, catch it here
        });
    }

    render() {
        return null
    }
}

module.exports = FCMNotification;
