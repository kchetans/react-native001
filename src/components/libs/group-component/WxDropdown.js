import React, {Component} from "react";
import {WebHookConstants} from "../data/app-constants";
import {Text,Picker,UIExplorerBlock,StyleSheet,View,ToastAndroid} from 'react-native';
import {validateDataSource} from "../util-functions/ValidateDataSource";
import apiConstant from "../data/apiConstant";
import WxDivider from "../native/WxDivider";

import map from "lodash/map";

const Item = Picker.Item;

export default class WxDropdown extends Component {
  constructor(props) {
      super(props);

      this.state           = {
          selected : undefined,
          dataSource       : [],
          invalidDataSource: false
      };
  }
componentWillMount() {
    this.getAndStoreDataSource(this.props);
}


// componentWillReceiveProps(nextProps, nextContext) {
//     if (this.props != nextProps)
//         this.getAndStoreDataSource(nextProps);
// }

getAndStoreDataSource = (props) => {
    /** Setting dataSource in state from api or data options**/
    let metadata = props.metadata;
    let title    = metadata.title; // original title
    this.setState({title});
    console.log('dataOptions drop_down',metadata.title)
    if (metadata.dataOptions) {
        this.setDataSource(metadata.dataOptions);
    }
    else if (metadata.webhook) {
        let {url, method = WebHookConstants.METHOD, body, headers} = metadata.webhook;
        let newUrl = apiConstant.webhookUrl+url;
        console.log("newUrl",newUrl);
        this.setState({title: 'Loading Options...'}); //Showing loading tittle while making api request
        method : method,
        fetch(newUrl, {
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
    this.setState({dataSource, invalidDataSource});
    console.log(" dataSource[0].value" ,  dataSource[0].value);
    this.onValueChange("selected", dataSource[0].value);
};

    render() {
      let serviceItems = map(this.state.dataSource , (s, i) => {
      return <Picker.Item key={i} value={s.value} label={s.text} />
     });
        return (
          <View>
          <Text style={styles.fontbold}>{this.state.title}</Text>
          { this.state.invalidDataSource ? <Text>Invalid DataSource</Text> : <View></View>}
          <Picker
            style={styles.picker}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this, 'selected')}  mode="dropdown">
               {serviceItems}
              </Picker>
                <WxDivider/>
            </View>
        );
    }
    onValueChange = (key: string, value: string) => {
        console.log("Drop Down" , new Date());
      //ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
      const newState = {};
      console.log('onvaluechangge',key);
      newState[key] = value;
      console.log('newState',newState);
      this.setState(newState);
      let text=value
      let name =this.props.metadata.name
      this.props.onChange({text,name})
    };
}

var styles = StyleSheet.create({
  picker: {

  },
  fontbold:{
    fontWeight:"700"
  }
});

// import React, {Component} from "react";
// import {WebHookConstants} from "../data/app-constants";
// import {Text,Picker,UIExplorerBlock,StyleSheet,View,ToastAndroid} from 'react-native';
// import {validateDataSource} from "../util-functions/ValidateDataSource";
// import apiConstant from "../data/apiConstant";
//
// import map from "lodash/map";
//
// const Item = Picker.Item;
//
// export default class WxDropdown extends Component {
//   constructor(props) {
//       super(props);
//
//       this.state           = {
//           selected : undefined,
//           dataSource       : [],
//           invalidDataSource: false
//       };
//   }
//
// componentWillMount() {
//     this.getAndStoreDataSource(this.props);
//
// }
//
//
// componentWillReceiveProps(nextProps, nextContext) {
//     if (this.props != nextProps)
//         this.getAndStoreDataSource(nextProps);
// }
//
// getAndStoreDataSource = (props) => {
//     /** Setting dataSource in state from api or data options**/
//     let metadata = props.metadata;
//     let title    = metadata.title; // original title
//     this.setState({title});
//     console.log('metadata',metadata);
//
//     console.log('dataOptions drop_down',metadata.title)
//   //  this.setState({selected:metadata.dataOptions[0].value})
//     /** Static**/
//     if (metadata.dataOptions) {
//
//     //  this.setState({selected:metadata.dataOptions[0].value});
//       //this.props.onChange({selected,metadata.title});
//         this.setDataSource(metadata.dataOptions);
//
//     }
//     else if (metadata.webhook) {
//         let {url, method = WebHookConstants.METHOD, body, headers} = metadata.webhook;
//         let newUrl = apiConstant.webhookUrl+url;
//         console.log("newUrl",newUrl);
//         this.setState({title: 'Loading Options...'}); //Showing loading tittle while making api request
//         method : method,
//         fetch(newUrl, {
//             headers: headers,
//             body   : JSON.stringify(body)
//         })
//             .then(resposne => resposne.json())
//             .then(json => {
//                 this.setState({title});
//                 this.setDataSource(json.data || json);
//             });
//     }
// };
//
// setDataSource = (someDataSource) => {
//
//     let {dataSource, invalidDataSource} = validateDataSource(someDataSource);
//     this.setState({dataSource, invalidDataSource})
// };
//
//     render() {
//
//       let serviceItems = map(this.state.dataSource , (s, i) => {
//       return <Picker.Item key={i} value={s.value} label={s.text} />
//      });
//
//
//         return (
//           <View>
//           <Text style={styles.fontbold}>{this.state.title}</Text>
//           { this.state.invalidDataSource ? <Text>Invalid DataSource</Text> : <View></View>}
//           <Picker
//             style={styles.picker}
//             selectedValue={this.state.selected}
//             onValueChange={this.onValueChange.bind(this, 'selected')}  mode="dropdown">
//                {serviceItems}
//               </Picker>
//             </View>
//         );
//     }
//
//   //   onValueChange = (key: string, value: string) => {
//   //   const newState = {};
//   //   newState[key] = value;
//   //   this.setState(newState);
//   //   let text=value
//   //   let name =this.props.metadata.title
//   //   this.props.onChange({text,name})
//   // //  ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
//   // };
//     onValueChange = (key: string, value: string) => {
//     const newState = {};
//     newState[key] = value;
//     console.log('newState',newState);
//     this.setState(newState);
//     let text=value
//     let name =this.props.metadata.title
//     this.props.onChange({text,name})
//   //  ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
//   };
// }
//
// var styles = StyleSheet.create({
//   picker: {
//
//   },
//   fontbold:{
//     fontWeight:"700"
//   }
// });
