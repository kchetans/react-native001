import React, {Component} from "react";
import {
  AppRegistry,
  StyleSheet,
  ToolbarAndroid,
  Text,
  TextInput,
  Button,
  View,
  Image,
  ListView,
  ToastAndroid,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import SearchBox from "../../components/libs/native/WxSearchHeader";
import GridView from "react-native-easy-gridview";
import WxAction from "../../components/libs/native/WxAction";
import apiConstant from "../../components/libs/data/apiConstant";
let {allActionApi}= apiConstant;
console.log("api",allActionApi);

class ActionsTab extends React.Component {


  componentWillMount(){
    console.log('inside componentWillMount action');
    this.getTheData();
  }
  async getTheData() {
    let userId;
    await AsyncStorage.getItem('userId', (err, result) => {
      console.log('userId',result);
      userId = result;
    });

    console.log('userId out',userId);
    try {
      console.log('allActionApi',allActionApi);
      let response = await fetch(allActionApi, {
        method : 'GET',
        headers: {
          'wx-user-token': parseInt(userId),
        },
      });
      console.log('response',response);
      let responseJson = await response.json();
      console.log('responseJson',responseJson);
      this.setState({isLoading:false});
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseJson)});
      this.setState({ dataSource1: this.state.dataSource.cloneWithRows(responseJson)});
      console.log('dataSource get the data',this.state.dataSource);

    } catch(error) {
      console.error(error);
    }

  }


  constructor(props) {
    super(props);
    let action =[];
    const ds   = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(action),
      dataSource1: ds.cloneWithRows(action),
      isLoading:true,
      refreshing:false,
    }
  //   this.state = {
  //     dataSource: ds.cloneWithRows([
  //       {
  //         "type"           : "action_item",
  //         "title"          : "Tr",
  //         "subtitle"       : "TRAINING",
  //         "backgroundColor": "#26a69a",
  //         "textColor"      : "#deffffff"
  //       },
  //       {
  //         "type"             : "action_item",
  //         "title"            : "Qz",
  //         "subtitle"         : "QUIZES",
  //         "backgroundColor"  : "#66bb6a",
  //         "notificationCount": "2",
  //         "textColor"        : "#deffffff"
  //       },
  //       {
  //         "type"           : "action_item",
  //         "title"          : "Si",
  //         "subtitle"       : "SALARY",
  //         "backgroundColor": "#42a5f5",
  //         "textColor"      : "#deffffff"
  //       },
  //       {
  //         "type"           : "action_item",
  //         "title"          : "Lv",
  //         "subtitle"       : "LEAVE",
  //         "backgroundColor": "#7e57c2",
  //         "textColor"      : "#deffffff",
  //         "nav"            : "LeaveNav"
  //       }
  //     ]
  //   ),
  //
  //   dataSource1: ds.cloneWithRows([
  //     {
  //       "type"           : "action_item",
  //       "title"          : "Re",
  //       "subtitle"       : "REPORT",
  //       "backgroundColor": "#ffa726",
  //       "textColor"      : "#deffffff"
  //     },
  //     {
  //       "type"           : "action_item",
  //       "title"          : "Att",
  //       "subtitle"       : "ATTENDANCE",
  //       "backgroundColor": "#ab47bc",
  //       "textColor"      : "#deffffff",
  //       "nav"            : "AttendenceNav"
  //     },
  //     {
  //       "type"           : "action_item",
  //       "title"          : "Att",
  //       "subtitle"       : "INCENTIVES",
  //       "backgroundColor": "#5c6bc0",
  //       "textColor"      : "#deffffff"
  //     },
  //     {
  //       "type"           : "action_item",
  //       "title"          : "Lv",
  //       "subtitle"       : "LEAVE",
  //       "backgroundColor": "#7e57c2",
  //       "textColor"      : "#deffffff",
  //       "nav"            : "LeaveNav"
  //     },
  //     {
  //       "type"             : "action_item",
  //       "title"            : "Fe",
  //       "subtitle"         : "FEEDBACK",
  //       "backgroundColor"  : "#7e57c2",
  //       "textColor"        : "#deffffff",
  //       "notificationCount": "10",
  //       "nav"              : "Feedback"
  //     },
  //     {
  //       "type"           : "action_item",
  //       "title"          : "Tr",
  //       "subtitle"       : "TRAINING",
  //       "backgroundColor": "#26a69a",
  //       "textColor"      : "#deffffff"
  //     },
  //     {
  //       "type"             : "action_item",
  //       "title"            : "Qz",
  //       "subtitle"         : "QUIZES",
  //       "backgroundColor"  : "#66bb6a",
  //       "notificationCount": "2",
  //       "textColor"        : "#deffffff"
  //     },
  //     {
  //       "type"           : "action_item",
  //       "title"          : "Si",
  //       "subtitle"       : "SALARY",
  //       "backgroundColor": "#42a5f5",
  //       "textColor"      : "#deffffff"
  //     }
  //
  //   ])
  // };
}

render() {
  return (
    <View>
      <SearchBox/>
      <ScrollView>
        <View style={{padding: 15}}>
          <Text style={{fontWeight: 'bold', fontSize: 12}}>Quick Actions</Text>
          <ScrollView style={{backgroundColor: '#FAFAFA', paddingTop: 10, paddingLeft: 10}}
            horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <ListView
                enableEmptySections={true}
                horizontal={true}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <WxAction
                  nav={{
                    title            : rowData.subtitle,
                    label            : rowData.module_name,
                    backgroundColor  : rowData.backgroundColor,
                    textColor        : rowData.textColor,
                    notificationCount: rowData.notificationCount
                  }}
                  onPress={() => this.props.navigation.navigate(rowData.nav)}
                  />
              }
              />
          </View>
        </ScrollView>
        <Text style={{fontWeight: 'bold', fontSize: 12, marginTop: 10, marginBottom: 10}}>All
          Actions</Text>
        <ScrollView style={{height: 300, paddingLeft: 20}} showsVerticalScrollIndicator={false}>
          <View style={styles.listContainer}>
            <GridView
              dataSource={this.state.dataSource1}
              renderRow={(rowData) => <WxAction
                nav={{
                  title            : rowData.subtitle,
                  label            : rowData.module_name,
                  backgroundColor  : rowData.backgroundColor,
                  textColor        : rowData.textColor,
                  notificationCount: rowData.notificationCount
                }}
                onPress={() => this.props.navigation.navigate(rowData.nav)}
                />
            }
            numberOfItemsPerRow={3}
            removeClippedSubviews={false}
            initialListSize={9}
            pageSize={3}
            />
        </View>
      </ScrollView>
    </View>
  </ScrollView>
</View>
);
}
}

var styles = StyleSheet.create({
  list         : {
    //  justifyContent: 'center',
    flexDirection    : 'row',
    flexWrap         : 'wrap',
    alignItems       : 'flex-start',
    //justifyContent: 'space-between',
    marginHorizontal : 0,
    paddingHorizontal: 0
  },
  listContainer: {flex: 1},
});


module.exports = ActionsTab;
