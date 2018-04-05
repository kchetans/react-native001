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
    TouchableOpacity,
    Image,
    ToastAndroid
} from "react-native";
import SearchBox from "../../components/libs/native/WxSearchHeader";
import LoginScreen from "../login/WxLogin";
import Icon from "react-native-vector-icons/Ionicons";
const styles = StyleSheet.create({
    settingsSection               : {
        marginHorizontal: 20,
        marginVertical  : 10,
        borderWidth     : 0.5,
        borderColor     : '#6c86ff'
    },
    settingsHeader                : {
        backgroundColor: '#6c86ff'
    },
    SettingsHeader_Text           : {
        paddingHorizontal: 10,
        paddingVertical  : 10,
        backgroundColor  : '#6c86ff',
        color            : 'white',
        //borderRadius: 4
    },
    settingsItem                  : {
        paddingHorizontal: 10,
        paddingVertical  : 8,
        borderBottomWidth: 1,
        borderColor      : '#6c86ff',
        flexDirection    : 'row',
        justifyContent   : 'space-between'
    },
    settingsItem_LeftIconContainer: {
        width: 20
    }
});

class SettingsSection extends React.Component {
    render() {
        return (
            <View style={styles.settingsSection}>
                {this.props.children}
            </View>
        );
    }
}

class SettingsHeader extends React.Component {
    render() {
        return (
            <View style={styles.SettingsHeader}>
                <Text style={styles.SettingsHeader_Text}>{this.props.title}</Text>
            </View>
        );
    }
}

//md-arrow-round-forward
class SettingsItem extends React.Component {
    onLogout() {
        ToastAndroid.show('responseJson', ToastAndroid.SHORT);

    }

    onPress() {
        ToastAndroid.show('responseJson', ToastAndroid.SHORT);

    }

    render() {

        onResultPressed = () => {
            this.props.navigation.navigate('LoginScreen');
            //ToastAndroid.show('check!', ToastAndroid.SHORT);

        };

        var show_arrow = false;
        var arrow_icon, left_icon;
        if (this.props.showNavArrow)
            show_arrow = this.props.showNavArrow;
        if (show_arrow)
            arrow_icon = <Icon name="md-arrow-dropright" size={15}/>
        if (this.props.icon_name)
            left_icon = <Icon name={this.props.icon_name} size={15}></Icon>
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.settingsItem}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.settingsItem_LeftIconContainer}>
                            {left_icon}
                        </View>
                        <Text>{this.props.title}</Text>
                    </View>
                    {arrow_icon}
                </View>
            </TouchableOpacity>
        );
    }
}

class SettingsTab extends React.Component {
    onResultPressed = () => {
        this.props.navigation.navigate('LoginScreen');
        ToastAndroid.show('check!', ToastAndroid.SHORT);

    };

    render() {
        return (
            <View>
                <SearchBox/>
                <ScrollView>

                    <SettingsSection>
                        <SettingsHeader title="Profile Settings"/>
                        <SettingsItem title="About Me" showNavArrow={true} icon_name="md-person"/>
                        <SettingsItem title="Education" showNavArrow={true} icon_name="md-school"/>
                        <SettingsItem title="Workex" icon_name="md-people"/>
                        <SettingsItem title="Documents" showNavArrow={true} icon_name="md-document"/>
                    </SettingsSection>

                    <SettingsSection>
                        <SettingsHeader title="Workex Settings"/>
                        <SettingsItem title="Notification Preference" showNavArrow={true} icon_name="md-notifications"/>
                        <SettingsItem title="Default Weekly Off"/>
                        <SettingsItem title="Logout" icon_name="md-power" onPress={this.onResultPressed}/>
                    </SettingsSection>

                </ScrollView>
            </View>
        );
    }
}

module.exports = SettingsTab;
