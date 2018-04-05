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
    ListView,
    ToastAndroid,
    ScrollView,
    TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


class ScrollElement extends React.Component {
    render() {

        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{
                    height         : 100, width: 100, marginRight: 20, padding: 10,
                    backgroundColor: '#FFCC80', borderRadius: 15,
                    justifyContent : "center"
                }}>
                    <View style={{justifyContent: "center", flexDirection: 'row'}}>
                        <Icon name={this.props.nav.icon_name}
                              size={50}></Icon>
                    </View>
                    <View style={{justifyContent: "center", flexDirection: 'row'}}>
                        <Text style={{fontSize: 10, marginTop: 5, textAlign: "center"}}>{this.props.nav.label}</Text>
                    </View>
                </View>
            </TouchableOpacity>);
    }
}

class MenuElement extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{
                    height         : 80, width: 80, marginRight: 20, padding: 10,
                    backgroundColor: '#B3E5FC', borderRadius: 15, marginBottom: 20,
                    justifyContent : "center"
                }}>
                    <View style={{justifyContent: "center", flexDirection: 'row', marginTop: 5}}>
                        <Icon name={this.props.nav.icon_name}
                              size={35}></Icon>
                    </View>
                    <View style={{justifyContent: "center", flexDirection: 'row'}}>
                        <Text
                            style={{fontSize: 10, marginTop: 5, textAlign: 'center'}}
                        >{this.props.nav.label}</Text>
                    </View>
                </View>
            </TouchableOpacity>);
    }
}

class ActionsTab extends React.Component {
    constructor(props) {
        super(props);
        const ds   = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{
                'icon_name': 'md-walk',
                'label'    : 'Leave Attendance',
                'nav'      : 'LeaveNav'
            }, {'icon_name': 'md-outlet', 'label': 'View Attendance'}, {
                'icon_name': 'md-open',
                'label'    : 'Leave Attendance'
            }, {'icon_name': 'md-walk', 'label': 'Mark Attendance'}])
        };
    }

    render() {
        return (
            <View style={{padding: 15}}>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>Quick Actions</Text>
                <ScrollView style={{backgroundColor: '#FAFAFA', padding: 10}}
                            horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <ListView
                            horizontal={true}
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) => <ScrollElement
                                nav={{icon_name: rowData.icon_name, label: rowData.label}}
                                onPress={() => this.props.navigation.navigate(rowData.nav)}
                            />
                            }
                        />
                    </View>
                </ScrollView>
                <Text style={{fontWeight: 'bold', fontSize: 12, marginTop: 10, marginBottom: 10}}>All Actions</Text>
                <ScrollView style={{height: 300, paddingLeft: 20}} showsVerticalScrollIndicator={false}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <MenuElement nav={{icon_name: 'md-walk', label: 'Mark Attendance'}}
                                     onPress={() => this.props.navigation.navigate('AttendenceNav')}/>
                        <MenuElement nav={{icon_name: 'md-outlet', label: 'View Attendance'}}/>
                        <MenuElement nav={{icon_name: 'md-open', label: 'View Attendance'}}/>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <MenuElement nav={{icon_name: 'md-walk', label: 'Mark Attendance'}}/>
                        <MenuElement nav={{icon_name: 'md-list', label: 'View Attendance'}}/>
                        <MenuElement nav={{icon_name: 'md-list', label: 'View Attendance'}}/>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <MenuElement nav={{icon_name: 'md-walk', label: 'Mark Attendance'}}/>
                        <MenuElement nav={{icon_name: 'md-list', label: 'View Attendance'}}/>
                        <MenuElement nav={{icon_name: 'md-list', label: 'View Attendance'}}/>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <MenuElement nav={{icon_name: 'md-walk', label: 'Mark Attendance'}}/>
                        <MenuElement nav={{icon_name: 'md-list', label: 'View Attendance'}}/>
                        <MenuElement nav={{icon_name: 'md-list', label: 'View Attendance'}}/>
                    </View>

                </ScrollView>

            </View>

        );
    }
}


//module.exports = ActionsTab;
