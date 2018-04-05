import React, {Component} from "react";
import {
  ScrollView,
  Text,
  Button,
  StyleSheet,
  Image,
  AsyncStorage,
  Dimensions,
  TextInput,
  View,
  Picker,
  ToastAndroid,
  TouchableOpacity
} from "react-native";
import styles from '../../styles.js';
import SplashScreen from "react-native-splash-screen";
import Icon from "react-native-vector-icons/Ionicons";
import attendance_config_file from "./attendance_config_file";
import apiConstant from "../../components/libs/data/apiConstant";
var moment = require('moment');
var ImagePicker = require('react-native-image-picker');
let config;
let AttendanceCategory;
let level;
let ModuleName;
let LabelName;
let ReasonTitle;
let ReasonCategory;
let AbsentPickerItem = [];
let PresentPickerItem = [];
let OtherPickerItem = [];
let AttendancePickerItem = [];
let PresentItemReason = [];
let OtherItemReason = [];
let AbsentItemReason = [];

let RemarksTitle;
let AttendanceType;
let submitText;
export default class MarkAttendance extends Component {
  constructor(props) {
    super(props);
    let selfiDemo = {
      uri: "http://images.jagran.com/images/06_09_2016-6selfie-.jpg"
    }
    this.state = {
      avatarSource: selfiDemo,
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      remarks: null,
      attendance: undefined,
      reason: undefined,
      attendance_config: undefined

    };
  }

  //TODO
  watchID = (null :
    ? number);

  componentDidMount = () => {
    console.log('Inside component Did Mount');
    this.getTheStorageData();
    console.log('getTheStorageData completed');

    SplashScreen.hide();
    navigator.geolocation.getCurrentPosition((position) => {
      var initialPosition = JSON.stringify(position);
      this.setState({initialPosition});
    }, (error) => console.log(error.message), {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
    });
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  };

  async getTheStorageData() {
    await AsyncStorage.getItem('attendance_config_file', (err, result) => {
      console.log('attendance_config_file Mark json', JSON.parse(result));
      attendance_config = result;
      this.setState({
        attendance_config: JSON.parse(result)
      }, () => {
        this.setState({attendance: AttendanceCategory[0].code})
        console.log('AttendanceCategory[0].code', AttendanceCategory[0].code);
        console.log('ReasonCategory[0].code', ReasonCategory.length);
        let reasonCode = []
        for (let i = 0; i < ReasonCategory.length; i++) {
          console.log('ReasonCategory[i].attendance', ReasonCategory[i].attendance);
          console.log(' AttendanceCategory[0].code', AttendanceCategory[0].code);
          if (ReasonCategory[i].attendance === AttendanceCategory[0].code) {
            reasonCode.push(ReasonCategory[i].reason_code);
            console.log('ReasonCategory[0].reason_code', ReasonCategory[i].reason_code);
            this.setState({reason: reasonCode[0]})

          }
        }

      })
      console.log('get the set state valeu attendance_config', this.state.attendance_config);

    });
  }
  componentWillUnmount = () => {
    // this.getTheData();
    navigator.geolocation.clearWatch(this.watchID);

  }

  _onPress() {

    let options = {
      title: 'Select Avatar',
      customButtons: [
        {
          name: 'fb',
          title: 'Choose Photo from Facebook'
        }
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {
          uri: response.uri
        };

        this.setState({avatarSource: source});
      }
    });
  }

  _onSubmit() {
    console.log("avatarSource", this.state.avatarSource);
    console.log("initialPosition", this.state.initialPosition);
    console.log("lastPosition", this.state.lastPosition);
    console.log("remarks text", this.state.remarks);
    console.log("attendance value", this.state.attendance);
    console.log("reason value", this.state.reason);
  }

  pickerPushData = () => {
    console.log('pickerPushData');
    if (this.state.attendance_config != undefined) {

      config = this.state.attendance_config.config_json;
      AttendanceCategory = config.configuration.attendance_category;
      let configLables = config.labels;
      console.log('configLables', configLables);
      for (let i = 0; i < configLables.length; i++) {
        if (configLables[i].component === "attendance_mark") {
          LabelName = configLables[i].component_label
          ReasonTitle = configLables[i].labels.category
          RemarksTitle = configLables[i].labels.remarks
          AttendanceType = configLables[i].labels.attendance_type
          submitText = configLables[i].labels.attendance_type
        }
      }

      ReasonCategory = config.configuration.attendance_reasons;
      console.log('AttendanceCategory', AttendanceCategory);
      console.log('attendance_config_file in', this.state.attendance_config);
      console.log('AttendanceCategory', AttendanceCategory);
      AttendancePickerItem = [];
      PresentPickerItem = [];
      OtherPickerItem = [];
      AbsentPickerItem = [];
      PresentItemReason = [];
      OtherItemReason = [];
      AbsentItemReason = [];

      if (AttendanceCategory != '') {
        for (let i = 0; i < AttendanceCategory.length; i++) {
          AttendancePickerItem.push(<Picker.Item key={i} label={AttendanceCategory[i].name} value={AttendanceCategory[i].code}/>);
        };
        console.log('AttendancePickerItem[0].code', AttendanceCategory[0].code)
        //this.setState({attendance:AttendanceCategory[0].code})
        console.log('AttendancePickerItem', AttendancePickerItem);
        for (let i = 0; i < ReasonCategory.length; i++) {
          if (ReasonCategory[i].attendance === 'A') {

            AbsentPickerItem.push(<Picker.Item key={i} label={ReasonCategory[i].reason_name} value={ReasonCategory[i].reason_code}/>);
            AbsentItemReason.push(ReasonCategory[i].reason_code);
          }
          if (ReasonCategory[i].attendance === 'P') {
            PresentPickerItem.push(<Picker.Item key={i} label={ReasonCategory[i].reason_name} value={ReasonCategory[i].reason_code}/>);
            PresentItemReason.push(ReasonCategory[i].reason_code)
          }
          if (ReasonCategory[i].attendance === 'O') {
            OtherPickerItem.push(<Picker.Item key={i} label={ReasonCategory[i].reason_name} value={ReasonCategory[i].reason_code}/>);
            OtherItemReason.push(ReasonCategory[i].reason_code)
          }
        }
      } else {
        console.log('else (this.state.attendance_config != undefined){', this.state.attendance_config);
      }

    }
  }

  reasonSet = () => {

    console.log('reason value', this.state.attendance);
    console.log('AttendanceCategory[0].code', AttendanceCategory[0].code);
    console.log('ReasonCategory[0].code', ReasonCategory.length);
    let reasonCode = []
    for (let i = 0; i < ReasonCategory.length; i++) {
      console.log('ReasonCategory[i].attendance', ReasonCategory[i].attendance);
      console.log(' AttendanceCategory[0].code', AttendanceCategory[0].code);
      if (ReasonCategory[i].attendance === this.state.attendance) {
        reasonCode.push(ReasonCategory[i].reason_code);
        console.log('ReasonCategory[0].reason_code', ReasonCategory[i].reason_code);
        this.setState({reason: reasonCode[0]})

      }
    }
  }

  render() {
    var height = Dimensions.get('screen').height;
    var width = Dimensions.get('window').width;
    var imageWidthSize = width * 0.9;
    var wheight = height * 0.7;
    let today = moment().format("DD MMM YYYY");
    console.log('attendance_config_file out', this.state.attendance_config);
    this.pickerPushData();

    return (
      <ScrollView>
        {this.state.attendance_config != undefined
          ? <View style={{
              backgroundColor: '#ffffff'
            }}>
              <View style={{
                height: 50,
                padding: 10,
                backgroundColor: '#eceff1'
              }}>

                <Text style={[styles.Posttitle]}>Today: {today}</Text>
              </View>
              <View style={{
                height: 50,
                padding: 10,
                backgroundColor: '#ffffff'
              }}>

                <Text style={[styles.Posttitle]}>{LabelName}</Text>
              </View>

              <View style={styles.dividerLine}></View>
              <View style={{
                height: 80,
                padding: 10,
                backgroundColor: '#ffffff'
              }}>

                <Picker itemStyle={{}} selectedValue={this.state.attendance} onValueChange={(value) => {
                  this.setState({
                    attendance: value
                  }, () => {
                    this.reasonSet()
                  })
                }}>
                  {AttendancePickerItem}
                </Picker>
                <View style={styles.attendanceDividerLine}></View>

              </View>

              {this.state.attendance === "A"
                ? <View style={{
                    height: 90,
                    padding: 10,
                    backgroundColor: '#ffffff'
                  }}>
                    <Text style={styles.Posttitle}>{ReasonTitle}</Text>

                    <Picker selectedValue={this.state.reason} onValueChange={(value) => this.setState({reason: value})}>
                      {AbsentPickerItem}
                    </Picker>
                    <View style={styles.attendanceDividerLine}></View>

                  </View>
                : undefined}

              {this.state.attendance === "P"
                ? <View style={{
                    height: 90,
                    padding: 10,
                    backgroundColor: '#ffffff'
                  }}>
                    <Text style={styles.Posttitle}>{ReasonTitle}</Text>

                    <Picker selectedValue={this.state.reason} onValueChange={(value) => this.setState({reason: value})}>
                      {PresentPickerItem}
                    </Picker>
                    <View style={styles.attendanceDividerLine}></View>

                  </View>
                : undefined}

              {this.state.attendance === "O"
                ? <View style={{
                    height: 90,
                    padding: 10,
                    backgroundColor: '#ffffff'
                  }}>
                    <Text style={styles.Posttitle}>{ReasonTitle}</Text>

                    <Picker selectedValue={this.state.reason} onValueChange={(value) => this.setState({reason: value})}>
                      {OtherPickerItem}
                    </Picker>
                    <View style={styles.attendanceDividerLine}></View>

                  </View>
                : undefined}
              {this.state.attendance === "A" || this.state.attendance === "O" || this.state.attendance === "P"
                ? <View style={{
                    height: 80,
                    padding: 10,
                    backgroundColor: '#ffffff'
                  }}>
                    <TextInput underlineColorAndroid="rgba(255,255,255,0.7)" placeholder="Add Remark" onChangeText={(remarks) => this.setState({remarks})} value={this.state.remarks}/>
                    <View style={styles.attendanceDividerLine}></View>
                  </View>
                : undefined}
              {this.state.attendance === "P"
                ? <View>

                    <View style={{
                      padding: 10,
                      backgroundColor: '#ffffff',
                      alignItems: 'center'
                    }}>
                      <TouchableOpacity onPress={this._onPress.bind(this)}>
                        <View style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between'
                        }}>
                          <Image source={this.state.avatarSource} style={{
                            height: 200,
                            width: 220
                          }} elevation={2}/>
                          <View style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            marginLeft: 10
                          }}>

                            <Icon name="md-camera" size={25} style={{
                              color: '#ab47bc'
                            }}/>
                          </View>
                        </View>
                        <View style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 10
                        }}>
                          <Text style={[styles.Timestamp]}>You need to take a selfie with the office building.</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                  </View>
                : undefined}

              <View style={{
                padding: 10,
                backgroundColor: '#ffffff'
              }}>
                <Button onPress={this._onSubmit.bind(this)} title="SUBMIT" color="#ab47bc" accessibilityLabel="Submit"/></View>
            </View>
          : <View style={{
            height: wheight,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text>Loding...</Text>
          </View>
}
      </ScrollView>

    )
  }
}
