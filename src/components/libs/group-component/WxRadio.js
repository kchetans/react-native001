import React from "react";
import {View, Text,ToastAndroid,StyleSheet} from "react-native";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import {WebHookConstants} from "../data/app-constants";
import {validateDataSource} from "../util-functions/ValidateDataSource";
import * as _ from "lodash";
import apiConstant from "../data/apiConstant";
import map from "lodash/map";

export default class WxRadio extends React.Component {
  constructor(props) {
    super(props);
    state           = {
      value : undefined,
      dataSource       : [],
      invalidDataSource: false
    };
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect(index, value){
    let text=value
    let name =this.props.metadata.name
    this.props.onChange({text,name})
  }
  componentWillMount() {
    this.getAndStoreDataSource(this.props);
  }


  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props != nextProps)
    this.getAndStoreDataSource(nextProps);
  }


  getAndStoreDataSource = (props) => {
    /** Setting dataSource in state from api or data options**/
    let metadata = props.metadata;
    let title    = metadata.title; // original title
    this.setState({title});
    /** Static**/
    if (metadata.dataOptions) {
      this.setDataSource(metadata.dataOptions);
    }
    else if (metadata.webhook) {
      let {url, method = WebHookConstants.METHOD, body, headers} = metadata.webhook;
      let newUrl = apiConstant.webhookUrl+url;
      this.setState({title: 'Loading Options...'}); //Showing loading tittle while making api request
      fetch(newUrl, {
        method : method,
        headers: headers,
        body   : JSON.stringify(body)
      })
      .then(resposne => resposne.json())
      .then(json => {
        this.setState({title});
        this.setDataSource(json.data || json);
      });
    }
  };

  setDataSource = (someDataSource) => {
    let {dataSource, invalidDataSource} = validateDataSource(someDataSource);
    this.setState({dataSource, invalidDataSource})
  };
  render() {
    let serviceItems = map(this.state.dataSource , (s, i) => {
      console.log('s.text',s.text);
      return <RadioButton key={i} value={s.value}><Text>{s.text}</Text></RadioButton>

    });
    console.log('serviceItems',serviceItems);

    return (
      <View>
        <Text style={{fontWeight:"700"}}>{this.state.title}</Text>
        { this.state.invalidDataSource ? <Text>Invalid DataSource</Text> : <View></View>}
        <RadioGroup
          color='#9575b2'
          highlightColor='#ccc8b9'
          onSelect = {(index, value) => this.onSelect(index, value)}
          >
          {serviceItems}
        </RadioGroup>
      </View>
    );
  }
};
