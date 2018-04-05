import React, {Component} from "react";
import {
    AppRegistry,
    View,
    Image,
    Text,
    Button,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableHighlight
} from "react-native";
import SplashScreen from "react-native-splash-screen";

export default class StartScreen extends React.Component {
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
            <View style={styles.container}>
                <View style={styles.startImageContainer}>
                    <Image
                        style={{height: imgageHeightSize}}
                        source={require('./group.png')}/>
                    <Text style={styles.title}> Workex</Text>
                    <Text style={styles.subtitle}> Improving work experience</Text>
                    <TouchableHighlight style={styles.button}
                                        onPress={() => this.props.navigation.navigate('LoginScreen')}>
                        <Text style={styles.buttontext}>START</Text>
                    </TouchableHighlight>
                </View>
                <View>

                </View>

            </View>
        );
    }
}

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
