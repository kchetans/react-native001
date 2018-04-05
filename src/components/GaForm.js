import React, {Component} from "react";
import {ScrollView, ToastAndroid,View,Text} from "react-native";
import gaFormConfig from "../config/ga-form-config";
import SplashScreen from "react-native-splash-screen";
import WxElement from "./libs/native/WxElement";
import update from 'immutability-helper';
import WxHeader from "./libs/native/WxHeader";
import WxDivider from "./libs/native/WxDivider";

export default class GaForm extends Component {
  static navigationOptions = {
    title: `${gaFormConfig.header.title}`,
    headerLeft: <Text>{gaFormConfig.header.title}</Text>,
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
    formSubmitInfo: {}
};

inputChange = (args) => {
    let {text : value, name} = args;
    let {formSubmitInfo}     =  this.state;
    console.log("args" , args);
//    ToastAndroid.show(" in Form", ToastAndroid.SHORT);
    // this.setState({formSubmitInfo: update(formSubmitInfo, {[name]: {$set: value}})} , () => {
    //   ToastAndroid.show(JSON.stringify(this.state.formSubmitInfo), ToastAndroid.SHORT);
    // });
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

    render() {
      let FormHeader = gaFormConfig.header;
      let FormContent = gaFormConfig.content_json;
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
