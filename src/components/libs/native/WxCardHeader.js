import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    ToolbarAndroid,
    Text,
    TextInput,
    Button,
    View,
    Image,
    RefreshControl,
    WebView,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight,
    ToastAndroid,
    ScrollView,
    ListView
} from "react-native";
import BottomSheet from 'react-native-bottom-sheet';
import Icon from "react-native-vector-icons/Ionicons";
// import SplashScreen from "react-native-splash-screen";
// import SearchBox from "../../../components/libs/native/WxSearchHeader";
import WxBottomSheet from "../../../components/libs/native/WxBottomSheet";
 import imageConstant from "../../../components/libs/data/imageConstant";
// import WxVideo from "../../../components/libs/native/WxVideo";
import RNBottomSheet from 'react-native-bottom-sheet';
import WxBarChart from '../../../components/libs/native/WxBarChart';
import feedJson from "../../../components/libs/data/feed-Json";
import styles from '../../../styles';

export default class WxCardHeader extends React.Component {

    render() {
        var HeaderAvatar;
        if (this.props.header === "Quiz") {
            HeaderAvatar = (
                <Image source={imageConstant.quiz}
                       style={styles.headerImage}/>)
        }
        if (this.props.header === "Attendance") {
            HeaderAvatar = (
                <Image source={imageConstant.attendance}
                       style={styles.headerImage}/>)
        }

        if (this.props.header === "Training") {
            HeaderAvatar = (
                <Image source={imageConstant.training}
                       style={styles.headerImage}/>)
        }
        if (this.props.header === "Payroll") {

            HeaderAvatar = (
                <Image source={imageConstant.payroll}
                       style={styles.headerImage}/>)
        }
        return (
            <View style={styles.cardheader}>
                <View style={{
                    flexDirection : 'row',
                    alignItems    : 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom  : 5
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                        <View style={{marginHorizontal: 0}}>
                            {HeaderAvatar}
                        </View>

                        <Text style={{fontSize: 12, marginLeft: 7, color: this.props.headerColor}}>
                            {this.props.header}

                        </Text>
                        <View style={{
                            height         : 2,
                            marginLeft     : 5,
                            width          : 2,
                            marginTop      : 8,
                            borderRadius   : 2,
                            backgroundColor: 'rgba(0,0,0,0.6)'
                        }}/>
                        <Text style={styles.cardheader_subheader}>{this.props.subheader}</Text>
                    </View>
                    <WxBottomSheet/>
                  </View>
            </View>
        );
    }
}
