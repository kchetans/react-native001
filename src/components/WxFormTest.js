import React, {Component} from 'react';
import {ScrollView, ToastAndroid} from 'react-native';
import orlFormConfig  from '../config/olr-form-config';
import SplashScreen from 'react-native-splash-screen'

import WxElement from './libs/native/WxElement';
//import WxButton from './libs/native/WxButton';

export default class WxForm extends Component {

  state = {
        formSubmitInfo: {}
    };

    inputChange = (args) => {
      //  let { name,value} = args;
        let {formSubmitInfo}  =  this.state;
        ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
        //this.setState({formSubmitInfo: update(formSubmitInfo, {[name]: {$set: value}})});
      //  if (this.props.onChange)
          //  this.props.onChange(args);
    };

    componentDidMount() {
     // do anything while splash screen keeps, use await to wait for an async task.
      SplashScreen.hide();
    }


    render() {
        return <ScrollView><WxElement onChange={this.inputChange} ref="main_form" fields={orlFormConfig.fields}/></ScrollView>;    }
}
