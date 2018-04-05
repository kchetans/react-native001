import React, {components} from "react";
import {Text, View, StyleSheet, ListView, TouchableOpacity, Image, ScrollView} from "react-native";
import SearchBox from "../../components/libs/native/WxSearchHeader";
import HeaderTitle from "../../components/libs/native/WxHeaderTitle";
import TimeStamp from "../../components/libs/native/WxTimeStamp";
import Icon from "react-native-vector-icons/Ionicons";
import {Col, Row, Grid} from "react-native-easy-grid";

export default class ChatTab extends React.Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        data = [{
            avatar            : 'http://www.math.uni-frankfurt.de/~person/_4170854.jpg',
            boxbackcolor      : '#ffffff',
            name              : 'Ramesh and 4 others congratulated on your achievement in quiz.',
            name_color        : 'rgba(0,0,0,0.5)',
            Notification_count: '3',
            time_stamp        : '13 mins',
            icon_name         : 'md-flash',
            icon_color        : '#ef5350',
        },
            {
                avatar            : 'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
                boxbackcolor      : '#ffffff',
                name              : 'Your attendance is pending for today.',
                name_color        : 'rgba(0,0,0,0.5)',
                Notification_count: '3',
                time_stamp        : '13 mins',
                icon_name         : 'md-happy',
                icon_color        : '#66bb6a',
            },
            {
                avatar            : 'http://designyatra.com/wp-content/uploads/2013/01/sathiah.jpg',
                boxbackcolor      : '#f1f2ff',
                name              : 'Sulekha [HR] has asked you to upload your aadhar card. ',
                name_color        : 'rgba(0,0,0,0.5)',
                Notification_count: '3',
                time_stamp        : '13 mins',
                icon_name         : 'md-thumbs-up',
                icon_color        : '#6c86ff',
            },
            {
                avatar            : 'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
                boxbackcolor      : '#f1f2ff',
                name              : 'Ramesh and 4 others congratulated on your achievement in quiz.',
                name_color        : 'rgba(0,0,0,0.5)',
                Notification_count: '3',
                time_stamp        : '13 mins',
                icon_name         : 'md-thumbs-up',
                icon_color        : '#6c86ff',
            },
            {
                avatar            : 'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
                boxbackcolor      : '#f1f2ff',
                name              : 'Ramesh and 4 others congratulated on your achievement in quiz.',
                name_color        : 'rgba(0,0,0,0.5)',
                Notification_count: '3',
                time_stamp        : '13 mins',
                icon_name         : 'md-thumbs-up',
                icon_color        : '#6c86ff',
            },
            {
                avatar            : 'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
                boxbackcolor      : '#f1f2ff',
                name              : 'Ramesh and 4 others congratulated on your achievement in quiz.',
                name_color        : 'rgba(0,0,0,0.5)',
                Notification_count: '3',
                time_stamp        : '13 mins',
                icon_name         : 'md-thumbs-up',
                icon_color        : '#6c86ff',
            },
            {
                avatar            : 'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
                boxbackcolor      : '#f1f2ff',
                name              : 'Ramesh and 4 others congratulated on your achievement in quiz.',
                name_color        : 'rgba(0,0,0,0.5)',
                Notification_count: '3',
                time_stamp        : '13 mins',
                icon_name         : 'md-thumbs-up',
                icon_color        : '#6c86ff',
            },
            {
                avatar            : 'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
                boxbackcolor      : '#f1f2ff',
                name              : 'Ramesh and 4 others congratulated on your achievement in quiz.',
                name_color        : 'rgba(0,0,0,0.5)',
                Notification_count: '3',
                time_stamp        : '13 mins',
                icon_name         : 'md-thumbs-up',
                icon_color        : '#6c86ff',
            },
            {
                avatar            : 'http://images.indianexpress.com/2016/06/raj-kapoor-759.jpg',
                boxbackcolor      : '#ffffff',
                name              : 'Ramesh and 4 others congratulated on your achievement in quiz.',
                name_color        : 'rgba(0,0,0,0.5)',
                Notification_count: '3',
                time_stamp        : '13 mins',
                icon_name         : 'md-thumbs-up',
                icon_color        : '#6c86ff',
            },

        ],

            this.state = {
                dataSource: ds.cloneWithRows(data),
            }
    }

    render() {
        return (
            <View>
                <View>
                    <SearchBox/>
                    <ScrollView style={{marginBottom: 100}}>
                        <ListView
                          enableEmptySections={true}
                            dataSource={this.state.dataSource}
                            renderRow={(rowData, rowID) =>
                                <TouchableOpacity>
                                    <Content key={rowID} data={rowData}/>
                                </TouchableOpacity>
                            }/>
                    </ScrollView>

                </View>
            </View>
        )
    }
}


class Content extends React.Component {
    render() {
        return (


            <Grid style={{backgroundColor: this.props.data.boxbackcolor}}>
                <Col style={{width: 60,}}>
                    <View style={{margin: 9}}>
                        <Image source={{uri: this.props.data.avatar}} style={styles.headerImage}/>
                    </View>
                </Col>
                <Col style={{}}>
                    <Row>
                        <View style={{margin: 8}}><HeaderTitle metadata={this.props.data}/></View>
                    </Row>
                    <Row style={{alignItems: 'center', marginBottom: 3}}>
                        <View style={{
                            alignItems     : 'center',
                            marginLeft     : 7,
                            marginTop      : 3,
                            padding        : 1,
                            height         : 15,
                            width          : 15,
                            borderRadius   : 15,
                            backgroundColor: this.props.data.icon_color
                        }}>
                            <Icon name={this.props.data.icon_name} size={12} style={{color: "#ffffff"}}/>
                        </View>
                        <View style={{marginLeft: 7}}><TimeStamp metadata={this.props.data}/></View>

                    </Row>
                    <View style={styles.dividerLine}>
                    </View>
                </Col>
            </Grid>


        )
    }
}
const styles = StyleSheet.create({
    dividerLine     : {
        borderColor: '#e5e5e5',
        borderWidth: 5.5,
        height     : 5
    },
    Supertitle      : {
        fontSize: 19.95,

    },
    subTitle        : {
        color     : 'rgba(0,0,0,0.5)',
        fontSize  : 10,
        marginLeft: 7
    },
    Notification    : {
        color   : '#ffffff',
        fontSize: 10,

    },
    Posttitle       : {
        color            : '#4a4a4a',
        fontSize         : 16.05,
        marginBottom     : 5,
        paddingLeft      : 1,
        paddingHorizontal: 15,


    },
    headerImage     : {
        height: 40,
        width : 40
    },
    Timestamp       : {
        fontSize: 8.00,
    },
    Source          : {
        fontSize: 12.00,
        padding : 3,
        color   : 'rgba(74,74,74,0.6)'
    },
    Action          : {
        fontSize  : 13.95,
        color     : '#6c86ff',
        fontWeight: 'bold'
    },
    liked           : {
        fontSize       : 10.95,
        color          : 'rgba(74,74,74,0.6)',
        paddingVertical: 5,
        marginLeft     : 4
    },
    LikeCommentShare: {
        color          : '#6c86ff',
        fontSize       : 13.05,
        paddingVertical: 5
    },
    content         : {
        fontSize: 12,
    },
    contentbox      : {
        flexDirection    : "column",
        justifyContent   : "flex-start",
        paddingHorizontal: 15,
    },
    cardWrapper     : {
        backgroundColor: '#ffffff',
        padding        : 5,
        marginBottom   : 5,
        flexDirection  : 'row',
    },
    backgroundVideo : {
        position: 'absolute',
        top     : 0,
        left    : 0,
        bottom  : 0,
        right   : 0,
    },
    cardheader      : {
        padding: 5
    },

    cardheader_subheader   : {
        color     : 'rgba(74,74,74,0.6)',
        //padding:15,
        marginLeft: 8,
        //fontStyle:'italic',
        fontSize  : 12,
    },
    cardContentWrapper     : {
        paddingHorizontal: 15,
        paddingTop       : 0,
        bottom           : 5
    },
    cardActionsWrapperRight: {
        justifyContent: 'flex-end',
    },
    cardActionsWrapper     : {
        //paddingVertical: 8,
        flexDirection : 'row',
        alignItems    : 'center',
        marginLeft    : 5,
        marginRight   : 10,
        justifyContent: 'space-between'
    },
    actionButton           : {
        color      : '#E3F2FD',
        flex       : 1,
        marginRight: 10
    },
    dividerLine            : {
        borderColor: 'rgba(151,151,151,0.3)',
        borderWidth: 0.5,
        marginTop  : 7,
        height     : 1
    },
    iconContainer          : {
        padding     : 15,
        borderWidth : 0.5,
        borderRadius: 30,
        height      : 40,
        borderColor : '#9E9E9E',
        marginRight : 10
    },
    header_icon            : {
        paddingVertical: 0,
        color          : '#6c86ff'
    }
});
