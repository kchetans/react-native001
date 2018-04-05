// import React, {Component} from "react";
// import {
//     AppRegistry,
//     View,
//     Image,
//     Text,
//     StatusBar,
//     Alert,
//     TextInput,
//     Button,
//     StyleSheet,
//     ScrollView,
//     ToastAndroid,
//     TouchableNativeFeedback,
//     TouchableOpacity,
//     TouchableHighlight,
//     AsyncStorage,
// } from "react-native";
// import SplashScreen from "react-native-splash-screen";
// import apiConstant from "../../components/libs/data/apiConstant";
// //import AsyncStorageExample from './AsyncStorageExample';
//
//   export default function loginApi() {
//
//
//       let {loginApi}= apiConstant;
//       console.log("api",loginApi);
//         //login api http://f461a768.ngrok.io/api/login
//        await fetch(loginApi, {
//             method : 'POST',
//             headers: {
//                 'Accept'      : 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body   : JSON.stringify({
//                 key  : this.state.userid,
//                 password  : this.state.password,
//             })
//         }).then((response) => response.json())
//             .then((responseJson) => {
//               if(responseJson){
//                 let userid = responseJson;
//                 console.log('userid',responseJson.user.user_id);
//                 ToastAndroid.show(responseJson.message, ToastAndroid.SHORT);
//                 AsyncStorage.setItem('userId', ""+responseJson.user.user_id);
//                  this.props.navigation.navigate('TabIndex', {userInfo:responseJson});
//                }else{
//                  ToastAndroid.show("Login Failed!!!", ToastAndroid.SHORT);
//                }
//               });
//
//             }
