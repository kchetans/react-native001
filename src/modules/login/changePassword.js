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

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: null,
        };
    }

    postChangePassword() {
        fetch('https://mywebsite.com/endpoint/', {
            method : 'POST',
            headers: {
                'Accept'      : 'application/json',
                'Content-Type': 'application/json',
            },
            body   : JSON.stringify({
                password  : this.state.password,
                repassword: this.state.repassword,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                ToastAndroid.show('responseJson', ToastAndroid.SHORT);
            })
            .catch((error) => {
                ToastAndroid.show(JSON.stringify({
                    mobile: this.state.mobile,
                }), ToastAndroid.SHORT);
                this.props.navigation.navigate('Login')
            });

    }

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
                        Change Password
                    </Text>
                    <Text>Enter Password</Text>
                    <TextInput
                        ref="1"
                        password={true}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true}
                        style={{marginBottom: 20}}
                        placeholder="Enter Password"
                        autoCorrect={true} autoFocus={true}>
                    </TextInput>
                    <Text>Re-Enter Password</Text>
                    <TextInput
                        ref="2"
                        secureTextEntry={true}
                        value={this.state.repassword}
                        onChangeText={(repassword) => this.setState({repassword})}
                        style={{marginBottom: 20}}
                        placeholder="Re-Enter Password">
                    </TextInput>
                    <Button
                        onPress={() => this.postChangePassword()}
                        title="SUBMIT"
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


module.exports = ChangePassword;
