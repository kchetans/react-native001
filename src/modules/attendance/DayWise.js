import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, ScrollView,ListView,TouchableOpacity} from "react-native";
import Table from "react-native-simple-table";
import SplashScreen from "react-native-splash-screen";
import DatePicker from "react-native-datepicker";
import {Col, Row, Grid} from "react-native-easy-grid";


export default class DayWise extends Component {


    constructor(props) {
        super(props)
        let dataSource =
                [{
                    'Date': 'Mar 25',
                    'InOut'  : '9:00am-6:00pm',

                    'Hrs' : 9,
                    'Type': 'P'
                },
                    {
                        'Date': 'Mar 26',
                        'InOut'  : '9:00am-6:00pm',
                        'Hrs' : 9,
                        'Type': 'P'
                    },
                    {
                        'Date': 'Mar 27',
                        'InOut'  : '9:00am-6:00pm',
                        'Hrs' : 9,
                        'Type': 'P'
                    },
                    {
                        'Date': 'Mar 28',
                         'InOut'  : '-',
                        'Hrs' : 0,
                        'Type': 'A'
                    },
                    {
                        'Date': 'Mar 28',
                        'InOut'  : '-',
                        'Hrs' : 0,
                        'Type': 'A'
                    },
                    {
                        'Date': 'Mar 28',
                        'InOut'  : '-',
                        'Hrs' : 0,
                        'Type': 'L'
                    },
                    {
                        'Date': 'Mar 28',
                        'InOut'  : '9:00am-6:00pm',
                        'Hrs' : 9,
                        'Type': 'P'
                    },
                ]

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            startdate: null,
            enddate  : null,
            dataSource: ds.cloneWithRows(dataSource),
        }
    }

    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    }

    render() {

        return (
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
                <View style={{height:30}}>
                <Grid>
                  <Row  size={1} style={{ height: 2 }}>
                  <Col>
                   <Text style={{textAlign:"center"}}>Date</Text>
                  </Col>
                  <Col style={{alignItems: 'center', width:80}}>
                   <Text style={{textAlign:"center"}}>In-Out</Text>
                  </Col>
                  <Col style={{alignItems: 'center'}}>
                  <Text style={{textAlign:"center"}}>Hrs</Text>
                  </Col>
                  <Col style={{alignItems: 'center'}}>
                  <Text style={{textAlign:"center"}}>Type</Text>
                  </Col>
                  </Row>
                </Grid>
                </View>

              <View style={styles.dividerLine}></View>
              <ListView
                      dataSource={this.state.dataSource}
                      renderRow={(rowData, rowID) =>
                          <Content key={rowID} data={rowData}/>
                }/>
                </View>
            </ScrollView>
        );
    }
}


class Content extends React.Component {
    render() {
      let type=null
      if (this.props.data.Type === 'A')
       type=<View style={styles.squarered} ><Text style={{textAlign: 'center'}}>{this.props.data.Type}</Text></View>
      else if (this.props.data.Type === 'P')
       type=<View style={styles.squaregreen} ><Text style={{textAlign: 'center'}}>{this.props.data.Type}</Text></View>
      else
       type=<View style={styles.squarepurple} ><Text style={{textAlign: 'center'}}>{this.props.data.Type}</Text></View>

        return (

          <Grid>
            <Row>
            <Col style={{ alignItems: 'center', marginTop: 7}}>
             <Text style={{textAlign:"center"}}>{this.props.data.Date}</Text>
            </Col>
            <Col style={{alignItems: 'center', marginTop: 7, width:100}}>
             <Text style={{textAlign:"center"}}>{this.props.data.InOut}</Text>
            </Col>
            <Col style={{alignItems: 'center', marginTop: 7}}>
            <Text style={{textAlign:"center"}}>{this.props.data.Hrs}</Text>
            </Col>
            <Col style={{alignItems: 'center', marginTop: 7}}>
             {type}
            </Col>
            </Row>

          </Grid>


        )
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
    card     : {
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
    container: {

        ...Platform.select({
            ios    : {
                paddingTop: 20
            },
            android: {}
        }),
    },
    title    : {
        fontSize : 18,
        padding  : 10,
        textAlign: 'center'
    },
     verticalLine:{
      borderWidth: 0.5,
      borderColor:'#E3F2FD',
      height: 64.05,

    },
    dividerLine : {
        borderColor: '#E3F2FD',
        borderWidth: 0.5,
        height     : 1
    },
    squarered: {
    width: 20,
    height: 20,
    borderRadius:5,
    backgroundColor: 'red'
},
    squaregreen: {
    width: 20,
    height: 20,
    borderRadius:5,
    backgroundColor: 'green'
},
    squarepurple: {
    width: 20,
    height: 20,
    borderRadius:5,
    backgroundColor: '#ab47bc'
}


});
