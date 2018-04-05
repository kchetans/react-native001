import React, {Component} from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Button,
    ListView,
    TouchableOpacity,
    ToastAndroid
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import {Col, Row, Grid} from "react-native-easy-grid";
import Icon from "react-native-vector-icons/Ionicons";
//const MK                   = require('react-native-material-kit');
//QuizHome.navigationOptions ={header:{visible: false}}


export default class QuizHome extends Component {
    static navigationOptions = {
        title      : 'Quiz',
        headerRight: <Button color='red' title="Info"/>,
    };

    constructor(props) {
        super(props)
        const ds   = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        data       = [{
            boxbackcolor : '#f1f2ff',
            timetaken    : '4 hours',
            publisheddate: '23 Jan',
            submitteddate: '1',
            name         : "RO TDS Quiz",
            score        : 7,
            total        : 10,
            status       : 'Pass'
        },
            {
                boxbackcolor : '#f1f2ff',
                timetaken    : '50 mins',
                publisheddate: '28 May',
                submitteddate: '1',
                name         : "Air Purifier Quiz",
                score        : null,
                total        : 10,
                status       : ''
            },
            {
                boxbackcolor : '#f1f2ff',
                timetaken    : '5 min',
                publisheddate: '28 Mar',
                submitteddate: '1',
                name         : "Customer Engagment Quiz",
                score        : 8,
                total        : 10,
                status       : 'Pass'
            },
            {
                boxbackcolor : '#ffffff',
                timetaken    : '5 min',
                publisheddate: '28 Mar',
                submitteddate: '',
                name         : "RO Filter Quiz",
                score        : 1,
                total        : 10,
                status       : 'Fail'
            },
            {
                boxbackcolor : '#ffffff',
                publisheddate: '28 Feb',
                submitteddate: '',
                name         : "RO Service Quiz",
                score        : 4,
                total        : 10,
                status       : 'Fail'
            }
        ]
        this.state = {
            dataSource: ds.cloneWithRows(data),
            startdate : null,
            enddate   : null
        }
    }

    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    }

    _onSubmit(rowData) {
        let test = rowData.score
        ToastAndroid.show('test', ToastAndroid.SHORT);
    }

    renderRow(rowData) {
        let score = ''
        if (rowData.status === '')
            score = 'Start'
        else
            score = rowData.score + '/' + rowData.total
        var contentRow =
                <TouchableOpacity>
                    <Grid style={{backgroundColor: rowData.boxbackcolor, paddingLeft: 5, paddingTop: 7, height: 60}}>
                        <Col style={{}}>
                            <Row>
                                <Col>
                                    <Row>
                                        <Image source={require('./../../assets/quiz.png')}
                                               style={{
                                                   height: 18,
                                                   width : 18
                                               }}/>
                                        <Text style={styles.title}>{rowData.name} </Text>
                                    </Row>
                                </Col>

                            </Row>
                            <Row style={{paddingTop: 7}}>
                                <Col>
                                    <Row>
                                        <Text style={styles.welcome}>Published:<Text
                                            style={{color: 'gray'}}> {rowData.publisheddate} </Text></Text>
                                    </Row>
                                </Col>


                            </Row>

                            <View style={styles.dividerLine}>
                            </View>

                        </Col>
                        <Col style={{width: 20, paddingTop: 20}}>
                            <Icon name="md-arrow-dropright" size={20}></Icon>
                        </Col>

                    </Grid>
                </TouchableOpacity>
            ;
        return (contentRow);

    }

    render() {


        return (
            <ScrollView>
                <View style={{paddingLeft: 5, marginTop: 5, paddingTop: 1, height: 20}}>
                    <Text>Quiz Contest</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={
                        (rowData) => {
                            return this.renderRow(rowData);
                        }
                    }
                />
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    card       : {
        borderWidth    : 1,
        backgroundColor: '#fff',
        borderColor    : 'rgba(0,0,0,0.1)',
        margin         : 5,
        padding        : 15,
        shadowColor    : '#ccc',
        shadowOffset   : {width: 2, height: 2,},
        shadowOpacity  : 0.5,
        shadowRadius   : 3,
    },
    welcome    : {
        fontSize: 10,
        //fontWeight:'bold',

    },
    title      : {
        fontSize  : 12,
        fontWeight: 'bold',
        color     : '#ff9800',
        marginLeft: 7,
        marginTop : 0

    },
    dividerLine: {
        borderColor: 'rgba(151,151,151,0.3)',
        //borderColor:'red',
        borderWidth: 0.5,
        //  width:200,
        marginTop  : 7,

        // marginBottom:7,
        //  marginLeft:10,
        height: 1

    },

    button: {
        //width:60,
        height      : 30,
        marginLeft  : 7,
        marginRight : 5,
        marginBottom: 5,
        padding     : 5

    }
});

//
// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   Button,
//   ListView,
//   TouchableOpacity,
//   ToastAndroid
// } from 'react-native';
// import Table from 'react-native-simple-table'
// import SplashScreen from 'react-native-splash-screen'
// import DatePicker from 'react-native-datepicker';
// import {StackNavigator} from "react-navigation";
// import {Col, Row, Grid} from "react-native-easy-grid";
// import Icon from 'react-native-vector-icons/Ionicons';
//
// //const MK                   = require('react-native-material-kit');
// //QuizHome.navigationOptions ={header:{visible: false}}
//
//
// export default class QuizHome extends Component {
//
//   constructor(props){
//     super(props)
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     data=[{boxbackcolor:'#ffffff',timetaken:'4 hours',publisheddate:'23 Jan', submitteddate:'26 Feb',name:"Aro TDS Quiz", score :7, total:10,status:'Pass'},
//     {    boxbackcolor:'#ffffff',
//     timetaken:'50 mins',publisheddate:'28 May', submitteddate:'', name:"Quiz 2", score :null, total:10,status:''},
//     {    boxbackcolor:'#ffffff',
//     timetaken:'5 min',publisheddate:'28 March', submitteddate:'', name:"Quiz 3", score :8, total:10,status:'Pass'},
//     {timetaken:'5 min',publisheddate:'28 March', submitteddate:'', name:"Quiz 4", score :1, total:10,status:'Fail'},
//     {publisheddate:'28 Feb', submitteddate:'28 March', name:"Quiz 5", score :4, total:10,status:'Fail'}
//   ]
//     this.state = {
//       dataSource: ds.cloneWithRows(data),
//       startdate: null ,
//       enddate:null
//     }
//   }
//
// componentDidMount() {
//  // do anything while splash screen keeps, use await to wait for an async task.
//   SplashScreen.hide();
// }
//
// _onSubmit(rowData){
//   let test=rowData.score
//   ToastAndroid.show('test', ToastAndroid.SHORT);
// }
//
// renderRow(rowData) {
//   let score=''
//   if (rowData.status==='')
//      score='Start'
//   else
//      score= rowData.score +'/' + rowData.total
//   var contentRow =
//   <Grid style={{backgroundColor:rowData.boxbackcolor,paddingLeft:5}}>
//     <Col style={{marginLeft:7,marginTop:7,marginRight:7}}>
//     <Row>
//       <Col>
//         <Row>
//         <Image source={require('./assets/quiz.png')}
//           style={{  marginLeft:4,
//             height:18,
//             width:18}} />
//           <Text style={styles.title} >{rowData.name} </Text>
//           </Row>
//           </Col>
//         <Col style={{width:60}}>
//           <Row style={{justifyContent:'space-around'}}>
//           <Icon name="md-clock" size={15} style={{color:"#6c86ff",}}/>
//           <Text style={styles.welcome} >{rowData.timetaken} </Text>
//           </Row>
//           </Col>
//   </Row>
//   <Row>
//     <Col>
//       <Row>
//         <TouchableOpacity style={{margin:7,padding:5,height:30,width:120,backgroundColor:'#6c86ff'}}>
//           <Text style={{color:"#ffffff",fontSize:12,fontWeight:'bold',textAlign:'center'}}>{score}</Text>
//         </TouchableOpacity>
//       </Row>
//         </Col>
//       <Col style={{width:60}}>
//         <Row>
//
//           {rowData.status === "Pass"?<Icon name="md-checkbox-outline" size={24} style={{color:"#6c86ff",marginTop:7,marginLeft:15}}/>:undefined}
//         {rowData.status === "Fail"?<Icon name="md-checkbox-outline" size={24} style={{color:"#bb321f",marginTop:7,marginLeft:15}}/>:undefined}
//       </Row>
//         </Col>
// </Row>
// <Row>
//   <Col>
//     <Row>
//     <Text style={styles.welcome} >Published: {rowData.publisheddate} </Text>
//     </Row>
//       </Col>
//     <Col style={{width:100}}>
//       <Row>
//       <Text style={styles.welcome} >Submitted: {rowData.submitteddate}</Text>
//       </Row>
//     </Col>
//
//
// </Row>
// <View style={styles.dividerLine}>
// </View>
//
// </Col>
//
//   </Grid> ;
//   return (contentRow);
//
//  }
//
//   render() {
//
//
//     return (
//       <ScrollView>
//         <ListView
//              dataSource={this.state.dataSource}
//              renderRow={
//                 (rowData) =>  {
//                    return this.renderRow(rowData);
//               }
//             }
//        />
//       </ScrollView>
//
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   card: {
// borderWidth: 1,
// backgroundColor: '#fff',
// borderColor: 'rgba(0,0,0,0.1)',
// margin: 5,
// padding: 15,
// shadowColor: '#ccc',
// shadowOffset: { width: 2, height: 2, },
// shadowOpacity: 0.5,
// shadowRadius: 3,
// },
// welcome: {
//   fontSize: 10,
//   //fontWeight:'bold',
//
// },
// title: {
//   fontSize: 12,
//   fontWeight:'bold',
//   color:'#ff9800',
//   marginLeft:7,
//   marginTop:0
//
// },
// dividerLine:{
//     borderColor:'rgba(151,151,151,0.3)',
//    //borderColor:'red',
//      borderWidth:0.5,
//    //  width:200,
//    marginTop:7,
//
//    marginBottom:7,
//    //  marginLeft:10,
//      height:1
//
//   },
//
//   button:{
//     //width:60,
//     height:30,
//     marginLeft:7,
//     marginRight:5,
//     marginBottom:5,
//     padding:5
//
//   }
// });
