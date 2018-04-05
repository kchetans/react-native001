import React, {Component} from "React";
import {ScrollView, Text, Button, StyleSheet, Image, TextInput, View, Picker} from "react-native";
import styles from "../../styles";
import DatePicker from "react-native-datepicker";
import SplashScreen from "react-native-splash-screen";
var ImagePicker = require('react-native-image-picker');


const feedbackStyle = StyleSheet.create({
    View       : {
        // flex:1,
        // alignItems:'center',
        // justifyContent: 'space-around',
        marginBottom: 20
    },
    textlabel  : {
        fontSize    : 17,
        marginBottom: 5,
        fontWeight  : 'bold',
    },
    imageButton: {
//        padding:5,
        margin        : 10,
        //marginBottom:10,
        alignItems    : 'center',
        justifyContent: 'center',
    }
});

class Feedback extends React.Component {
    constructor(props) {
        super(props)
        let date   = new Date()
        this.state = {date, avatarSource: undefined,}
    }

    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    }

    postFeedbackData() {

    }

    ImageSelect() {
        var options = {
            title         : 'Select Image',
            //  customButtons: [
            //    {name: 'fb', title: 'Choose Photo from Facebook'},
            //  ],
            storageOptions: {
                skipBackup: true,
                path      : 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};
                console.log("uri", source);
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={{padding: 5, backgroundColor: '#ffffff'}}>
                    <View style={{padding: 2, backgroundColor: '#ffffff'}}>
                        <View style={{height: 90, padding: 10, backgroundColor: '#ffffff'}} elevation={2}>
                            <Text style={styles.Posttitle}>Date</Text>
                            <DatePicker
                                style={{width: 250, marginBottom: 10}}
                                date={this.state.date}
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
                                }}
                                onDateChange={(date) => {
                                    this.setState({date: date})
                                }}
                            />
                            <View style={styles.dividerLine}>
                            </View>
                        </View>
                    </View>
                    <View style={{padding: 2, backgroundColor: '#ffffff'}}>
                        <View style={{height: 90, padding: 10, backgroundColor: '#ffffff'}} elevation={2}>
                            <Text style={styles.Posttitle}>Counter Name:</Text>

                            <Picker
                                selectedValue={this.state.counterName}
                                onValueChange={(counter) => this.setState({counterName: counter})}>
                                <Picker.Item label="Airtel" value="Airtel"/>
                                <Picker.Item label="V5" value="V5"/>
                                <Picker.Item label="Delivery" value="Delivery"/>
                            </Picker>
                            <View style={styles.dividerLine}>
                            </View>
                        </View>
                    </View>
                    <View style={{padding: 2, backgroundColor: '#ffffff'}}>
                        <View style={{height: 90, padding: 10, backgroundColor: '#ffffff'}} elevation={2}>
                            <Text style={styles.Posttitle}>Category:</Text>
                            <Picker
                                selectedValue={this.state.categoryType}
                                onValueChange={(category) => this.setState({categoryType: category})}>
                                <Picker.Item label="Airtel-east" value="Airtel-east"/>
                                <Picker.Item label="V5-delhi" value="V5-delhi"/>
                                <Picker.Item label="Delivery-delhi" value="Delivery-delhi"/>
                            </Picker>
                            <View style={styles.dividerLine}>
                            </View>
                        </View>
                    </View>
                    <View style={{padding: 2, backgroundColor: '#ffffff'}}>
                        <View style={{height: 90, padding: 10, backgroundColor: '#ffffff'}} elevation={2}>
                            <Text style={styles.Posttitle}>SKU:</Text>
                            <Picker
                                selectedValue={this.state.skuCode}
                                onValueChange={(sku) => this.setState({skuCode: sku})}>
                                <Picker.Item label="AIRTEL003" value="AIRTEL003"/>
                                <Picker.Item label="V5004" value="V5004"/>
                                <Picker.Item label="Delivery006" value="Delivery006"/>
                            </Picker>
                            <View style={styles.dividerLine}>
                            </View>
                        </View>
                    </View>
                    <View style={{padding: 2, backgroundColor: '#ffffff'}}>
                        <View style={{height: 120, padding: 10, backgroundColor: '#ffffff'}} elevation={2}>
                            <Text style={styles.Posttitle}>Remarks:</Text>
                            <TextInput
                                value={this.state.remarks}
                                onChangeText={(remarks) => this.setState({remarks})}
                                style={{marginBottom: 20}}
                                placeholder="Enter Remarks........."
                                multiline={true}
                                numberOfLines={1}>
                            </TextInput>
                            <View style={styles.dividerLine}>
                            </View>
                        </View>
                    </View>
                    <View style={{padding: 2, backgroundColor: '#ffffff'}}>
                        <View style={{height: 80, padding: 10, backgroundColor: '#ffffff'}} elevation={2}>

                            <View style={feedbackStyle.imageButton}>
                                <Button
                                    onPress={() => this.ImageSelect()}
                                    title="UPLOAD IMAGE"
                                    color="gray"
                                    accessibilityLabel=""
                                    style={{width: 20}}/>
                            </View>
                        </View>
                    </View>
                    <View style={feedbackStyle.imageButton}>
                        <Image source={this.state.avatarSource} style={{height: 250, width: 300}}/>
                    </View>

                    <Button
                        onPress={() => this.postFeedbackData()}
                        title="Submit"
                        color="#F58545"
                        accessibilityLabel=""
                    />
                </View>
            </ScrollView>
        )
    }

}

module.exports = Feedback;
