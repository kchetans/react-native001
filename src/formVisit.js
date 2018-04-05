'use strict';
import React, {Component} from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    AppRegistry,
    StyleSheet,
    Image,
    ToastAndroid,
    TouchableOpacity,
    ListView,
    ScrollView
} from "react-native";
import styles from "./styles";
import SplashScreen from "react-native-splash-screen";
import DatePicker from "react-native-datepicker";
var ImagePicker = require('react-native-image-picker');


const feedbackStyle = StyleSheet.create({
    View       : {
        flex          : 1,
        alignItems    : 'center',
        justifyContent: 'space-around',
        marginBottom  : 20
    },
    textlabel  : {
        fontSize    : 17,
        marginBottom: 5,
        fontWeight  : 'bold',
    },
    imageButton: {
        marginBottom  : 20,
        alignItems    : 'center',
        justifyContent: 'center',
    }
});

class TextField extends React.Component {

    render() {
        return (
            <TextInput
                style={{marginBottom: 20}}
                placeholder={this.props.placeholder}
                value={this.props.fieldName}
                multiline={this.props.multiline}
                keyboardType={this.props.keyboardType}>
            </TextInput>
        )
    }
}
class DateField extends React.Component {
    render() {
        return (
            <DatePicker
                style={{width: 250, marginBottom: 10}}
                date={this.props.fieldName}
                mode="date"
                placeholder={this.props.placeholder}
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
                }}
            />

        )
    }
}

class PickerField extends React.Component {
    render() {
        return (
            <Picker
                selectedValue={this.props.fieldName}
                onValueChange={(counter) => this.setState({counterName: counter})}>
                <Picker.Item label="Airtel" value="Airtel"/>
                <Picker.Item label="V5" value="V5"/>
                <Picker.Item label="Delivery" value="Delivery"/>
            </Picker>
        )
    }
}

class ButtonField extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <Button
                    onPress={() => this.postRegistrationData()}
                    title={this.state.fieldName}
                    color="#F58545"
                />
            </TouchableOpacity>
        )
    }
}

class FormVisit extends React.Component {

    render() {
        var _data = this.props.data;
        var _textField, _dateField, _pickerField;

        if (_data.type === "text") {
            _textField = <TextField fieldName={_data.detail.fieldName } placeholder={_data.detail.placeholder }
                                    multiline={_data.detail.multiline } keyboardType={_data.detail.keyboardType }/>
        }

        if (_data.type === "date") {
            _dateField = <DateField fieldName={_data.detail.fieldName } placeholder={_data.detail.placeholder }/>
        }

        if (_data.type === "picker") {
            _pickerField = <PickerField fieldName={_data.detail.fieldName } placeholder={_data.detail.placeholder }/>
        }
        return (
            <View>
                <View style={styles.cardWrapper}>
                    {_textField}
                </View>
                <View style={styles.cardWrapper}>
                    {_dateField}
                </View>
                <View style={styles.cardWrapper}>
                    {_pickerField}
                </View>
            </View>

        )
    }

}


class VisitForm extends React.Component {
    constructor(props) {
        super(props)
        const ds   = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        //data = ,
        this.state = {
            dataSource: ds.cloneWithRows([{
                "type"  : "text",
                "detail": {
                    "placeholder" : "text here..",
                    "fieldName"   : "name",
                    "multiline"   : "false",
                    "keyboardType": "text"
                },
            }, {
                "type"  : "date",
                "detail": {
                    "placeholder": "text here..",
                    "fieldName"  : "name",
                },
            },
                {
                    "type"  : "picker",
                    "detail": {
                        "placeholder": "text here..",
                        "fieldName"  : "name",
                    },
                }
            ]),
        }
    }

    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    }

    render() {
        return (
            <ScrollView>

            </ScrollView>


        );
    }
}

module.exports = VisitForm;
