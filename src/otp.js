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
import styles from "./styles";

class VerifyOtp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            otp: null,
        };
    }

    postOtp() {
        ToastAndroid.show('http://app.workex.in:9000/api/auth/forgotpassword_otp/?username=${state.params.username}&secret=${state.params.secret}&code=${state.params.code}', ToastAndroid.SHORT);

        fetch('http://app.workex.in:9000/api/auth/forgotpassword_otp/?username=${state.params.username}&secret=${state.params.secret}&code=${state.params.code}', {
            method: 'GET',
        }).then((response) => response.json())
            .then((responseJson) => {
                let page = state.params.code
                ToastAndroid.show(JSON.stringify(responseJson), ToastAndroid.SHORT);
                // if ({state.params.page} === 'forgetPassword'){
                //   ToastAndroid.show('otp else', ToastAndroid.SHORT);
                //   this.props.navigation.navigate('ChangePassword')
                // }else{
                //   ToastAndroid.show('otp else', ToastAndroid.SHORT);
                this.props.navigation.navigate('Home')
                // }

            })
            .catch((error) => {
                ToastAndroid.show(JSON.stringify({
                    otp: this.state.otp,
                }), ToastAndroid.SHORT);
                this.props.navigation.navigate('ChangePassword')
            });

    }

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.viewstyle}>
                <View style={styles.headerView}>
                    <Image source={require('./assets/workexLogo.png')}
                           style={{width: 35, height: 35, marginLeft: 20, marginTop: 10}}></Image>
                    <Text style={styles.mainHeader}>Workex</Text>
                </View>
                <View style={styles.mainView}>
                    <Text style={styles.pageTitle}>
                        Verify Otp
                    </Text>
                    <Text>Enter OTP</Text>
                    <TextInput
                        ref="1"
                        value={params.code}
                        onChangeText={(otp) => this.setState({otp})}
                        style={{marginBottom: 20}}
                        placeholder="Otp"
                        keyboardType="numeric"
                        autoCorrect={true} autoFocus={true}>
                    </TextInput>
                    <Button
                        onPress={() => this.postOtp()}
                        title="VERIFY"
                        color="#F58545"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Image source={require('./assets/workexLogo.png')}
                               style={{width: 60, height: 60, marginTop: 80, marginBottom: 6}}></Image>
                    </View>
                </View>
                <View style={styles.footerView}>
                    <Text style={styles.footerContent}>
                        Workex Solutions & Services Pvt. Ltd.
                    </Text>
                </View>
            </View>

        )
    }
}


module.exports = VerifyOtp;
