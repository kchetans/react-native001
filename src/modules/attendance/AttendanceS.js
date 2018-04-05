/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, Dimensions, ScrollView,StatusBar} from "react-native";
import DatePicker from "react-native-datepicker";
import SplashScreen from "react-native-splash-screen";


export default class AttendanceS extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startdate: null,
            enddate  : null
        }
    }

    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    }


    render() {
        return (
          <View>
          <StatusBar backgroundColor='#860089'/>

            <ScrollView>
                <View style={styles.card} elevation={2}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
                        <View>
                            <Text style={styles.Posttitle}>Start</Text>
                            <DatePicker

                                date={this.state.startdate}
                                mode="date"
                                placeholder="select date"
                                format="MMM Do YY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon={false}
                                customStyles={{
                                  dateInput: {
                                     flex: 1,
                                    height: 40,
                                    borderWidth: 0,
                                    marginRight:50
                                  },
                                  dateText:{
                                    color:'#ab47bc',
                                    fontSize:16,

                                  }

                                }}
                                onDateChange={(date) => {
                                    this.setState({startdate: date})
                                }}
                            />
                        </View>

                        <View style={styles.verticalLine}>
                        </View>

                        <View>
                            <Text style={styles.Posttitle}>End</Text>
                            <DatePicker
                                date={this.state.enddate}
                                mode="date"
                                placeholder="select date"
                                format="MMM Do YY"

                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon={false}
                                customStyles={{
                                  dateInput: {
                                     flex: 1,
                                    height: 40,
                                    borderWidth: 0,
                                    marginRight:50
                                  },
                                  dateText:{
                                    color:'#ab47bc',
                                    fontSize:16,

                                  }

                                }}

                                onDateChange={(date) => {
                                    this.setState({enddate: date})
                                }}
                            />
                        </View>
                    </View>
                </View>


                <View style={styles.card} elevation={2}>
                    <Text style={styles.label}>
                        Attendance Summary
                    </Text>
                    <View style={styles.dividerLine}>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={styles.titlebold}>
                            Total
                        </Text>
                        <Text style={styles.databold}>
                            16
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={styles.title}>
                            Present
                        </Text>
                        <Text style={styles.data}>
                            14
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={styles.title}>
                            Absent
                        </Text>
                        <Text style={styles.data}>
                            1
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={styles.title}>
                            Off
                        </Text>
                        <Text style={styles.data}>
                            0
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={styles.title}>
                            Unmarked
                        </Text>
                        <Text style={styles.data}>
                            1
                        </Text>
                    </View>
                </View>

                <View style={styles.card} elevation={2} >

                    <Text style={styles.label}>
                        Hourly Summary
                    </Text>
                    <View style={styles.dividerLine}>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={styles.titlebold}>
                            Total working Hrs.
                        </Text>
                        <Text style={styles.databold}>
                            105
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={styles.title}>
                            Average working Hrs.
                        </Text>
                        <Text style={styles.data}>
                            7.5
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={styles.title}>
                            Greater than 12 hrs
                        </Text>
                        <Text style={styles.data}>
                            0
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={styles.title}>
                            Less than 8 hrs
                        </Text>
                        <Text style={styles.data}>
                            0
                        </Text>
                    </View>

                </View>
            </ScrollView>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    Posttitle   : {
        color   : '#4a4a4a',
        fontSize: 16.05,
        //  margin:7,
        //  marginLeft:7,
        // paddingLeft:1,
        // paddingHorizontal:15,

    },
    container   : {
        flex           : 1,
        justifyContent : 'center',
        alignItems     : 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome     : {
        fontSize : 20,
        textAlign: 'center',
        margin   : 10,
    },
    instructions: {
        textAlign   : 'right',
        color       : '#333333',
        marginBottom: 5,
    },
    card        : {
        borderWidth    : 1,
        backgroundColor: '#fff',
        borderColor    : 'rgba(0,0,0,0.1)',
        margin         : 5,
        padding        : 10,
        shadowColor    : '#ccc',
        shadowOffset   : {width: 2, height: 2,},
        shadowOpacity  : 0.5,
        shadowRadius   : 3,
    },
    dividerLine : {
        borderColor: '#E3F2FD',
        borderWidth: 0.5,
        height     : 1
    },
    verticalLine:{
      borderWidth: 0.5,
      borderColor:'#E3F2FD',
      height: 64.05,

    },

      label:{
        color:"rgba(74,74,74,.6)",
        fontSize:13.95,
      },

      data:{
        color:"rgba(171,71,188,87)",
        fontSize:16.05,
      },
      databold:{
        color:"rgba(171,71,188,87)",
        fontSize:16.05,
        fontWeight:"bold"
      },

      title:{
        color:"rgba(0,0,0,.87)",
        fontSize:16.05,
      },
      titlebold:{
        color:"rgba(0,0,0,.87)",
        fontSize:16.05,
        fontWeight:"bold",
      }




});
