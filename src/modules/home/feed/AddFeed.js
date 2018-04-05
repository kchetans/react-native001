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
import styles from '../../../styles';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
//import FCMNotification from "../../fcmNotification";
import SplashScreen from "react-native-splash-screen";


class AddFeed extends React.Component {
  static navigationOptions = {
    title: "Add Feed",

  };

    focusNextField(nextField) {
        this.refs[nextField].focus();
    };

    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    };

    constructor(props) {
        super(props);
        this.state = {
            title      : null,
            subtitle    : null,
            imageurl    : null,
        };
    }

    postFeedData() {
    let postData = {
      feed_data : {
      "type": "training",
      "header": {
        "title": "Training",
        "subtitle": "5 hours ago",
        "headerColor": "#26a69a",
        "avatar": "https://stratisems.com/wp-content/uploads/2016/10/Training-Icon.png"
      },
      "actions": [{
          "icon": "md-thumbs-up",
          "actiontext": "Like",
          "actioncolor": "#6c86ff"
        },
        {
          "icon": "md-chatboxes",
          "actiontext": "Comment",
          "actioncolor": "#6c86ff"
        },
        {
          "icon": "md-share",
          "actiontext": "Share",
          "actioncolor": "#6c86ff",
          "actiontype": "share",
          "shareContent": "https://vjs.zencdn.net/v/oceans.mp4"
        }
      ],
      "content": {
        "imageurl": this.state.imageurl,
        "videourl": "",
        "text": this.state.title,
        "subtext": this.state.subtitle,
        "likecount": "2",
        "likeapi": "",
        "commentcount": "2",
        "commentapi": "",
        "sharecount": "2",
        "shareapi": ""
      }
}};

      console.log('postData',JSON.stringify(postData));
        fetch(' http://30221803.ngrok.io/api/feeder/feed/', {
            method : 'POST',
            headers: {
                'Accept'      : 'application/json',
                'Content-Type': 'application/json',
                'wx-user-token': 2
            },
            body   : JSON.stringify(postData)
        }).then((response) => response.json())
            .then((responseJson) => {
                      console.log('responseJson',responseJson);
                })
            .catch((error) => {
              console.log('error',error);
                ToastAndroid.show(error, ToastAndroid.SHORT);

            });
    }

    render() {
        return (
            <KeyboardAwareScrollView>
                <View>
                        <Text>Title</Text>
                        <TextInput
                            ref="1"
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.focusNextField('2')}
                            style={{marginBottom: 20}}
                            placeholder="Enter title"
                            returnKeyType="next"
                            onChangeText={(title) => this.setState({title})}
                            value={this.state.title}
                            >
                        </TextInput>
                        <Text>Sub Title</Text>
                        <TextInput
                            ref="2"
                            onChangeText={(subtitle) => this.setState({subtitle})}
                            value={this.state.email}
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.focusNextField('3')}
                            placeholder="Enter sub title"
                            returnKeyType="next"
                            style={{marginBottom: 20}}
                          >
                        </TextInput>
                        <Text>Image Url</Text>
                        <TextInput
                            ref="1"
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.focusNextField('2')}
                            style={{marginBottom: 20}}
                            placeholder="Enter image"
                            returnKeyType="next"
                            onChangeText={(imageurl) => this.setState({imageurl})}
                            value={this.state.imageurl}
                            >
                        </TextInput>

                        <TouchableOpacity>
                            <Button
                                onPress={() => this.postFeedData()}
                                title="Post"
                                color="#F58545"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </TouchableOpacity>

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
module.exports = AddFeed;
