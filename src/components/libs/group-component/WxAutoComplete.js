import  React, { Component }  from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  ToastAndroid,
  View,
  TouchableOpacity,
} from 'react-native';
import {WebHookConstants} from "../data/app-constants";
import {validateDataSource} from "../util-functions/ValidateDataSource";
import * as _ from "lodash";
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class WxAutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
    searchedAdresses: [],
      value:undefined,
      dataSource  : [],
      invalidDataSource: false
    };
  };

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
      console.log("metadata.dataOptions =>",metadata.dataOptions)
    }
    else if (metadata.webhook) {
      let {url, method = WebHookConstants.METHOD, body, headers} = metadata.webhook;
      this.setState({title: 'Loading Options...'}); //Showing loading tittle while making api request
      fetch(url, {
        method : method,
        headers: headers,
        body   : JSON.stringify(body)
      })
      .then(resposne => resposne.json())
      .then(json => {
        this.setState({title});
        this.setDataSource(json.data || json);
        console.log("json.data =>",json)
      });
    }
  };

  setDataSource = (someDataSource) => {
    let {dataSource, invalidDataSource} = validateDataSource(someDataSource);
  //  ToastAndroid.show(JSON.stringify(dataSource), ToastAndroid.SHORT);
    this.setState({dataSource, invalidDataSource})
  };


searchedAdresses = (searchedText) => {
  console.log("searchedText => " , searchedText);
  var searchedAdresses = this.state.dataSource.filter(function(adress) {
    return adress.text.toLowerCase().indexOf(searchedText.toLowerCase()) > -1;
  });
  this.setState({searchedAdresses:searchedAdresses});
  this.setState({value:searchedText});
  let text=searchedText
  let name=this.props.metadata.title
  this.props.onChange({text, name})

};


  onActionPressed(adress){
  var rows = [] ;
  this.setState({searchedAdresses: rows});
  this.setState({value:adress.text})
  //ToastAndroid.show(JSON.stringify(this.state.searchedAdresses.value), ToastAndroid.SHORT);


  //  this.props.navigation.navigate(this.props.data.navigate)
}

  renderAdress = (adress) => {
  return (
    <TouchableOpacity onPress={()=> this.onActionPressed(adress)}>
      <View style={{margin:10}}>
        <Text >{adress.text}</Text>
      </View>
    </TouchableOpacity>

  );
};
  render(){

    return (
      <View>
      <Text style={styles.fontbold}>{this.state.title}</Text>
      { this.state.invalidDataSource ? <Text>Invalid DataSource</Text> : <View></View>}
      <TextInput
            style={styles.textinput}
            value={this.state.value}
            defaultValue={this.props.metadata.defaultValue}
            onChangeText={this.searchedAdresses}
            placeholder="Type your adress here" />
        <ListView
          style={{backgroundColor:"white",width:350}}
          enableEmptySections={true}
          dataSource={ds.cloneWithRows(this.state.searchedAdresses)}
          renderRow = {this.renderAdress}
          />
  </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textinput: {
     marginTop:0,
    // backgroundColor: '#DDDDDD',
    // height: 60,
    // width: 350
  },
  fontbold:{
    fontWeight:"600"
  }
});
