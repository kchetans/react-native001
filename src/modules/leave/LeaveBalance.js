import React, {Component} from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    ListView,
    TouchableOpacity,
    TouchableHighlight,
    ToastAndroid
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import Icon from "react-native-vector-icons/Ionicons";


export default class LeaveBalance extends Component {

    constructor(props) {
        super(props)
        const ds   = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        data       = [{type: 'CL', count: 5}, {type: 'SL', count: 4}, {type: 'PL', count: 4}]
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
                        <Text style={styles.welcome}>{rowData.type}</Text>
                        <Text style={styles.welcome}>{rowData.count}</Text>
                    </View>
                    <View style={styles.dividerLine}></View>
                </View>
        return (contentRow);

    }

    render() {
        let total = 0;
        for (i = 0; i < data.length; i++) {
            total = total + data[i].count;
        }

        return (

            <View>

                <View style={styles.card}>

                    <Button
                        onPress={this._onSubmit.bind(this)}
                        title="Leave Balance"
                        color="#6c86ff"
                        accessibilityLabel="Leave Balance"/>


                </View>
                <View style={styles.card}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={
                            (rowData) => {
                                return this.renderRow(rowData);
                            }
                        }
                    />
                    <View>
                        <View
                            style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: "#6c86ff"}}>
                            <Text style={styles.welcome}>Total</Text>
                            <Text style={styles.welcome}>{total}</Text>
                        </View>
                        <View style={styles.dividerLine}></View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('TabIndex')}>
                    <View style={{marginTop: 120, marginLeft: Dimensions.get("window").width - 50}}>
                        <Icon name='md-home' size={50}/>
                    </View>
                </TouchableOpacity>
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
        fontSize : 15,
        textAlign: 'center',
        margin   : 10,
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
