import React, {Component} from "React";
import {ScrollView, Text, Button, StyleSheet, Image, TextInput, View, Dimensions, Picker} from "react-native";
import SplashScreen from "react-native-splash-screen";
var ImagePicker = require('react-native-image-picker');

class SalarySlip extends React.Component {
    static navigationOptions = {
        title: 'Salary Slip',
    };

    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    }

    render() {
        var height           = Dimensions.get('window').height;
        var width            = Dimensions.get('window').width;
        var imageWidthSize   = width * 0.9;
        var imgageHeightSize = height * 0.7;
        return (
            <View style={{padding: 5}}>
                <Image style={{width: 350, height: 550}}
                       source={{uri: 'http://support.procountor.com/en/kuvat/en_salary_slip_preview.PNG'}}/>
            </View>
        )
    }

}

module.exports = SalarySlip;

const styles = StyleSheet.create({
    container          : {
        flex: 1,
        //backgroundColor:'blue'
    },
    startImageContainer: {
        alignItems    : 'center',
        flexGrow      : 1,
        justifyContent: 'center'
    },
    startImage         : {
        height: 100,
        width : 100,
    },
    title              : {
        fontSize  : 20,
        color     : '#6c86ff',
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop : 10
    },
    subtitle           : {
        fontSize  : 10,
        color     : '#4b4b4b',
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop : 10
    },
    button             : {
        width          : 300,
        height         : 45,
        marginTop      : 10,
        borderRadius   : 40,
        backgroundColor: '#6c86ff',
    },
    buttontext         : {
        textAlign : 'center',
        padding   : 10,
        fontSize  : 15,
        color     : '#ffffff',
        fontWeight: 'bold'
    }
})
