import React, {Component} from "react";
import {ScrollView, Text, Button, StyleSheet, Image, TextInput, View, Picker} from "react-native";
import SplashScreen from "react-native-splash-screen";
import DatePicker from "react-native-datepicker";

export default class LeaveRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {

            text     : null,
            reason   : null,
            startdate: null,
            enddate  : null

        };
    }


    componentDidMount = () => {
        SplashScreen.hide();
    }


    _onSubmit() {


    }


    render() {

        return (<ScrollView>

            <View style={styles.card}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
                    <View>
                        <Text>Start Date</Text>
                        <DatePicker
                            style={{width: 125}}
                            date={this.state.startdate}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"

                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon : {
                                    position  : 'absolute',
                                    left      : 0,
                                    top       : 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {
                                this.setState({startdate: date})
                            }}
                        />
                    </View>
                    <View>
                        <Text>End Date</Text>
                        <DatePicker
                            style={{width: 125}}
                            date={this.state.enddate}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"

                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon : {
                                    position  : 'absolute',
                                    left      : 0,
                                    top       : 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36,
                                    width     : 30
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {
                                this.setState({enddate: date})
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <Text>Reason:</Text>
                <Picker
                    selectedValue={this.state.reason}
                    onValueChange={(reason) => this.setState({reason: reason})}>
                    <Picker.Item label="Out of Station" value="O"/>
                    <Picker.Item label="Sick" value="S"/>
                    <Picker.Item label="Personal" value="P"/>
                </Picker>
                <View style={styles.dividerLine}>
                </View>
                <Text style={{marginBottom: 5}}>Remarks:</Text>
                <TextInput
                    style={{borderColor: 'gray', borderWidth: 1}}
                    multiline={true}
                    numberOfLines={6}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}/>

                <View style={styles.submitButton}>
                    <Button
                        onPress={this._onSubmit.bind(this)}
                        title="Submit"
                        color="#6c86ff"
                        accessibilityLabel="Submit"/></View>
            </View>

        </ScrollView>)

    }
}

const styles = StyleSheet.create({
    card        : {
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
        textAlign   : 'center',
        color       : '#333333',
        marginBottom: 5,
    },
    dividerLine : {
        borderColor: '#e5e5e5',
        borderWidth: 0.5,
        height     : 1
    },
    uploadAvatar: {

        height: 100
    },
    clickImage  : {
        flex           : 1,
        justifyContent : 'center',
        alignItems     : 'flex-start',
        margin         : 20,
        width          : 200,
        backgroundColor: '#F5FCFF'
    },
    submitButton: {
        flex          : 1,
        justifyContent: 'center',
        alignItems    : 'center',
        margin        : 20

    }

});
