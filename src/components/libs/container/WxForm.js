import React, {Component} from "react";
import {ScrollView, ToastAndroid,Text,View} from "react-native";
import SplashScreen from "react-native-splash-screen";
import WxElement from "../native/WxElement";
import update from 'immutability-helper';
import apiConstant from "../data/apiConstant";
const MK = require('react-native-material-kit');
const {
  MKButton,
  MKColor,
} = MK;

export default class WxForm extends Component {

  state = {
    formSubmitInfo: {}
};

inputChange = (args) => {
    console.log("Form" , new Date());
    let {text : value, name} = args;
    let {formSubmitInfo}     =  this.state;
    console.log("args Form" , args);
    this.setState((state) => {
    return  {formSubmitInfo: update (state.formSubmitInfo, {[name]: {$set: value}})}
  } , () => {
      console.log('formSubmitInfo Form',this.state.formSubmitInfo);
  });

  if (this.props.onChange)
        this.props.onChange(args);
};


    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    }

    PostValue =(webhook)=>{
      let webhookUrl = apiConstant.webhookUrl;
      console.log('webhookIn',webhook);
      if (webhook) {
        console.log('webhookOut',webhook);
        let {url, method = WebHookConstants.METHOD, body, headers} = webhook;
        let newUrl = webhookUrl+url;
        console.log("method",method);
        console.log('JSON.stringify(this.state.formSubmitInfo)',JSON.stringify(this.state.formSubmitInfo));
        method : method,
        fetch(newUrl, {
          method : method,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body   : JSON.stringify(this.state.formSubmitInfo)
        })
        .then(resposne => resposne.json())
        .then((responseJson) => {
          console.log('responseJson',responseJson);
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          // ADD THIS THROW error
          throw error;
        });

      }else{
        console.log('something went wrong');
      }
    }

    render() {
        let item                     = this.props.metadata;
        const {submitUrl, submitText = 'Submit'} = item;

        return (
            <ScrollView >
                <WxElement
                    onChange={this.inputChange}
                    fields={item.fields}/>
                  <View style={{marginVertical:10}}>
                    <MKButton
                        backgroundColor={MKColor.Teal}
                        shadowRadius={2}
                        shadowOffset={{width:0, height:20}}
                        shadowOpacity={1.7}
                        shadowColor="black"
                        onPress={() => this.PostValue(item.webhook)}
                        >
                        <Text pointerEvents="none"
                          style={{color: 'white', fontWeight: 'bold',textAlign:'center',padding:10}}>
                          {submitText}
                        </Text>
                    </MKButton>

                  </View>

            </ScrollView>
        );
    }
}

// import React, {Component} from "react";
// import {ScrollView, ToastAndroid} from "react-native";
// import SplashScreen from "react-native-splash-screen";
// import WxElement from "../native/WxElement";
// import update from 'immutability-helper';
//
// export default class WxForm extends Component {
//
//   state = {
//     formSubmitInfo: {}
// };
//
// inputChange = (args) => {
//     console.log("Form" , new Date());
//     let {text : value, name} = args;
//     let {formSubmitInfo}     =  this.state;
//     console.log("args Form" , args);
//     this.setState((state) => {
//     return  {formSubmitInfo: update (state.formSubmitInfo, {[name]: {$set: value}})}
//   } , () => {
//       console.log('formSubmitInfo Form',this.state.formSubmitInfo);
//   });
//
//   if (this.props.onChange)
//         this.props.onChange(args);
// };
//
//
//     componentDidMount() {
//         // do anything while splash screen keeps, use await to wait for an async task.
//         SplashScreen.hide();
//     }
//
//
//     render() {
//         let item                     = this.props.metadata;
//         const {submitUrl, submitText = 'Submit'} = item;
//
//         return (
//             <ScrollView>
//                 <WxElement
//                     onChange={this.inputChange}
//                     fields={item.fields}/>
//                 {/*TODO implement button*/}
//             </ScrollView>
//         );
//     }
// }
