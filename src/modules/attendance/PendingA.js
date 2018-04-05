import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, ScrollView, Button, ListView,TouchableOpacity} from "react-native";
import SplashScreen from "react-native-splash-screen";
import DatePicker from "react-native-datepicker";
var moment = require('moment');
import Icon from "react-native-vector-icons/Ionicons";
import styles from '../../styles.js';

export default class PendingA extends Component {

    constructor(props) {
        super(props)
        const ds   = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        data       = [
          {
            month:'April',
            detail:[
              {
              date:'23/02/2017',
              markstatus:'Absent',
              pendingstatus:'Pending'
            },
            {
              date:'23/03/2016',
              markstatus:'Absent',
              pendingstatus:'Pending'
            }
          ]
        },
        {
          month:'March',
          detail:[{
            date:'23/02/2017',
            markstatus:'Absent',
            pendingstatus:'Pending'
          },
          {
            date:'23/02/2017',
            markstatus:'Absent',
            pendingstatus:'Pending'
          }
        ]
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

    _onSubmit() {


    }

    renderRow(rowData) {

      let data = [];
      for(let i= 0; i < rowData.detail.length ;i++){
        key={i}
        data.push(
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}} key={i}>
            <Text>{rowData.detail[i].date}</Text>
            <Text>{rowData.detail[i].markstatus}</Text>
            <Text>{rowData.detail[i].pendingstatus}</Text>
          </View>

          );

      };
        var contentRow =

        <View style={{paddingVertical:10,backgroundColor: '#eceff1'}} elevation={3}>
          <View style={{backgroundColor:'#ffffff',padding:10}} elevation={3}>
          <Text style={[styles.Posttitle]}>{rowData.month}</Text>

          <View style={styles.dividerLine}>
          </View>
            {data}
          </View>
        </View>;
      return (contentRow);

    }

    render() {

      let today = moment().format("DD MMM YYYY");

        return (
            <ScrollView>
              <View style={{ backgroundColor: '#eceff1'}}>
                <View style={{flexDirection:'row',padding:10,backgroundColor: '#eceff1',justifyContent:'space-between'}}>
                  <Text style={[styles.Posttitle]}>Today: {today}</Text>
                  <TouchableOpacity style={{width:40}}>
                  <Icon name= "md-refresh" size={25} style={{color:'#ab47bc'}}/>
                  </TouchableOpacity>

                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={
                        (rowData) => {
                            return this.renderRow(rowData);
                        }
                    }
                />
            </View>
            </ScrollView>
        );
    }
}

// const styles = StyleSheet.create({
//     card       : {
//       //  borderWidth    : 1,
//         backgroundColor: '#fff',
//         borderColor    : 'rgba(0,0,0,0.1)',
//         padding        : 10,
//         shadowColor    : '#ccc',
//         shadowOffset   : {width: 2, height: 2,},
//         shadowOpacity  : 0.5,
//         shadowRadius   : 3,
//     },
//     welcome    : {
//         fontSize : 15,
//         textAlign: 'center',
//         margin   : 10,
//     },
//     dividerLine: {
//         borderColor: '#A9A9A9',
//         borderWidth: 0.5,
//         height     : 1
//     },
//     title      : {
//         fontSize : 18,
//         padding  : 10,
//         textAlign: 'center'
//     }
// });

// import React, {Component} from "react";
// import {Platform, StyleSheet, Text, View, ScrollView, Button, ListView} from "react-native";
// import SplashScreen from "react-native-splash-screen";
// import DatePicker from "react-native-datepicker";
//
//
// export default class PendingA extends Component {
//
//     constructor(props) {
//         super(props)
//         const ds   = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         data       = [{title: '23/04/2017'}, {title: '26/03/2017'}]
//         this.state = {
//             dataSource: ds.cloneWithRows(data),
//             startdate : null,
//             enddate   : null
//         }
//     }
//
//     componentDidMount() {
//         // do anything while splash screen keeps, use await to wait for an async task.
//         SplashScreen.hide();
//     }
//
//     _onSubmit() {
//
//
//     }
//
//     renderRow(rowData) {
//
//         var contentRow =
//                 <View>
//                     <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//                         <Text style={styles.welcome}>{rowData.title}</Text>
//                         <Text style={styles.welcome}>Pending(P)</Text>
//                     </View>
//                     <View style={styles.dividerLine}></View>
//                 </View>;
//         return (contentRow);
//
//     }
//
//     render() {
//
//
//         return (
//             <ScrollView>
//                 <View style={styles.card}>
//                     <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
//                         <View>
//                             <Text style={styles.Posttitle}>Start Date</Text>
//                             <DatePicker
//                                 style={{width: 125}}
//                                 date={this.state.startdate}
//                                 mode="date"
//                                 placeholder="select date"
//                                 format="YYYY-MM-DD"
//
//                                 confirmBtnText="Confirm"
//                                 cancelBtnText="Cancel"
//                                 customStyles={{
//                                     dateIcon : {
//                                         position  : 'absolute',
//                                         left      : 0,
//                                         top       : 4,
//                                         marginLeft: 0
//                                     },
//                                     dateInput: {
//                                         marginLeft: 36
//                                     }
//                                     // ... You can check the source to find the other keys.
//                                 }}
//                                 onDateChange={(date) => {
//                                     this.setState({startdate: date})
//                                 }}
//                             />
//                         </View>
//                         <View>
//                             <Text style={styles.Posttitle}>End Date</Text>
//                             <DatePicker
//                                 style={{width: 125}}
//                                 date={this.state.enddate}
//                                 mode="date"
//                                 placeholder="select date"
//                                 format="YYYY-MM-DD"
//
//                                 confirmBtnText="Confirm"
//                                 cancelBtnText="Cancel"
//                                 customStyles={{
//                                     dateIcon : {
//                                         position  : 'absolute',
//                                         left      : 0,
//                                         top       : 4,
//                                         marginLeft: 0
//                                     },
//                                     dateInput: {
//                                         marginLeft: 36,
//                                         width     : 30
//                                     }
//                                     // ... You can check the source to find the other keys.
//                                 }}
//                                 onDateChange={(date) => {
//                                     this.setState({enddate: date})
//                                 }}
//                             />
//                         </View>
//                     </View>
//                 </View>
//                 <Button
//                     onPress={this._onSubmit.bind(this)}
//                     title="Update Attendances"
//                     color="#6c86ff"
//                     accessibilityLabel="Update Attendances"/>
//
//                 <ListView
//                     dataSource={this.state.dataSource}
//                     renderRow={
//                         (rowData) => {
//                             return this.renderRow(rowData);
//                         }
//                     }
//                 />
//
//             </ScrollView>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     card       : {
//         borderWidth    : 1,
//         backgroundColor: '#fff',
//         borderColor    : 'rgba(0,0,0,0.1)',
//         margin         : 5,
//         padding        : 15,
//         shadowColor    : '#ccc',
//         shadowOffset   : {width: 2, height: 2,},
//         shadowOpacity  : 0.5,
//         shadowRadius   : 3,
//     },
//     welcome    : {
//         fontSize : 15,
//         textAlign: 'center',
//         margin   : 10,
//     },
//     dividerLine: {
//         borderColor: '#A9A9A9',
//         borderWidth: 0.5,
//         height     : 1
//     },
//     title      : {
//         fontSize : 18,
//         padding  : 10,
//         textAlign: 'center'
//     }
// });
