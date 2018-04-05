import React, {components} from "react";
import {Text, View, StyleSheet, ListView, ScrollView, TouchableOpacity,RefreshControl} from "react-native";
import UserAvatar from "react-native-user-avatar";
//import Avatar from "../../WxAvatar";
import WxAvatar from "../../components/libs/native/WxAvatar"
import HeaderTitle from "../../components/libs/native/WxHeaderTitle";
import TimeStamp from "../../components/libs/native/WxTimeStamp";
import {Col, Row, Grid} from "react-native-easy-grid";
import SearchBox from "../../components/libs/native/WxSearchHeader";
import WxPullRefresh from "../../components/libs/native/WxPullRefresh";

export default class Chats extends React.Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        data = [{
          "icon": {
              "url": "http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg"
          },
          size:50,
            avatar            : 'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
            name              : 'Ramesh Sharma',
            name_color        : '#4a4a4a',
            name_size         : '11',
            group             : true,
            message           : 'Chirag: Whats happening tomorrow?',
            message_color     : 'rgba(0,0,0,0.5)',
            Notification_count: '1',
            time_stamp        : '13 mins',
        },
            {
              "icon": {
                  "url": "https://pbs.twimg.com/profile_images/573167781119565825/I6_juty8.jpeg"
              },
              size:55,

                avatar            : 'https://pbs.twimg.com/profile_images/573167781119565825/I6_juty8.jpeg',
                name              : 'Ramesh Sharma',
                name_color        : '#4a4a4a',
                name_size         : '11',
                message           : 'Kya kar raha hai be?',
                message_color     : 'rgba(0,0,0,0.5)',
                Notification_count: '3',
                time_stamp        : '13 mins',
            },
            {
              "icon": {
                  "text": "Ramesh Khurana"
              },
              size:50,
              "background": "blue",
                avatar            : 'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
                name              : 'Ramesh Sharma',
                name_color        : '#4a4a4a',
                name_size         : '11',
                message           : 'Kya kar raha hai be?',
                message_color     : 'rgba(0,0,0,0.5)',
                Notification_count: '3',
                time_stamp        : '13 mins',
            },
            {
              "icon": {
                  "url": "https://pbs.twimg.com/profile_images/573167781119565825/I6_juty8.jpeg"
              },
              size:55,

                avatar            : 'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
                name              : 'Ramesh Sharma',
                name_color        : '#4a4a4a',
                name_size         : '11',
                group             : true,
                message           : 'Kya kar raha hai be?',
                message_color     : 'rgba(0,0,0,0.5)',
                Notification_count: '3',
                time_stamp        : '13 mins',
            },
            {
              "icon": {
                  "url": "https://pbs.twimg.com/profile_images/573167781119565825/I6_juty8.jpeg"
              },
              size:55,

                avatar       : 'https://pbs.twimg.com/profile_images/573167781119565825/I6_juty8.jpeg',
                name         : 'Ramesh Sharma',
                name_color   : '#4a4a4a',
                name_size    : '11',
                message      : 'Kya kar raha hai be?',
                message_color: 'rgba(0,0,0,0.5)',
//Notification_count:'3',
                time_stamp   : '13 mins',
            },
            {
              "icon": {
                  "url": "https://pbs.twimg.com/profile_images/573167781119565825/I6_juty8.jpeg"
              },
              size:55,

                avatar       : 'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
                name         : 'Ramesh Sharma',
                name_color   : '#4a4a4a',
                name_size    : '11',
                message      : 'Kya kar raha hai be?',
                message_color: 'rgba(0,0,0,0.5)',
//Notification_count:'0',
                time_stamp   : '13 mins',
            },
            {
                avatar       : 'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
                name         : 'Ramesh Sharma',
                name_color   : '#4a4a4a',
                name_size    : '11',
                group        : true,
                message      : 'Kya kar raha hai be?',
                message_color: 'rgba(0,0,0,0.5)',
                //Notification_count:'3',
                time_stamp   : '13 mins',
            },
            {
                avatar       : 'https://pbs.twimg.com/profile_images/573167781119565825/I6_juty8.jpeg',
                name         : 'Ramesh Sharma',
                name_color   : '#4a4a4a',
                name_size    : '11',
                message      : 'Kya kar raha hai be?',
                message_color: 'rgba(0,0,0,0.5)',
//Notification_count:'3',
                time_stamp   : '13 mins',
            },
            {
                avatar            : 'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
                name              : 'Ramesh Sharma',
                name_color        : '#4a4a4a',
                name_size         : '11',
                message           : 'Kya kar raha hai be?',
                message_color     : 'rgba(0,0,0,0.5)',
                Notification_count: '3',
                time_stamp        : '13 mins',
            },
            {
                avatar       : 'https://pbs.twimg.com/profile_images/573167781119565825/I6_juty8.jpeg',
                name         : 'Ramesh Sharma',
                name_color   : '#4a4a4a',
                name_size    : '11',
                message      : 'Kya kar raha hai be?',
                message_color: 'rgba(0,0,0,0.5)',
//Notification_count:'3',
                time_stamp   : '13 mins',
            },
            {
                avatar            : 'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
                name              : 'Ramesh Sharma',
                name_color        : '#4a4a4a',
                name_size         : '11',
                message           : 'Kya kar raha hai be?',
                message_color     : 'rgba(0,0,0,0.5)',
                Notification_count: '3',
                time_stamp        : '13 mins',
            }


        ],

            this.state = {
                dataSource: ds.cloneWithRows(data),

                 isRefreshing: false,
            }
    }

    _onRefresh = () => {
      this.setState({isRefreshing: true});
      setTimeout(() => {
        // prepend 10 items
        const rowData = Array.from(new Array(10))
        .map((val, i) => ({
          text: 'Loaded row ' + (+this.state.loaded + i),
          clicks: 0,
        }))
        .concat(this.state.rowData);

        this.setState({
          loaded: this.state.loaded + 10,
          isRefreshing: false,
          rowData: rowData,
        });
      }, 5000);
    };


    render() {

        return (
            <View>
                <SearchBox/>
                <View>

                    <ScrollView style={{marginBottom: 100}}
                      refreshControl={
                          <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh}
                            tintColor="#ff0000"
                            title="Loading..."
                            titleColor="#00ff00"
                            colors={['#ffffff']}
                            progressBackgroundColor="#6c86ff"
                          />
                        }>


                        <ListView
                            enableEmptySections={true}
                            dataSource={this.state.dataSource}
                            renderRow={(rowData, rowID) =>
                                <TouchableOpacity>
                                    <Content key={rowID} data={rowData}/>
                                </TouchableOpacity>
                            }/>
                    </ScrollView>
                    <View>

                    </View>

                </View>
            </View>
        )
    }
}


class SubTitle extends React.Component {
    render() {
        return (
            <View style={{}}>
                <Text style={styles.subTitle}>{this.props.metadata.message}</Text>
            </View>
        )
    }
}

class Notification extends React.Component {
    render() {
        return (
            <View style={{height: 15, width: 15, borderRadius: 15, backgroundColor: '#6c86ff', alignItems: 'center'}}>
                <Text style={styles.Notification}>{this.props.metadata.Notification_count}</Text>
            </View>
        )
    }
}

class Content extends React.Component {
    render() {
        return (

            <Grid>
                <Col style={{width: 60,}}>
                    <View style={{marginLeft: 7, marginTop: 10}}>
                        <WxAvatar metadata={this.props.data}/>
                    </View>
                </Col>
                <Col>
                    <Row>
                        <Col style={{justifyContent: 'flex-start', marginLeft: 7, marginTop: 7}}>
                            <HeaderTitle metadata={this.props.data}/>
                        </Col>
                        {this.props.data.group === true ?
                            <Col style={{justifyContent: 'flex-start', marginLeft: 7, marginTop: 7}}>
                                <UserAvatar textColor='#ffffff' color="#b1b1b1" name="G" size={16}/>
                            </Col> : undefined}
                        <Col style={{width: 60, justifyContent: 'flex-start', marginLeft: 7, marginTop: 7}}>
                            <TimeStamp metadata={this.props.data}/>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: 10}}>
                        <Col style={{justifyContent: 'flex-start', marginLeft: 7,}}>
                            <SubTitle metadata={this.props.data}/>
                        </Col>
                        <Col style={{width: 60, alignItems: 'center'}}>
                            {this.props.data.Notification_count ?
                                <Notification metadata={this.props.data}/> : undefined}
                        </Col>
                    </Row>
                    <View style={styles.dividerLine}>
                    </View>
                </Col>
            </Grid>

        )
    }
}
const styles = StyleSheet.create({
    Supertitle      : {
        fontSize: 19.95,
    },
    subTitle        : {
        color   : 'rgba(0,0,0,0.5)',
        fontSize: 12,
    },
    Notification    : {
        color   : '#ffffff',
        fontSize: 10,

    },
    Posttitle       : {
        color            : '#4a4a4a',
        fontSize         : 16.05,
        marginBottom     : 5,
        //marginLeft:2,
        paddingLeft      : 1,
        paddingHorizontal: 15,


    },
    headerImage     : {
        marginLeft: 9,
        height    : 18,
        width     : 18
    },
    Timestamp       : {
        fontSize: 12.00,
    },
    Source          : {
        fontSize: 12.00,
        padding : 3,
        color   : 'rgba(74,74,74,0.6)'
    },
    Action          : {
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
        //marginVertical:3,
        //  padding:5,
        flexDirection  : 'row',
        //alignItems:'center',
        //justifyContent:'flex-start'
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
        borderColor: 'rgba(151,151,151,0.3)',
        //borderColor:'red',
        borderWidth: 0.5,
        //  width:200,
        marginTop  : 7,
//  marginBottom:7,
        //  marginLeft:10,
        height     : 1
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
    }
});

// import React,{ components} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   ListView,
//   ScrollView
// } from 'react-native';
// import SearchBox from './WxSearchHeader';
// import UserAvatar from "react-native-user-avatar";
// import Avatar from "./WxAvatar";
// import HeaderTitle from "./WxHeaderTitle";
// import TimeStamp from "./WxTimeStamp";
// export default class ChatTab extends React.Component{
//   constructor(props){
//     super(props)
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     data = [{
//       avatar:'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
//       name:'Ramesh Sharma',
//       name_color:'#4a4a4a',
//       name_size:'11',
//       message:'Kya kar raha hai be?',
//       message_color:'rgba(0,0,0,0.5)',
//       Notification_count:'3',
//       time_stamp:'13 mins',
//   },
//   {
//     avatar:'https://pbs.twimg.com/profile_images/573167781119565825/I6_juty8.jpeg',
//     name:'Ramesh Sharma',
//     name_color:'#4a4a4a',
//     name_size:'11',
//     message:'Kya kar raha hai be?',
//     message_color:'rgba(0,0,0,0.5)',
//     Notification_count:'3',
//     time_stamp:'13 mins',
// },
// {
//   avatar:'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
//   name:'Ramesh Sharma',
//   name_color:'#4a4a4a',
//   name_size:'11',
//   message:'Kya kar raha hai be?',
//   message_color:'rgba(0,0,0,0.5)',
//   Notification_count:'3',
//   time_stamp:'13 mins',
// }
//
// ],
//
// this.state = {
// dataSource: ds.cloneWithRows(data),
// }
// }
//   render(){
//     return(
//       <View>
//         <View>
//           <SearchBox/>
//           <ScrollView style={{marginBottom:50}}>
//
//             <ListView
//               dataSource={this.state.dataSource}
//               renderRow={(rowData,rowID) => <Content key={rowID} data={rowData}/>}
//               />
//           </ScrollView>
//
//         </View>
//       </View>
//     )
//   }
// }
//
//
//
//  class SubTitle extends React.Component{
//   render(){
//     return(
//       <View style={{}}>
//       <Text style={styles.subTitle}>{this.props.metadata.message}</Text>
//     </View>
//     )
//   }
// }
//
// class Notification extends React.Component{
//  render(){
//    return(
//      <View style={{height:15,width:15,borderRadius:15,backgroundColor:'#6c86ff',alignItems:'center',marginBottom:15}}>
//      <Text style={styles.Notification}>{this.props.metadata.Notification_count}</Text>
//    </View>
//    )
//  }
// }
//
// class Content extends React.Component{
//   render(){
//     return(
//
//       <ScrollView>
//         <View style={styles.cardWrapper}>
//
//           <View style={{padding:5}}>
//             <Avatar metadata ={this.props.data}/>
//           </View>
//           <View style={{flexDirection:"row",justifyContent:"flex-start",}}>
//
//           <View style={{flexDirection:"column",justifyContent:"space-around"}}>
//
//             <View style={{flexDirection:"row",justifyContent:"space-between"}}>
//               <HeaderTitle metadata ={this.props.data}/>
//               <TimeStamp metadata ={this.props.data}/>
//             </View>
//             <View style={{flexDirection:"row",justifyContent:"space-between",}}>
//               <SubTitle metadata ={this.props.data}/>
//               <Notification metadata ={this.props.data}/>
//             </View>
//             <View style={{flexDirection:"row",justifyContent:"space-between",}}>
//
//               <View style={styles.dividerLine}>
//               </View>
//             </View>
//
//           </View>
//         </View>
//       </View>
//
//       </ScrollView>
//
//     )
//   }
// }
// const styles = StyleSheet.create({
//   Supertitle:{
//     fontSize:19.95,
//   },
//   subTitle:{
//     color:'rgba(0,0,0,0.5)',
//     fontSize:10,
//     marginLeft:7
//   },
//   Notification:{
//     color:'#ffffff',
//     fontSize:10,
//
//   },
//   Posttitle:{
//     color:'#4a4a4a',
//     fontSize:16.05,
//     marginBottom:5,
//     //marginLeft:2,
//     paddingLeft:1,
//     paddingHorizontal:15,
//
//
//   },
//   headerImage:{
//     marginLeft:9,
//     height:18,
//     width:18
//   },
//   Timestamp:{
//     fontSize:12.00,
//   },
//   Source:{
//     fontSize:12.00,
//     padding:3,
//     color:'rgba(74,74,74,0.6)'
//   },
//   Action:{
//     fontSize:13.95,
//     color:'#6c86ff',
//     fontWeight:'bold'
//   },
//   liked:{
//     fontSize:10.95,
//     color:'rgba(74,74,74,0.6)',
//     paddingVertical:5,
//     marginLeft:4
//   },
//   LikeCommentShare:{
//     color:'#6c86ff',
//     fontSize:13.05,
//     paddingVertical:5
//   },
//   content:{
//     fontSize:12,
//   },
//   contentbox:{
//     flexDirection:"column",
//     justifyContent:"flex-start",
//     paddingHorizontal:15,
//   },
//   cardWrapper:{
//     backgroundColor:'#ffffff',
//     //marginVertical:3,
//   //  padding:5,
//     flexDirection:'row',
//     //alignItems:'center',
//     //justifyContent:'flex-start'
//   },
//   backgroundVideo: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
//   cardheader:{
//     padding:5
//   },
//
//   cardheader_subheader:{
//     color:'rgba(74,74,74,0.6)',
//     //padding:15,
//     marginLeft:8,
//     //fontStyle:'italic',
//     fontSize:12,
//   },
//   cardContentWrapper:{
//     paddingHorizontal:15,
//     paddingTop:0,
//     bottom:5
//   },
//   cardActionsWrapperRight:{
//     //paddingVertical: 8,
//   //  flexDirection: 'row',
//   //  alignItems:'center',
//     justifyContent: 'flex-end'
//   },
//   cardActionsWrapper:{
//     //paddingVertical: 8,
//     flexDirection: 'row',
//     alignItems:'center',
//     marginLeft:5,
//     marginRight:10,
//     justifyContent: 'space-between'
//   },
//   actionButton:{
//     color: '#E3F2FD',
//     flex:1,
//     marginRight:10
//   },
//   dividerLine:{
//     borderColor:'#e5e5e5',
//     borderWidth:0.5,
//     width:200,
//     marginLeft:10
//     //height:1
//   },
//   iconContainer:{
//     padding:15,
//     borderWidth: 0.5,
//     borderRadius:30,
//     height: 40,
//     borderColor: '#9E9E9E',
//     marginRight:10
//   },
//   header_icon:{
//     paddingVertical:0,
//     color:'#6c86ff'
//   }
// });
