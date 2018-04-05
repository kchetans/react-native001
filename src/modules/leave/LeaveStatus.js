import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, ScrollView, Button, ListView} from "react-native";
import SplashScreen from "react-native-splash-screen";


export default class LeaveStatus extends Component {

    constructor(props) {
        super(props)
        const ds   = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        data       = [{startdate: '23/04/2017', enddate: '26/03/2017', reason: "test", status: 'Pending'},
            {startdate: '28/05/2017', enddate: '21/06/2017', reason: "Long vacation", status: 'Pending'}]
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

        var contentRow =
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <Text style={styles.welcome}>{rowData.startdate} to</Text>
                            <Text style={styles.welcome}>{rowData.enddate}</Text>
                        </View>
                        <Text style={styles.welcome}>{rowData.status}</Text>
                    </View>
                    <Text style={styles.welcome}>Reason: {rowData.reason}  </Text>
                    <View style={styles.dividerLine}></View>
                </View>;
        return (contentRow);

    }

    render() {


        return (
            <View style={styles.card}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={
                        (rowData) => {
                            return this.renderRow(rowData);
                        }
                    }
                />
            </View>


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
        fontSize  : 15,
        fontWeight: 'bold',
        margin    : 10,
    },
    dividerLine: {
        borderColor: '#A9A9A9',
        borderWidth: 0.5,
        height     : 1
    },
    title      : {
        fontSize : 18,
        padding  : 10,
        textAlign: 'center'
    }
});
