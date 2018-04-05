import React, {Component} from "react";
import {ScrollView, ToastAndroid} from "react-native";
import orlFormConfig from "../config/radio-buttons";
//import orlFormConfig from "../config/auto-complete";
//import orlFormConfig from "../config/v-statck";
//import orlFormConfig from "../config/buttons";
//import orlFormConfig from "../config/gaForm";
//import orlFormConfig from "../config/olr-form-config";
import SplashScreen from "react-native-splash-screen";
import WxElement from "./libs/native/WxElement";
import update from 'immutability-helper';

export default class WxForm extends Component {

  state = {
    formSubmitInfo: {}
};

inputChange = (args) => {
    let {text : value, name} = args;
    let {formSubmitInfo}     =  this.state;
    console.log("args" , args);
    ToastAndroid.show(" in Form", ToastAndroid.SHORT);
    this.setState({formSubmitInfo: update(formSubmitInfo, {[name]: {$set: value}})} , () => {
      ToastAndroid.show(JSON.stringify(this.state.formSubmitInfo), ToastAndroid.SHORT);
    });
    if (this.props.onChange)
        this.props.onChange(args);

};

    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    }


    render() {
        return (
            <ScrollView>

                <WxElement onChange={this.inputChange}  ref="main_form"
                           fields={orlFormConfig}/>

            </ScrollView>
        );
    }
}
