import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    ToolbarAndroid,
    Text,
    TextInput,
    Button,
    RefreshControl,
    View,
    Dimensions,
    AsyncStorage,
    Image,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight,
    ViewPagerAndroid,
    ToastAndroid,
    ScrollView,
    ListView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SplashScreen from "react-native-splash-screen";
import SearchBox from "../../../components/libs/native/WxSearchHeader";
import WxImage from '../../../components/libs/native/WxImage';
import * as Progress from 'react-native-progress';
import Video from 'react-native-video';
import apiConstant from "../../../components/libs/data/apiConstant";
//var VideoPlayer = require('react-native-native-video-player');
//import styless from './styles';
let {feedDataApi}= apiConstant;
console.log("api",feedDataApi);
// const {params} = this.props.navigation.state;
//  console.log("params.userinfo",params.userinfo);
const styles = StyleSheet.create({

    Supertitle : {
        fontSize: 19.95,
    },
    Posttitle  : {
        color            : '#4a4a4a',
        fontSize         : 16.05,
        marginBottom     : 5,
        //marginLeft:2,
        paddingLeft      : 1,
        paddingHorizontal: 15,


    },
    headerImage: {
        marginLeft: 9,
        height    : 18,
        width     : 18
    },
    Timestamp  : {
        fontSize: 12.00,
    },
    Source     : {
        fontSize: 12.00,
        padding : 3,
        color   : 'rgba(74,74,74,0.6)'
    },
    Action     : {
        fontSize  : 13.95,
        color     : '#6c86ff',
        fontWeight: 'bold'
    },

    liked           : {
        fontSize       : 10.95,
        color          : 'rgba(74,74,74,0.6)',
        paddingVertical: 5,
        marginLeft     : 4
    },
    LikeCommentShare: {
        color          : '#6c86ff',
        fontSize       : 13.05,
        paddingVertical: 5
    },
    content         : {
        fontSize: 12,
    },
    contentbox      : {
        flexDirection    : "column",
        justifyContent   : "flex-start",
        paddingHorizontal: 15,
    },
    cardWrapper     : {
        backgroundColor: '#ffffff',
        marginVertical : 3,
        padding        : 3,
    },
    backgroundVideo : {
        position: 'absolute',
        top     : 0,
        left    : 0,
        bottom  : 0,
        right   : 0,
    },
    cardheader      : {
        padding: 5
    },

    cardheader_subheader   : {
        color     : 'rgba(74,74,74,0.6)',
        //padding:15,
        marginLeft: 8,
        //fontStyle:'italic',
        fontSize  : 12,
    },
    cardContentWrapper     : {
        paddingHorizontal: 15,
        paddingTop       : 0,
        bottom           : 5
    },
    cardActionsWrapperRight: {
        //paddingVertical: 8,
        //  flexDirection: 'row',
        //  alignItems:'center',
        justifyContent: 'flex-end'
    },
    cardActionsWrapper     : {
        //paddingVertical: 8,
        flexDirection : 'row',
        alignItems    : 'center',
        marginLeft    : 5,
        marginRight   : 10,
        justifyContent: 'space-between'
    },
    actionButton           : {
        color      : '#E3F2FD',
        flex       : 1,
        marginRight: 10
    },
    dividerLine            : {
        borderColor: '#e5e5e5',
        borderWidth: 0.5,
        //height:1
    },
    iconContainer          : {
        padding     : 15,
        borderWidth : 0.5,
        borderRadius: 30,
        height      : 40,
        borderColor : '#9E9E9E',
        marginRight : 10
    },
    header_icon            : {
        paddingVertical: 0,
        color          : '#6c86ff'
    },
    AddFabButton           : {
        width          : 50,
        height         : 50,
        borderRadius   : 50,
        backgroundColor: '#6c86ff',
        shadowRadius   : 100,
        shadowColor    : 'black',
        alignItems     : 'center',
        position       : 'absolute',
        bottom         : 80,
        right          : 20,
    },
});

class CardHeader extends React.Component {

    render() {
        var HeaderAvatar;
        if (this.props.header === "Quiz") {
            HeaderAvatar = (
                <Image source={require('./../../../assets/quiz.png')}
                       style={styles.headerImage}/>)
        }
        if (this.props.header === "Attendance") {
            HeaderAvatar = (
                <Image source={require('./../../../assets/attendance.png')}
                       style={styles.headerImage}/>)
        }

        if (this.props.header === "Training") {
            HeaderAvatar = (
                <Image source={require('./../../../assets/training.png')}
                       style={styles.headerImage}/>)
        }
        if (this.props.header === "Payroll") {

            HeaderAvatar = (
                <Image source={require('./../../../assets/payroll.png')}
                       style={styles.headerImage}/>)
        }
        return (
            <View style={styles.cardheader}>
                <View style={{
                    flexDirection : 'row',
                    alignItems    : 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom  : 5
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                        <View style={{marginHorizontal: 0}}>
                            {HeaderAvatar}
                        </View>

                        <Text style={{fontSize: 12, marginLeft: 7, color: this.props.headerColor}}>
                            {this.props.header}

                        </Text>
                        <View style={{
                            height         : 2,
                            marginLeft     : 5,
                            width          : 2,
                            marginTop      : 8,
                            borderRadius   : 2,
                            backgroundColor: 'rgba(0,0,0,0.6)'
                        }}/>
                        <Text style={styles.cardheader_subheader}>{this.props.subheader}</Text>
                    </View>
                    <TouchableOpacity style={{marginRight: 7}}
                                      onPress={() => ToastAndroid.show('working', ToastAndroid.SHORT)}>
                        <Icon name="md-more" size={24} style={{color: "#b4b4b4"}}/>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

class CardActions extends React.Component {
    render() {
        return (
            <View style={styles.cardActionsWrapper}>
                {this.props.children}
            </View>);
    }
}

class CardContent extends React.Component {
    render() {
        return (
            <View style={styles.cardContentWrapper}>
                {this.props.children}
            </View>
        );
    }
}

class CardDivider extends React.Component {
    render() {
        return (
            <View style={styles.dividerLine}>
            </View>
        )
    }
}

class Card extends React.Component {
    state = {
        visible: true
    };

    onActionPressed(data) {
        if (data.actiontype === 'page') {
            //  ToastAndroid.show(data.actionevent, ToastAndroid.SHORT);
            this.props.navigation.navigate(data.actionevent);
            //  this.props.navigation.navigate('Login');
            //this.setState({visible:false})

        }
        if (data.actiontype === 'api') {
            ToastAndroid.show('else', ToastAndroid.SHORT);
        }


        //  this.props.navigation.navigate(this.props.data.navigate)
    }

    render() {
        var _data = this.props.data;
        var _cardHeader, _cardActions;
        var _cardContent;
        //console.log('_data.header',_data.header);
        if (_data.header) {
            _cardHeader = <CardHeader headerColor={_data.header.headerColor} avatar={_data.header.avatar}
                                      header={_data.header.title} subheader={_data.header.subtitle}/>
          }
        if (_data.actions) {
            var actionlength = _data.actions.length;
            if (actionlength === 3) {
                _cardActions = (
                    <CardActions style={styles.cardActionsWrapper}>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                            <View style={{marginHorizontal: 10, marginTop: 7}}>
                                {_data.actions[0].icon ? <Icon name={_data.actions[0].icon} size={15}
                                                               style={styles.header_icon}/> : undefined}
                            </View>
                            <TouchableOpacity onPress={() => this.onActionPressed(_data.actions[0])}>
                                <Text style={{
                                    color          : _data.actions[0].actioncolor,
                                    fontSize       : 13.05,
                                    fontWeight     : "bold",
                                    paddingVertical: 5
                                }}>
                                    {_data.actions[0].actiontext}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                            <View style={{marginHorizontal: 10, marginTop: 7}}>
                                {_data.actions[1].icon ? <Icon name={_data.actions[1].icon} size={15}
                                                               style={styles.header_icon}/> : undefined}
                            </View>
                            <TouchableOpacity onPress={() => this.onActionPressed(_data.actions[1])}>
                                <Text style={{
                                    color          : _data.actions[1].actioncolor,
                                    fontSize       : 13.05,
                                    fontWeight     : "bold",
                                    paddingVertical: 5
                                }}>
                                    {_data.actions[1].actiontext}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                            <View style={{marginHorizontal: 10, marginTop: 7}}>
                                {_data.actions[2].icon ? <Icon name={_data.actions[2].icon} size={15}
                                                               style={styles.header_icon}/> : undefined}
                            </View>
                            <TouchableOpacity onPress={() => this.onActionPressed(_data.actions[2])}>
                                <Text style={{
                                    color          : _data.actions[2].actioncolor,
                                    fontSize       : 13.05,
                                    fontWeight     : "bold",
                                    paddingVertical: 5
                                }}>
                                    {_data.actions[2].actiontext}
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </CardActions>);
            }
            if (actionlength === 2) {
                _cardActions = (
                    <CardActions style={styles.cardActionsWrapper}>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginBottom: 9}}>
                            {_data.actions[0].icon ? <View style={{marginHorizontal: 10, marginTop: 7,}}>
                                <Icon name={_data.actions[0].icon} size={15} style={{color: '#ff9800'}}/>
                            </View> : undefined}
                            {_data.actions[0].actiontext ? <View>
                                <TouchableOpacity onPress={() => this.onActionPressed(_data.actions[1])}>
                                    <Text style={{
                                        color     : _data.actions[0].actioncolor,
                                        fontSize  : 13.95,
                                        fontWeight: 'bold',
                                        marginLeft: 7
                                    }}>
                                        {_data.actions[0].actiontext}

                                    </Text></TouchableOpacity>
                            </View> : undefined}
                            {_data.actions[0].count ? <View>
                                <TouchableOpacity onPress={() => this.onActionPressed(_data.actions[0])}>
                                    <Text style={styles.liked}>
                                        {_data.actions[0].count} people congratulated
                                    </Text>
                                </TouchableOpacity>
                            </View> : undefined}
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginBottom: 9}}>
                            {_data.actions[1].icon ? <View style={{marginHorizontal: 10, marginTop: 7}}>
                                <Icon name={_data.actions[1].icon} size={15} style={styles.header_icon}/>
                            </View> : undefined}
                            {_data.actions[1].actiontext ? <View>
                                <TouchableOpacity onPress={() => this.onActionPressed(_data.actions[1])}>
                                    <Text style={{
                                        fontSize  : 13.95,
                                        color     : _data.actions[1].actioncolor,
                                        fontWeight: 'bold'
                                    }}>
                                        {_data.actions[1].actiontext}
                                    </Text>
                                </TouchableOpacity>
                            </View> : undefined}
                            {_data.actions[1].count ? <View>
                                <TouchableOpacity>
                                    <Text style={styles.liked}>
                                        {_data.actions[1].count} people congratulated
                                    </Text>
                                </TouchableOpacity>

                            </View> : undefined}
                        </View>

                    </CardActions>);
            }
            if (actionlength === 1) {
                _cardActions = (
                    <CardActions style={styles.cardActionsWrapper}>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 9}}>
                            {_data.actions[0].icon ? <View style={{marginRight: 5, marginTop: 7} }>
                                <Icon name={_data.actions[0].icon} size={15} style={styles.header_icon}/>
                            </View> : undefined}
                            <TouchableOpacity onPress={() => this.onActionPressed(this.props.data)}>
                                <Text style={styles.Action}>
                                    {_data.actions[0].actiontext}
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </CardActions>);
            }
        }
        if (_data.content) {
            if (_data.type === "quiz" || _data.type === "attendence" || _data.type === "payroll") {
                _cardContent = (<CardContent>
                    <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
                        {_data.content.url ? <Image source={{uri: _data.content.url}}
                                                    style={{height: 51, width: 51, margin: 1}}/> : undefined}
                        {_data.content.url ? <View
                            style={{flexDirection: "column", justifyContent: "flex-start", paddingHorizontal: 15}}>
                            {_data.content.text ?
                                <Text style={styles.Posttitle}>{_data.content.text}</Text> : undefined}
                            {_data.content.subtext ?
                                <Text style={styles.Source}>{_data.content.subtext}</Text> : undefined}
                        </View> :
                            <View style={{flexDirection: "column", justifyContent: "flex-start", marginRight: 20}}>
                                {_data.content.text ?
                                    <Text style={styles.Posttitle}>{_data.content.text}</Text> : undefined}
                                {_data.content.subtext ?
                                    <Text style={styles.Source}>{_data.content.subtext}</Text> : undefined}
                            </View>
                        }
                    </View>


                </CardContent>);
            }
            if (_data.type === "training") {
                _cardContent = (<CardContent>
                    <Text style={styles.Posttitle}>{_data.content.text}</Text>
                    {_data.content.imageurl ?
                        <View Style={{padding: 8}}>
                          <WxImage metadata={_data.content}  imageStyle={{height: 180}}/>
                          </View> : undefined}
                    {_data.content.videourl ?<Video source={{uri: _data.content.videourl}}
                                                     rate={1.0}
                                                     volume={1.0}
                                                     muted={false}
                                                     paused={false}
                                                     resizeMode="cover"
                                                     repeat={true}
                                                     onLoadStart={this.loadStart}
                                                     onLoad={this.setDuration}
                                                     onProgress={this.setTime}
                                                     onEnd={this.onEnd}
                                                     onError={this.videoError}
                                                     style={[styles.backgroundVideo],{height:180,padding:8}}/>: undefined}
                    <Text style={{fontSize: 12, marginBottom: 5, marginTop: 5}}>{_data.content.subtext}</Text>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <View style={{
                                alignItems     : 'center',
                                marginLeft     : 0,
                                marginTop      : 7,
                                padding        : 1,
                                height         : 12,
                                width          : 12,
                                borderRadius   : 12,
                                backgroundColor: '#6c86ff'
                            }}>
                                <Icon name="md-thumbs-up" size={9} style={{color: "#ffffff"}}/>
                            </View>
                            <TouchableOpacity>

                                {_data.content.likecount ? <Text style={styles.liked}>You + {_data.content.likecount}
                                    Others</Text> : undefined}
                            </TouchableOpacity>

                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <View>
                                <TouchableOpacity>
                                    {_data.content.commentcount ?
                                        <Text style={styles.liked}>  {_data.content.commentcount}
                                            comments,</Text> : undefined}
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    {_data.content.sharecount ? <Text style={styles.liked}>  {_data.content.sharecount}
                                        shares</Text> : undefined}
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <CardDivider/>
                </CardContent>);
            }
            if (_data.type === "video") {
                _cardContent = (<CardContent>

                    <Text>{_data.content.text}</Text>
                </CardContent>);
            }
        }

        if (this.state.visible)
            return (
                <View style={styles.cardWrapper} elevation={2}>
                    {_cardHeader}
                    {_cardContent}
                    {_cardActions}
                </View>

            );
        else
            return (
                <View> </View>
            );
    }
}

//const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let feed = [];
//let userId;
class FeedManager extends React.Component {


  constructor(props) {
    console.log("constructor");
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
    this.state = {
      dataSource: ds.cloneWithRows(feed),
      isLoading:true,
      refreshing:false,
    }
  }

componentWillMount(){

    console.log('inside componentWillMount');
   this.getTheData();
}

  componentDidMount() {

    // do anything while splash screen keeps, use await to wait for an async task.
    SplashScreen.hide();
    }

  _onRefresh() {
    console.log('inside onrefresh');
    console.log('refresh',this.state.refreshing);
    this.setState({refreshing: true});
    console.log('refresh',this.state.refreshing);
  //   setTimeout(() => {
  //   this.getTheData(function(json){
  //       console.log('refresh',this.state.refreshing);
  //    feed = json;
  //     console.log("json",feed);
  //    this.setState = ({
  //       refreshing: false,
  //      datasource:this.state.dataSource.cloneWithRows(feed)
  //
  //
  //    })
  //      console.log("refreshing on",this.state.refreshing);
  //   }.bind(this));
  //    console.log("refreshing on",this.state.refreshing);
  // }, 1000);

    //
    // fetchData().then(() => {
    //   this.setState({refreshing: false});
    // });
  }

async getTheData() {
  let userId = '';
  // await AsyncStorage.getItem('userId', (err, result) => {
  //   console.log('userId',result);
  //   userId = result;
  // });

 console.log('userId out',userId);
  try {
    console.log('feedDataApi',feedDataApi);
    let response = await fetch(feedDataApi, {
      method : 'GET',
      headers: {
        'wx-user-token': parseInt(userId),
        //
      },
       //console.log('headers',headers);
    });
    console.log('response',response);
    let responseJson = await response.json();
    console.log('responseJson',responseJson);
      feed = responseJson
      console.log('feed responseJson',feed)
      this.setState({isLoading:false});

    this.setState({ dataSource: this.state.dataSource.cloneWithRows(feed)});
    // this.setState({isLoading:false});
    //console.log('responseJson1',JSON.parse(responseJson));
    console.log('dataSource get the data',this.state.dataSource);

  } catch(error) {
    console.error(error);
  }

   }
    render() {
      console.log('dataStore11',this.state.dataSource)
      console.log('isLoading',this.state.refreshing)
      //  console.log("feed time" , new Date());
      //  vat time = new Date();
      var height           = Dimensions.get('screen').height;
      var width            = Dimensions.get('window').width;
      var imageWidthSize   = width * 0.9;
      var wheight = height * 0.7;
        return (
            <View>
                <SearchBox/>

                  <ScrollView
                    style={{marginBottom: 50}}
                    refreshControl={
                        <RefreshControl
                          refreshing={this.state.refreshing}
                          onRefresh={this._onRefresh.bind(this)}
                          tintColor="#ff0000"
                          title="Loading..."
                          titleColor="#00ff00"
                          colors={['#ffffff']}
                          progressBackgroundColor="#6c86ff"
                        />
                      }>

                    {this.state.isLoading != false?

                      <View style={{height:wheight}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
                        <Text>Loding...</Text>
                        </View>
                      </View>:
                          <ListView
                          enableEmptySections={true}
                          dataSource={this.state.dataSource}
                          renderRow={(rowData, rowID) => <Card key={rowID} data={rowData}
                                                               navigation={this.props.navigation}/>}
                      />}
                  </ScrollView>

            </View>
        );
    }
}
// class FeedManager extends React.Component {
// <ScrollView
//   style={{marginBottom: 50}}
//   refreshControl={
//       <RefreshControl
//         refreshing={this.state.refreshing}
//         onRefresh={this._onRefresh.bind(this)}
//         tintColor="#ff0000"
//         title="Loading..."
//         titleColor="#00ff00"
//         colors={['#ffffff']}
//         progressBackgroundColor="#6c86ff"
//       />
//     }>
//
//   {this.state.isLoading != false?
//
//     <View style={{height:wheight}}>
//       <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
//       <Text>Loding...{this.state.isLoading}</Text>
//       </View>
//     </View>:
//         <ListView
//
//         dataSource={this.state.dataSource}
//         renderRow={(rowData, rowID) => <Card key={rowID} data={rowData}
//                                              navigation={this.props.navigation}/>}
//     />}
// </ScrollView>

//
// <ScrollView style={{marginBottom: 50}}>
//   {this.state.isLoading === true?
//     <View style={{height:wheight}}>
//       <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
//       <Progress.Pie progress={0.4} size={50} />
//       </View>
//     </View>:
//     <ListView
//         dataSource={this.state.dataSource}
//         renderRow={(rowData, rowID) => <Card key={rowID} data={rowData}
//                                              navigation={this.props.navigation}/>}
//     />}
// </ScrollView>
//
//   async componentWillMount() {
//   //    console.log('a1');
//   // async function getMoviesFromApi() {
//      console.log('a2');
//    try {
//       console.log('a3');
//      let response = await fetch('http://ae36ba07.ngrok.io/api/feeder/feed/', {
//             method : 'GET',
//             headers: {
//                 'wx-user-token': 52
//             },
//
//         });
//      let responseJson = await response.json();
//      console.log('responseJson',responseJson);
//
//      for (var i = 0; i < responseJson.length; i++)
//       {
//           console.log('responseJson1',JSON.parse(responseJson[i].feed_data));
//
//             feed.push(JSON.parse(responseJson[i].feed_data));
//             //console.log('feed',feed)
//
//     }
//       console.log('feed',feed);
//     //  dataSource: ds.cloneWithRows(data),
//       this.setState({ dataSource: this.state.dataSource.cloneWithRows(feed)});
//                             //console.log('responseJson1',JSON.parse(responseJson));
//                             console.log('dataSource',this.state.dataSource);
//
//    } catch(error) {
//      console.error(error);
//    }
//
// }
//         // componentWillMount() {
//         //   console.log("start fetch")
//         //         fetch('http://ae36ba07.ngrok.io/api/feeder/feed/', {
//         //                method : 'GET',
//         //                headers: {
//         //                    'wx-user-token': 52
//         //                },
//         //
//         //            })
//         //            .then((response) => response.json())
//         //            .then((responseJson) => {
//         //
//         //                console.log('responseJson',responseJson);
//         //                var feed = [];
//         //                for (var i = 0; i < responseJson.length; i++)
//         //                 {
//         //                     console.log('responseJson1',JSON.parse(responseJson[i].feed_data));
//         //
//         //                       feed.push(JSON.parse(responseJson[i].feed_data));
//         //                       //console.log('feed',feed)
//         //
//         //               }
//         //                 console.log('feed',feed);
//         //               //  dataSource: ds.cloneWithRows(data),
//         //                 this.setState({ dataSource: this.state.dataSource.cloneWithRows(feed)});
//         //                                       //console.log('responseJson1',JSON.parse(responseJson));
//         //                                       console.log('dataSource',this.state.dataSource);
//         //
//         //            })
//         //            .catch((error) => {
//         //          console.error(error);
//         //          //return error;
//         //        });
//         //
//         //
//         // }
//
//         componentDidMount() {
//
//
//             // do anything while splash screen keeps, use await to wait for an async task.
//             SplashScreen.hide();
//         }
//
//     // constructor(props) {
//     //
//     //     super(props)
//     //   //  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     //     data = [];
//     //     //data = this.state.outputData;
//     //
//     //     data1 = [
//     //         {
//     //             type   : "training",
//     //             header : {
//     //                 title      : "Training",
//     //                 subtitle   : "5 hours ago",
//     //                 headerColor: "#26a69a",
//     //                 avatar     : "https://stratisems.com/wp-content/uploads/2016/10/Training-Icon.png",
//     //             },
//     //             actions: [{
//     //                 icon       : "md-thumbs-up",
//     //                 actiontext : "Like",
//     //                 actioncolor: "#6c86ff"
//     //             },
//     //                 {
//     //                     icon       : "md-chatboxes",
//     //                     actiontext : "Comment",
//     //                     actioncolor: "#6c86ff"
//     //                 },
//     //                 {
//     //                     icon       : "md-share",
//     //                     actiontext : "Share",
//     //                     actioncolor: "#6c86ff"
//     //                 }
//     //             ],
//     //             content: {
//     //                 imageurl    : "http://www.ashirwadeducation.in/Screen%20Shot%202017-04-25%20at%209.16.01%20pm.png",
//     //                 //  videourl:"https://youtu.be/8LVN7WVgx0c",
//     //                 text        : "Weekly Offs",
//     //                 subtext     : "Weekly Offs charts.",
//     //                 likecount   : "5",
//     //                 likeapi     : "",
//     //                 commentcount: "7",
//     //                 commentapi  : "",
//     //                 sharecount  : "5",
//     //                 shareapi    : ""
//     //             }
//     //
//     //
//     //         },
//     //         {
//     //             type   : "attendence",
//     //             header : {
//     //                 title      : "Attendence",
//     //                 subtitle   : "4 hours ago",
//     //                 headerColor: "#ab47bc",
//     //                 avatar     : "http://wfarm2.dataknet.com/static/resources/icons/set87/fb5b958f.png",
//     //             },
//     //             actions: [{
//     //                 actiontext : "Comment",
//     //                 actionalign: "right",
//     //
//     //                 //actiontype:"page",
//     //                 //actionevent:"AttendenceNav",
//     //                 actioncolor: '#6c86ff'
//     //             }, {
//     //                 actiontext : "Reject",
//     //                 actionalign: "right",
//     //                 //actiontype:"page",
//     //                 //actionevent:"AttendenceNav",
//     //                 actioncolor: '#B20000'
//     //             }, {
//     //                 //  icon:"md-thumbs-up",
//     //                 actiontext : "Approve",
//     //                 //actiontype:"page",
//     //                 //actionevent:"AttendenceNav",
//     //                 actioncolor: '#6c86ff'
//     //             },
//     //             ],
//     //             content: {
//     //                 url : "http://www.material-ui.com/images/uxceo-128.jpg",
//     //                 text: "Leave request for Rima is panding.",
//     //                 //subtext:"Mark your attendance to avoid deduction your salary",
//     //             }
//     //         },
//     //         {
//     //             type   : "training",
//     //             header : {
//     //                 title      : "Training",
//     //                 subtitle   : "5 hours ago",
//     //                 headerColor: "#26a69a",
//     //                 avatar     : "https://stratisems.com/wp-content/uploads/2016/10/Training-Icon.png",
//     //             },
//     //             actions: [{
//     //                 icon       : "md-thumbs-up",
//     //                 actiontext : "Like",
//     //                 actioncolor: "#6c86ff"
//     //             },
//     //                 {
//     //                     icon       : "md-chatboxes",
//     //                     actiontext : "Comment",
//     //                     actioncolor: "#6c86ff"
//     //                 },
//     //                 {
//     //                     icon       : "md-share",
//     //                     actiontext : "Share",
//     //                     actioncolor: "#6c86ff"
//     //                 }
//     //             ],
//     //             content: {
//     //                 imageurl    : "http://www.ashirwadeducation.in/attertation.png",
//     //                 //  videourl:"https://youtu.be/8LVN7WVgx0c",
//     //                 text        : "Attrition Chart",
//     //                 subtext     : "Attrition  charts.",
//     //                 likecount   : "5",
//     //                 likeapi     : "",
//     //                 commentcount: "7",
//     //                 commentapi  : "",
//     //                 sharecount  : "5",
//     //                 shareapi    : ""
//     //             }
//     //
//     //
//     //         }, {
//     //             type   : "training",
//     //             header : {
//     //                 title      : "Training",
//     //                 subtitle   : "5 hours ago",
//     //                 headerColor: "#26a69a",
//     //                 avatar     : "https://stratisems.com/wp-content/uploads/2016/10/Training-Icon.png",
//     //             },
//     //             actions: [{
//     //                 icon       : "md-thumbs-up",
//     //                 actiontext : "Like",
//     //                 actioncolor: "#6c86ff"
//     //             },
//     //                 {
//     //                     icon       : "md-chatboxes",
//     //                     actiontext : "Comment",
//     //                     actioncolor: "#6c86ff"
//     //                 },
//     //                 {
//     //                     icon       : "md-share",
//     //                     actiontext : "Share",
//     //                     actioncolor: "#6c86ff"
//     //                 }
//     //             ],
//     //             content: {
//     //                 imageurl    : "http://www.ashirwadeducation.in/top.png",
//     //                 //  videourl:"https://youtu.be/8LVN7WVgx0c",
//     //                 text        : "Top Agencies Attrition Chart",
//     //                 subtext     : "Top Agencies Attrition  charts.",
//     //                 likecount   : "5",
//     //                 likeapi     : "",
//     //                 commentcount: "7",
//     //                 commentapi  : "",
//     //                 sharecount  : "5",
//     //                 shareapi    : ""
//     //             }
//     //
//     //
//     //         },
//     //         {
//     //             type   : "training",
//     //             header : {
//     //                 title      : "Training",
//     //                 subtitle   : "5 hours ago",
//     //                 headerColor: "#26a69a",
//     //                 avatar     : "https://stratisems.com/wp-content/uploads/2016/10/Training-Icon.png",
//     //             },
//     //             actions: [{
//     //                 icon       : "md-thumbs-up",
//     //                 actiontext : "Like",
//     //                 actioncolor: "#6c86ff"
//     //             },
//     //                 {
//     //                     icon       : "md-chatboxes",
//     //                     actiontext : "Comment",
//     //                     actioncolor: "#6c86ff"
//     //                 },
//     //                 {
//     //                     icon       : "md-share",
//     //                     actiontext : "Share",
//     //                     actioncolor: "#6c86ff"
//     //                 }
//     //             ],
//     //             content: {
//     //                 imageurl    : "http://www.ashirwadeducation.in/mm.png",
//     //                 //  videourl:"https://youtu.be/8LVN7WVgx0c",
//     //                 text        : "Monthly Attrition",
//     //                 subtext     : "Monthly Attrition  charts.",
//     //                 likecount   : "5",
//     //                 likeapi     : "",
//     //                 commentcount: "7",
//     //                 commentapi  : "",
//     //                 sharecount  : "5",
//     //                 shareapi    : ""
//     //             }
//     //
//     //
//     //         },
//     //
//     //
//     //     ],
//     //
//     //         this.state = {
//     //           //dataSource:"",
//     //             dataSource: ds.cloneWithRows(data),
//     //             outputData :"",
//     //
//     //         }
//     // }
//
//     constructor(props) {
//        super(props);
//        this.state = {dataSource: ds.cloneWithRows(feed),};
// }
//
//     render() {
//       console.log('dataStore11',this.state.dataSource)
//
//         return (
//             <View>
//                 <SearchBox/>
//
//                 <ScrollView style={{marginBottom: 50}}>
//
//                     <ListView
//                         dataSource={this.state.dataSource}
//                         renderRow={(rowData, rowID) => <Card key={rowID} data={rowData}
//                                                              navigation={this.props.navigation}/>}
//                     />
//                 </ScrollView>
//
//             </View>
//         );
//     }
// }
module.exports = FeedManager;
