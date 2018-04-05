import React, {Component} from "react";
import {ScrollView, ToastAndroid,View,Text,Button} from "react-native";
import leaveFormConfig from "../config/leave-form-config";
import SplashScreen from "react-native-splash-screen";
import WxElement from "./libs/native/WxElement";
import WxHeader from "./libs/native/WxHeader";
import update from 'immutability-helper';
import styles from '../styles';
import apiConstant from "./libs/data/apiConstant";
const MK = require('react-native-material-kit');
import WxDivider from "./libs/native/WxDivider";
const {
  MKButton,
  MKColor,
} = MK;
export default class LeaveForm extends Component {
//  let title =;
  static navigationOptions = {
    title: `${leaveFormConfig.header.title}`,
    headerLeft: <Text>{leaveFormConfig.header.title}</Text>,
    header: navigation => ({
      style: {
        //  backgroundColor: '#ab47bc'
      },
      titleStyle: {
        //  color: '#FFFFFF'
      }
    })
  };

  state = {
    formSubmitInfo: {},
  };



  inputChange = (args) => {
    let {text : value, name} = args;
    let {formSubmitInfo}     =  this.state;
    console.log("args Leave" , args);
    this.setState((state) => {
      return  {formSubmitInfo: update (state.formSubmitInfo, {[name]: {$set: value}})}
    } , () => {
      console.log('formSubmitInfo LeaveForm',this.state.formSubmitInfo);
    });

    if (this.props.onChange)
    this.props.onChange(args);

  };

  componentDidMount() {
    // do anything while splash screen keeps, use await to wait for an async task.
    SplashScreen.hide();
  }
  // PostValue =()=>{
  //   let webhookUrl = apiConstant.webhookUrl;
  //
  //   if (leaveFormConfig.content_json.webhook) {
  //     console.log('leaveFormConfig.content_json.webhook',leaveFormConfig.content_json.webhook);
  //     let {url, method = WebHookConstants.METHOD, body, headers} = leaveFormConfig.content_json.webhook;
  //     let newUrl = webhookUrl+url;
  //     console.log("method",method);
  //     console.log('JSON.stringify(this.state.formSubmitInfo)',JSON.stringify(this.state.formSubmitInfo));
  //     method : method,
  //     fetch(newUrl, {
  //       method : method,
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body   : JSON.stringify(this.state.formSubmitInfo)
  //     })
  //     .then(resposne => resposne.json())
  //     .then((responseJson) => {
  //       console.log('responseJson',responseJson);
  //     })
  //     .catch(function(error) {
  //       console.log('There has been a problem with your fetch operation: ' + error.message);
  //       // ADD THIS THROW error
  //       throw error;
  //     });
  //
  //   }else{
  //     console.log('something went wrong');
  //   }
  // }

  render() {
    let FormHeader = leaveFormConfig.header;
    let FormContent = leaveFormConfig.content_json;
    return (
      <View style={{ backgroundColor: '#ffffff'}}>
        <ScrollView>
          <View style={{backgroundColor: '#eceff1'}}>
            <View style={{backgroundColor: '#eceff1'}} elevation={3}>
              <View style={{backgroundColor:'#ffffff',}} elevation={3}>

                <WxHeader metadata={FormHeader}/>
                <WxDivider/>
              </View>
            </View>
            <View style={{backgroundColor:'#eceff1',padding:10}} elevation={3}>
              <View style={{backgroundColor:'#ffffff',padding:10}} elevation={3}>
                <WxElement onChange={this.inputChange}
                  fields={FormContent}/>
              </View>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

// import React, {Component} from "react";
// import {ScrollView, ToastAndroid,View,Text,Button} from "react-native";
// import leaveFormConfig from "../config/leave-form-config";
// import SplashScreen from "react-native-splash-screen";
// import WxElement from "./libs/native/WxElement";
// import WxHeader from "./libs/native/WxHeader";
// import update from 'immutability-helper';
// import styles from '../styles';
// import apiConstant from "./libs/data/apiConstant";
// const MK = require('react-native-material-kit');
// import WxDivider from "./libs/native/WxDivider";
// const {
//   MKButton,
//   MKColor,
// } = MK;
// export default class LeaveForm extends Component {
//   static navigationOptions = {
//     title: `${leaveFormConfig.header.title}`,
//     headerLeft: <Text>{leaveFormConfig.header.title}</Text>,
//     header: navigation => ({
//       style: {
//         //  backgroundColor: '#ab47bc'
//       },
//       titleStyle: {
//         //  color: '#FFFFFF'
//       }
//     })
//   };
//
//   state = {
//     formSubmitInfo: {},
//   };
//
//
//
//   inputChange = (args) => {
//     let {text : value, name} = args;
//     let {formSubmitInfo}     =  this.state;
//     console.log("args Leave" , args);
//     this.setState((state) => {
//       return  {formSubmitInfo: update (state.formSubmitInfo, {[name]: {$set: value}})}
//     } , () => {
//       console.log('formSubmitInfo LeaveForm',this.state.formSubmitInfo);
//     });
//
//     if (this.props.onChange)
//     this.props.onChange(args);
//
//   };
//
//   componentDidMount() {
//     // do anything while splash screen keeps, use await to wait for an async task.
//     SplashScreen.hide();
//   }
//   PostValue =()=>{
//     let webhookUrl = apiConstant.webhookUrl;
//
//     if (leaveFormConfig.content_json.webhook) {
//       console.log('leaveFormConfig.content_json.webhook',leaveFormConfig.content_json.webhook);
//       let {url, method = WebHookConstants.METHOD, body, headers} = leaveFormConfig.content_json.webhook;
//       let newUrl = webhookUrl+url;
//       console.log("method",method);
//       console.log('JSON.stringify(this.state.formSubmitInfo)',JSON.stringify(this.state.formSubmitInfo));
//       method : method,
//       fetch(newUrl, {
//         method : method,
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body   : JSON.stringify(this.state.formSubmitInfo)
//       })
//       .then(resposne => resposne.json())
//       .then((responseJson) => {
//         console.log('responseJson',responseJson);
//       })
//       .catch(function(error) {
//         console.log('There has been a problem with your fetch operation: ' + error.message);
//         // ADD THIS THROW error
//         throw error;
//       });
//
//     }else{
//       console.log('something went wrong');
//     }
//   }
//
//   render() {
//     let FormHeader = leaveFormConfig.header;
//     console.log('FormHeader',FormHeader);
//     let FormContent = leaveFormConfig.content_json;
//     return (
//       <View style={{ backgroundColor: '#ffffff'}}>
//
//
//         <ScrollView>
//           <View style={{backgroundColor: '#eceff1'}}>
//             <View style={{backgroundColor: '#eceff1'}} elevation={3}>
//               <View style={{backgroundColor:'#ffffff',}} elevation={3}>
//
//                 <WxHeader metadata={FormHeader}/>
//                 <WxDivider/>
//               </View>
//             </View>
//             <View style={{backgroundColor:'#eceff1',padding:10}} elevation={3}>
//               <View style={{backgroundColor:'#ffffff',padding:10}} elevation={3}>
//                 <WxElement onChange={this.inputChange}  ref="Ga_Form"
//                   fields={FormContent}/>
//                 <MKButton
//                   backgroundColor={MKColor.Teal}
//                   shadowRadius={2}
//                   shadowOffset={{width:0, height:20}}
//                   shadowOpacity={1.7}
//                   shadowColor="black"
//                   onPress={() => this.PostValue()}
//                   >
//                   <Text pointerEvents="none"
//                     style={{color: 'white', fontWeight: 'bold',textAlign:'center',padding:10}}>
//                     SUBMIT
//                   </Text>
//                 </MKButton>
//               </View>
//             </View>
//           </View>
//
//         </ScrollView>
//       </View>
//     );
//   }
// }
