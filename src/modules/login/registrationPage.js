'use strict';
import React, {Component} from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    AppRegistry,
    StyleSheet,
    Image,
    ToastAndroid,
    TouchableOpacity
} from "react-native";
import styles from "../../styles";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import FCMNotification from "../../fcmNotification";
import SplashScreen from "react-native-splash-screen";


class RegistrationPage extends React.Component {
    focusNextField(nextField) {
        this.refs[nextField].focus();
    };

    loginNavigation() {
        this.props.navigation.navigate('Login')
    }


    //    static navigationOptions = {
    //      header: {
    //        title:
    //        <View>
    //        <Text>Registration</Text>
    //        <Image source={require('./workexLogo.png')} style={{width: 35, height: 35, marginLeft: 20, marginTop:10}}/>
    //        </View>
    //      },
    //      visible:true,
    //    //  title:'Registration'
    // };

    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    };

    constructor(props) {
        super(props);
        this.state = {
            name      : null,
            mobile    : null,
            email     : null,
            password  : null,
            repassword: null,
            adhar     : null,
        };
    }

    postRegistrationData() {
        fetch('http://app.workex.in:9000/api/auth/signup/', {
            method : 'POST',
            headers: {
                'Accept'      : 'application/json',
                'Content-Type': 'application/json',
            },
            body   : JSON.stringify({
                username  : this.state.name,
                email     : this.state.email,
                password  : this.state.password,
                repassword: this.state.repassword,
                mobile    : this.state.mobile,
                adhar     : this.state.adhar,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                let userid = responseJson.user.user_id
                ToastAndroid.show('Registered', ToastAndroid.SHORT);

                fetch('http://app.workex.in:9000/api/auth/generate_otp/?&username=${responseJson.user.user_id}', {
                    method: "GET",
                }).then((response) => response.json())
                    .then((responseJson) => {
                        ToastAndroid.show(responseJson.code, ToastAndroid.SHORT);
                        this.props.navigation.navigate('VerifyOtp', {
                            code: responseJson.code, secret: responseJson.secret, username: responseJson.username
                        })
                    })
                    .catch((error) => {
                        ToastAndroid.show('generate_otp', ToastAndroid.SHORT);

                    });
            })
            .catch((error) => {
                ToastAndroid.show("Some Data Null Or Invalid Data", ToastAndroid.SHORT);

            });
    }

    render() {
        return (
            <KeyboardAwareScrollView>
                <View>
                    <View style={styles.headerView}>
                        <Image source={require('./../../assets/workexLogo.png')}
                               style={{width: 35, height: 35, marginLeft: 20, marginTop: 10}}></Image>
                             <Text style={styles.mainHeader}>Registration Form</Text>
                    </View>
                    <View style={styles.fieldbox}>
                        <Text>Name</Text>
                        <TextInput
                            ref="1"
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.focusNextField('2')}
                            style={{marginBottom: 20}}
                            placeholder="Enter name"
                            returnKeyType="next"
                            onChangeText={(name) => this.setState({name})}
                            value={this.state.name}
                            autoCorrect={true} autoFocus={true}>
                        </TextInput>
                        <Text>Email Id</Text>
                        <TextInput
                            ref="2"
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.focusNextField('3')}
                            placeholder="Enter Email"
                            returnKeyType="next"
                            style={{marginBottom: 20}}
                            keyboardType="email-address">
                        </TextInput>
                        <Text>Mobile</Text>
                        <TextInput
                            ref="3"
                            onChangeText={(mobile) => this.setState({mobile})}
                            value={this.state.mobile}
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.focusNextField('4')}
                            placeholder="Enter Mobile Number"
                            returnKeyType="next"
                            style={{marginBottom: 20}}
                            keyboardType="numeric">
                        </TextInput>
                        <Text>Adhar Card Number</Text>
                        <TextInput
                            ref="4"
                            onChangeText={(adhar) => this.setState({adhar})}
                            value={this.state.adhar}
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.focusNextField('5')}
                            placeholder="Enter Adhar Number"
                            returnKeyType="next"
                            style={{marginBottom: 20}}
                            keyboardType="numeric">
                        </TextInput>
                        <Text>Password</Text>
                        <TextInput
                            ref="5"
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.focusNextField('6')}
                            placeholder="Enter password"
                            returnKeyType="next"
                            secureTextEntry={true}
                            style={{marginBottom: 20}}
                        >
                        </TextInput>
                        <Text>Re-enter Password</Text>
                        <TextInput
                            ref="6"
                            onChangeText={(repassword) => this.setState({repassword})}
                            value={this.state.repassword}
                            placeholder="Re-enter Password"
                            secureTextEntry={true}
                            style={{marginBottom: 20}}>
                        </TextInput>
                        <TouchableOpacity>
                            <Button
                                onPress={() => this.postRegistrationData()}
                                title="Register"
                                color="#F58545"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
                            <Text onPress={() => this.loginNavigation()}>Have an account? SignIn</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Image source={require('./../../assets/workexLogo.png')}
                               style={{width: 60, height: 60, marginTop: 80, marginBottom: 6}}></Image>
                    </View>

                    <View style={styles.footerView}>
                        <Text style={styles.footerContent}>
                            Workex Solutions & Services Pvt. Ltd.
                        </Text>
                        <FCMNotification />

                    </View>

                </View>

            </KeyboardAwareScrollView>

        )
    }
}

//
// class SignupForm extends React.Component{
//
//  constructor (props){
//    super(props);
//    this.state ={
//      name :'test',
//      mobile :null,
//      email :null,
//      password : null,
//      adhar:null,
//    };
//  }
//   render(){
//     // const { navigate } = this.props.navigation;
//
//     return(
//
//     )
//   }
// }

// function postRegistrationData() {
//   //   return fetch('https://mywebsite.com/endpoint/', {
//   //   method: 'POST',
//   //   headers: {
//   //     'Accept': 'application/json',
//   //     'Content-Type': 'application/json',
//   //   },
//   //
//   // })
//   // ToastAndroid.show(JSON.stringify({
//   //    name: this.state.name,
//   //    email: this.state.email,
//   //    password:this.state.password,
//   //    mobile:this.state.mobile,
//   //    adhar:this.state.adhar
//   //  }), ToastAndroid.SHORT);
//   }
module.exports = RegistrationPage;
