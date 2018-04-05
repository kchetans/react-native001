import React, {Component} from "react";
import {
  AppRegistry,
  View,
  Image,
  Text,
  StatusBar,
  Alert,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import apiConstant from "../../components/libs/data/apiConstant";
let {attendenceConfigApi, loginApi} = apiConstant;

export default class LoginScreen extends React.Component {

  focusNextField(nextField) {
    this.refs[nextField].focus();
  };

  constructor(props) {
    super()
    this.state = {
      userid: '',
      password: ''
    }
  }

  async postLoginData() {

  // let PostApi =  {url, headers, data, body, success, error}
  // console.log('PostApi',PostApi);
  let data = {key: this.state.userid, password: this.state.password}
  let body = JSON.stringify(data);

    console.log("api", loginApi);
    let response = await fetch(loginApi, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:body
    });

    let responseJson = await response.json();
    if (responseJson) {
        ToastAndroid.show("Login successfully!!!", ToastAndroid.SHORT);
      this.attendanceConfigApi();
      let userid = responseJson;
      console.log('userid response', responseJson.user.user_id);
      ToastAndroid.show(responseJson.message, ToastAndroid.SHORT);
      AsyncStorage.setItem('userId', "" + responseJson.user.user_id);
      this.props.navigation.navigate('TabIndex', {userInfo: responseJson});

    } else {
      ToastAndroid.show("Login Failed!!!", ToastAndroid.SHORT);
    }

  }

  async attendanceConfigApi() {
    console.log('inside attendenceConfigApi', attendenceConfigApi);
    let response = await fetch(attendenceConfigApi, {method: 'GET'});
    console.log('response', response);
    let responseJson = await response.json();
    console.log('responseJson', responseJson);
    let attendance_config_file1 = responseJson;
    console.log('attendance_config_file1', attendance_config_file1);
    AsyncStorage.setItem('attendance_config_file', JSON.stringify(responseJson));
    await AsyncStorage.getItem('attendance_config_file', (err, result) => {
      console.log('attendance_config_file tab json', JSON.parse(result));

    });

  }

  // //  let username =
  // if (this.state.userid === "123" && this.state.password === "123") {
  //     //  ToastAndroid.show('login successfully', ToastAndroid.SHORT);
  //     this.props.navigation.navigate('TabIndex', {user: 'manager'});
  // } else {
  //     if (this.state.userid === "12345" && this.state.password === "123") {
  //         //  ToastAndroid.show('login successfully', ToastAndroid.SHORT);
  //         this.props.navigation.navigate('TabIndex', {user: 'user'});
  //     } else {
  //         Alert.alert(
  //             'Login',
  //             'Login Failed! Invalid Credentials',
  //             [
  //                 {text: 'OK', onPress: () => console.log('OK Pressed')},
  //             ],
  //             {cancelable: false}
  //         )
  //         ToastAndroid.show('Login Failed! Invalid Credentials', ToastAndroid.SHORT);
  //     }
  // }
  //}

  componentDidMount() {
    // do anything while splash screen keeps, use await to wait for an async task.
    SplashScreen.hide();
  }

  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="rgba(17, 64, 170, 0.37)"/>
        <View style={styles.startImageContainer}>
          <Image source={require('./workexLogo.png')} style={styles.startImage}></Image>
          <Text style={styles.title}>
            Welcome to Workex</Text>
          <Text style={styles.subtitle}>Improving work experience</Text>
        </View>
        <View style={styles.fieldbox}>
          <Text style={{
            fontSize: 20,
            color: '#4b4b4b',
            textAlign: 'center'
          }}>Login</Text>
          <TextInput ref="1" value={this.state.userid} returnKeyType="next" onChangeText={(userid) => this.setState({userid})} blurOnSubmit={false} onSubmitEditing={() => this.focusNextField('2')} style={{
            marginBottom: 20
          }} placeholder="UserId/Mobile no" autoCorrect={true} autoFocus={true}></TextInput>
          <TextInput ref="2" onChangeText={(password) => this.setState({password})} value={this.state.password} placeholder="Password" style={{
            marginBottom: 20
          }} secureTextEntry={true}></TextInput>
          <TouchableOpacity style={styles.button} onPress={() => this.postLoginData()}>
            <Text style={styles.buttontext}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 30,
          marginBottom: 20
        }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPassword')}>
            <Text>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}>
            <Text>Sign Up</Text>
          </TouchableOpacity>

        </View>

        <View></View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'blue'
  },
  startImageContainer: {
    alignItems: 'center',
    //flexGrow:1,
    height: 250,
    marginBottom: 30,
    backgroundColor: '#6c86ff',

    justifyContent: 'center'
  },
  startImage: {
    marginTop: 30,
    height: 100,
    width: 100
  },
  title: {
    fontSize: 25,
    color: '#ffffff',
    alignItems: 'center',
    //fontWeight:'bold',
    marginTop: 10
  },
  subtitle: {
    fontSize: 15,
    color: '#ffffff',
    alignItems: 'center',
    //fontWeight:'bold',
    marginTop: 10
  },
  button: {
    width: 320,
    height: 45,
    marginTop: 10,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6c86ff'
  },
  buttontext: {
    textAlign: 'center',
    padding: 10,
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  fieldbox: {
    padding: 20,
    //     marginTop:40,
    //     flex: 1, flexDirection: 'column', padding:0, margin:0,
    //     alignItems:'center',
    //     //flexGrow:1,
    // justifyContent: 'space-around'
    //   //  justifyContent:'center',

  }
})
module.exports = LoginScreen;
