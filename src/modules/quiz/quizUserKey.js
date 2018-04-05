import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    ToolbarAndroid,
    Text,
    TextInput,
    Button,
    View,
    ScrollView,
    ListView,
    ToastAndroid
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import MultipleChoice from "react-native-multiple-choice";


export default class QuizUserKey extends React.Component {

    constructor(props) {
        super(props);
        const ds   = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {sequence: 1, question: "What is the color of apple?", options: ['red', 'blue', 'green', 'orange']},
                {sequence: 2, question: "What is the color of banana?", options: ['blue', 'yellow', 'orange']},
                {sequence: 3, question: "What is the color of sky?", options: ['yellow', 'orange']},
                {sequence: 4, question: "What is the color of carrot?", options: ['orange']}
            ])
        };
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <ScrollView>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <View style={styles.card}>
                            <View style={{flex: 1, paddingTop: 22}}>
                                <View style={styles.card}>
                                    <Text>{rowData.sequence}.{rowData.question}</Text>
                                </View>
                                <View disabled={true} style={styles.card}>
                                    <MultipleChoice
                                        disabled={true}
                                        options={rowData.options}
                                        selectedOptions={rowData.options}
                                    />
                                </View>
                            </View>
                        </View>
                    }

                />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    card: {
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
});
