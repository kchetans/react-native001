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
import styles from "../../styles";

class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: null,
        };
    }

    postForGetpassword() {

        fetch('http://app.workex.in:9000/api/auth/generate_otp/?&username=${this.state.mobile}', {
            method: "GET",
        }).then((response) => response.json())
            .then((responseJson) => {
                ToastAndroid.show(responseJson.code, ToastAndroid.SHORT);
                this.props.navigation.navigate('VerifyOtp', {
                    code    : responseJson.code,
                    secret  : responseJson.secret,
                    username: responseJson.username,
                    page    : 'forgetPassword'
                })
            })
            .catch((error) => {
                ToastAndroid.show('error forgetPassword', ToastAndroid.SHORT);

            });
    }

    //  -------------------------------------------
    // fetch('https://mywebsite.com/endpoint/', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       mobile:this.state.mobile,
    //     })
    //   }) .then((response) => response.json())
    //     .then((responseJson) => {
    //     ToastAndroid.show('responseJson', ToastAndroid.SHORT);
    //     })
    //     .catch((error) => {
    //       ToastAndroid.show(JSON.stringify({
    //         mobile:this.state.mobile,
    //       }), ToastAndroid.SHORT);
    //       this.props.navigation.navigate('VerifyOtp')
    //     });

//  }

    render() {
        return (
            <View style={styles.viewstyle}>
                <View style={styles.headerView}>
                    <Image source={require('./../../assets/workexLogo.png')}
                           style={{width: 35, height: 35, marginLeft: 20, marginTop: 10}}></Image>
                    <Text style={styles.mainHeader}>Workex</Text>
                </View>
                <View style={styles.mainView}>
                    <Text style={styles.pageTitle}>
                        Forget Password
                    </Text>
                    <Text>Enter Registered mobile number</Text>
                    <TextInput
                        ref="1"
                        value={this.state.mobile}
                        onChangeText={(mobile) => this.setState({mobile})}
                        style={{marginBottom: 20}}
                        placeholder="Registered mobile number"
                        keyboardType="numeric"
                        autoCorrect={true} autoFocus={true}>
                    </TextInput>
                    <Button
                        onPress={() => this.postForGetpassword()}
                        title="SEND OTP"
                        color="#F58545"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Image source={require('./../../assets/workexLogo.png')}
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


module.exports = ForgetPassword;
