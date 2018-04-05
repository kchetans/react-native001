import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    ToolbarAndroid,
    Text,
    TextInput,
    Button,
    View,
    TouchableHighlight,
    Image,
    StatusBar,
    TouchableOpacity,
    ToastAndroid,
    ScrollView,
    ListView,
    Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SplashScreen from "react-native-splash-screen";
import SearchBox from "./components/libs/native/WxSearchHeader";
//import Modal from 'react-native-modal';
//import Video from 'react-native-video';
//import Video from 'react-native-video';
//var VideoPlayer = require('react-native-native-video-player');

const styles = StyleSheet.create({
    wrapper             : {
        paddingTop: 50,
        flex      : 1
    },
    modal               : {
        justifyContent: 'center',
        alignItems    : 'center'
    },
    modal4              : {
        flex           : 1,
        backgroundColor: 'white',
        borderRadius   : 6,
        flexDirection  : 'column',
        justifyContent : 'space-between',
        width          : Dimensions.get('window').width * 0.95,
        marginBottom   : 40,
        elevation      : 5
    },
    text                : {
        color   : "black",
        fontSize: 22
    },
    bottomModal         : {
        justifyContent: 'flex-end',
        margin        : 0,
    },
    cardWrapper         : {
        backgroundColor: '#ffffff',
        marginVertical : 3,
    },
    backgroundVideo     : {
        position: 'absolute',
        top     : 0,
        left    : 0,
        bottom  : 0,
        right   : 0,
    },
    cardheader          : {
        padding: 10
    },
    cardheader_header   : {
        fontSize  : 12,
        fontWeight: 'bold',
        color     : '#757575'
    },
    cardheader_subheader: {
        color     : '#9E9E9E',
        //padding:15,
        marginLeft: 10,
        fontStyle : 'italic',
        fontSize  : 12
    },
    cardContentWrapper  : {
        paddingHorizontal: 15,
        paddingTop       : 5,
        bottom           : 5
    },
    cardActionsWrapper  : {
        paddingVertical: 4,
        flexDirection  : 'row',
        alignItems     : 'center',
        justifyContent : 'space-around'
    },
    actionButton        : {
        color      : '#E3F2FD',
        flex       : 1,
        marginRight: 10
    },
    dividerLine         : {
        borderColor: '#e5e5e5',
        borderWidth: 0.5,
        //height:1
    },
    iconContainer       : {
        padding     : 15,
        borderWidth : 0.5,
        borderRadius: 30,
        height      : 40,
        borderColor : '#9E9E9E',
        marginRight : 10
    },
    header_icon         : {
        paddingVertical: 0
    }
});

class CardHeader extends React.Component {

    render() {
        return (
            <View>

                <View style={styles.cardheader}>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                            <View style={{marginHorizontal: 5}}>
                                <Image source={{uri: this.props.avatar}}
                                       style={{padding: 10, height: 18, width: 18}}/>
                            </View>
                            <Text style={styles.cardheader_header}>{this.props.header}.</Text>
                            <Text style={styles.cardheader_subheader}>{this.props.subheader}</Text>
                        </View>
                        <TouchableOpacity style={{margin: 10}}>
                            <Icon name="md-more" size={20} onPress={() => this.setState({visibleModal: 5})}/>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>

        );
    }
}

class CardActions extends React.Component {
    render() {
        return (
            <View style={styles.cardActionsWrapper}>
                {this.props.children}
            </View>);
    }
}

class CardContent extends React.Component {
    render() {
        return (
            <View style={styles.cardContentWrapper}>
                {this.props.children}
            </View>
        );
    }
}

class CardDivider extends React.Component {
    render() {
        return (
            <View style={styles.dividerLine}>
            </View>
        )
    }
}

class Card extends React.Component {
    onActionPressed() {
        ToastAndroid.show("click", ToastAndroid.SHORT);

        //  this.props.navigation.navigate(this.props.data.navigate)
    }

    render() {
        var _data = this.props.data;
        var _cardHeader, _cardActions;
        var _cardContent;
        if (_data.header) {
            _cardHeader =
                <CardHeader avatar={_data.header.avatar} header={_data.header.title} subheader={_data.header.subtitle}/>
        }

        if (_data.actions) {
            var actionlength = _data.actions.length;
            if (actionlength === 3) {
                _cardActions = (
                    <CardActions style={styles.cardActionsWrapper}>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                            <View style={{marginHorizontal: 10, marginTop: 7}}>
                                {_data.actions[0].icon ? <Icon name={_data.actions[0].icon} size={15}
                                                               style={styles.header_icon}/> : undefined}
                            </View>
                            <View>
                                <Text style={{color: '#1E88E5', fontSize: 15, paddingVertical: 5}}>
                                    {_data.actions[0].actiontext}
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                            <View style={{marginHorizontal: 10, marginTop: 7}}>
                                <Icon name={_data.actions[1].icon} size={15} style={styles.header_icon}/>
                            </View>
                            <View>
                                <Text style={{color: '#1E88E5', fontSize: 15, paddingVertical: 5}}>
                                    {_data.actions[1].actiontext}
                                </Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                            <View style={{marginHorizontal: 10, marginTop: 7}}>
                                <Icon name={_data.actions[2].icon} size={15} style={styles.header_icon}/>
                            </View>
                            <View>
                                <Text style={{color: '#1E88E5', fontSize: 15, paddingVertical: 5}}>
                                    {_data.actions[2].actiontext}
                                </Text>
                            </View>
                        </View>

                    </CardActions>);
            }
            if (actionlength === 2) {
                _cardActions = (
                    <CardActions style={styles.cardActionsWrapper}>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                            {_data.actions[0].icon ? <View style={{marginHorizontal: 10, marginTop: 7}}>
                                <Icon name={_data.actions[0].icon} size={15} style={styles.header_icon}/>
                            </View> : undefined}
                            {_data.actions[0].actiontext ? <View>
                                <Text style={{color: '#1E88E5', fontSize: 15, paddingVertical: 5}}>
                                    {_data.actions[0].actiontext}
                                </Text>
                            </View> : undefined}
                            {_data.actions[0].count ? <View>
                                <TouchableOpacity>
                                    <Text style={{color: '#1E88E5', fontSize: 15, paddingVertical: 5}}>
                                        {_data.actions[0].count} people congratulated
                                    </Text>
                                </TouchableOpacity>
                            </View> : undefined}
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                            {_data.actions[1].icon ? <View style={{marginHorizontal: 10, marginTop: 7}}>
                                <Icon name={_data.actions[1].icon} size={15} style={styles.header_icon}/>
                            </View> : undefined}
                            {_data.actions[1].actiontext ? <View>
                                <TouchableOpacity>
                                    <Text style={{color: '#1E88E5', fontSize: 15, paddingVertical: 5}}>
                                        {_data.actions[1].actiontext}
                                    </Text>
                                </TouchableOpacity>
                            </View> : undefined}
                            {_data.actions[1].count ? <View>
                                <TouchableOpacity>
                                    <Text style={{color: '#1E88E5', fontSize: 15, paddingVertical: 5}}>
                                        {_data.actions[1].count} people congratulated
                                    </Text>
                                </TouchableOpacity>

                            </View> : undefined}
                        </View>

                    </CardActions>);
            }
            if (actionlength === 1) {
                _cardActions = (
                    <CardActions style={styles.cardActionsWrapper}>
                        <View style={{flexDirection: 'row', marginLeft: 200}}>
                            {_data.actions[0].icon ? <View style={{marginHorizontal: 10, marginTop: 7} }>
                                <Icon name={_data.actions[0].icon} size={15} style={styles.header_icon}/>
                            </View> : undefined}
                            <TouchableOpacity onPress={() => this.onActionPressed()}>
                                <Text style={{color: '#1E88E5', fontSize: 15,}}>
                                    {_data.actions[0].actiontext}
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </CardActions>);
            }
        }
        if (_data.content) {
            if (_data.type === "quiz") {
                _cardContent = (<CardContent>
                    <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
                        {_data.content.url ? <Image source={{uri: _data.content.url}}
                                                    style={{padding: 30, margin: 5}}/> : undefined}
                        <View style={{flexDirection: "column", justifyContent: "flex-start"}}>
                            <Text
                                style={{fontSize: 18, marginBottom: 5, fontWeight: "bold"}}>{_data.content.text}</Text>
                            <Text>{_data.content.subtext}</Text>
                        </View>
                    </View>


                </CardContent>);
            }
            if (_data.type === "attendence") {
                _cardContent = (<CardContent>
                    <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
                        {_data.content.url ? <Image source={{uri: _data.content.url}}
                                                    style={{padding: 30, margin: 5}}/> : undefined}
                        <View style={{flexDirection: "column", justifyContent: "flex-start"}}>
                            <Text
                                style={{fontSize: 18, marginBottom: 5, fontWeight: "bold"}}>{_data.content.text}</Text>
                            <Text>{_data.content.subtext}</Text>
                        </View>
                    </View>

                </CardContent>);
            }
            if (_data.type === "payroll") {
                _cardContent = (<CardContent>
                    <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
                        {_data.content.url ? <Image source={{uri: _data.content.url}}
                                                    style={{padding: 30, margin: 5}}/> : undefined}
                        <View style={{flexDirection: "column", justifyContent: "flex-start"}}>
                            <Text
                                style={{fontSize: 18, marginBottom: 5, fontWeight: "bold"}}>{_data.content.text}</Text>
                            <Text>{_data.content.subtext}</Text>
                        </View>
                    </View>

                </CardContent>);
            }
            if (_data.type === "training") {
                _cardContent = (<CardContent>
                    <Text style={{fontSize: 15, marginBottom: 5, fontWeight: "bold"}}>{_data.content.text}</Text>
                    {_data.content.imageurl ?
                        <Image source={{uri: _data.content.imageurl}} style={{padding: 120}}/> : undefined}
                    {_data.content.videourl ? <Video source={{
                        uri : 'http:www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube?as=fmp4_audio_clear,fmp4_sd_hd_clear&sparams=ip,ipbits,expire,source,id,as&ip=0.0.0.0&ipbits=0&expire=19000000000&signature=51AF5F39AB0CEC3E5497CD9C900EBFEAECCCB5C7.8506521BFC350652163895D4C26DEE124209AA9E&key=ik0',
                        type: 'mpd'
                    }}
                                                     rate={1.0}
                                                     volume={1.0}
                                                     muted={false}
                                                     paused={false}
                                                     resizeMode="cover"
                                                     repeat={true}
                                                     onLoadStart={this.loadStart}
                                                     onLoad={this.setDuration}
                                                     onProgress={this.setTime}
                                                     onEnd={this.onEnd}
                                                     onError={this.videoError}
                                                     style={styles.backgroundVideo}/> : undefined}
                    <Text style={{fontSize: 12, marginBottom: 5, marginTop: 5}}>{_data.content.subtext}</Text>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <TouchableOpacity>
                                {_data.content.likecount ?
                                    <Text style={{fontSize: 10, marginBottom: 5}}>you + {_data.content.likecount}
                                        others</Text> : undefined}
                            </TouchableOpacity>

                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <View>
                                <TouchableOpacity>
                                    {_data.content.commentcount ?
                                        <Text style={{fontSize: 10, marginBottom: 5}}>  {_data.content.commentcount}
                                            comments</Text> : undefined}
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    {_data.content.sharecount ?
                                        <Text style={{fontSize: 10, marginBottom: 5}}>  {_data.content.sharecount}
                                            shares</Text> : undefined}
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <CardDivider/>
                </CardContent>);
            }
            if (_data.type === "video") {
                _cardContent = (<CardContent>

                    <Text>{_data.content.text}</Text>
                </CardContent>);
            }
        }

        return (

            <View style={styles.cardWrapper} elevation={2}>
                {_cardHeader}
                {_cardContent}
                {_cardActions}
            </View>

        );
    }
}


class Feed extends React.Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        data = [{
            type   : "quiz",
            header : {
                title   : "Quiz",
                subtitle: "2 hours ago",
                avatar  : "https://static1.squarespace.com/static/52d07668e4b0b335d4dfb080/t/53165894e4b078aab7f3a38b/1393973402106/th.png",
            },
            actions: [{
                //  icon:"md-thumbs-up",
                actiontext: "Take the quiz"
            },
            ],
            content: {
                text   : "New quiz for you",
                subtext: "please take this quiz to get qualified for your incentives",
            }
        }, {
            type   : "quiz",
            header : {
                title   : "Quiz",
                subtitle: "2 hours ago",
                avatar  : "https://static1.squarespace.com/static/52d07668e4b0b335d4dfb080/t/53165894e4b078aab7f3a38b/1393973402106/th.png",
            },
            actions: [
                {
                    icon : "md-thumbs-up",
                    count: "30"
                    //   //actiontext:"Take the quiz"
                }, {
                    //  icon:"md-thumbs-up",
                    actiontext: "Take the quiz"
                },


            ],
            content: {
                url    : "http://www.math.uni-frankfurt.de/~person/_4170854.jpg",
                text   : "New quiz for you",
                subtext: "please take this quiz to get qualified for your incentives",
            }
        }, {
            type   : "attendence",
            header : {
                title   : "Attendence",
                subtitle: "2 hours ago",
                avatar  : "http://wfarm2.dataknet.com/static/resources/icons/set87/fb5b958f.png",
            },
            actions: [{
                //  icon:"md-thumbs-up",
                actiontext: "Take the quiz"
            },
            ],
            content: {
                text   : "New quiz for you",
                subtext: "please take this quiz to get qualified for your incentives",
            }
        }, {
            type   : "payroll",
            header : {
                title   : "Payroll",
                subtitle: "2 hours ago",
                avatar  : "http://itseasipayroll.com/images/calculators/icon-tax.png",
            },
            actions: [{
                //  icon:"md-thumbs-up",
                actiontext: "Take the quiz"
            },
            ],
            content: {
                text   : "New quiz for you",
                subtext: "please take this quiz to get qualified for your incentives",
            }
        },
            {
                type   : "training",
                header : {
                    title   : "Training",
                    subtitle: "5 hours ago",
                    avatar  : "https://stratisems.com/wp-content/uploads/2016/10/Training-Icon.png",
                },
                actions: [{
                    icon      : "md-thumbs-up",
                    actiontext: "Like",

                },
                    {
                        icon      : "md-chatboxes",
                        actiontext: "Comment"
                    },
                    {
                        icon      : "md-share",
                        actiontext: "Share"
                    }
                ],
                content: {
                    imageurl    : "https://www.w3schools.com/css/img_fjords.jpg",
                    //  videourl:"https://youtu.be/8LVN7WVgx0c",
                    text        : "Checkout this image",
                    subtext     : "please take this quiz to get qualified for your incentives",
                    likecount   : "2",
                    likeapi     : "",
                    commentcount: "2",
                    commentapi  : "",
                    sharecount  : "2",
                    shareapi    : ""
                }


            },
            {
                type   : "quiz",
                header : {
                    title   : "Quiz",
                    subtitle: "2 hours ago",
                    avatar  : "https://static1.squarespace.com/static/52d07668e4b0b335d4dfb080/t/53165894e4b078aab7f3a38b/1393973402106/th.png",
                },
                actions: [
                    {
                        icon : "md-thumbs-up",
                        count: "30"
                        //   //actiontext:"Take the quiz"
                    }, {
                        //  icon:"md-thumbs-up",
                        actiontext: "Take the quiz"
                    },


                ],
                content: {
                    url    : "http://www.material-ui.com/images/uxceo-128.jpg",
                    text   : "New quiz for you",
                    subtext: "please take this quiz to get qualified for your incentives",
                }
            },

        ],
            this.state = {
                dataSource  : ds.cloneWithRows(data),
                isOpen      : false,
                isDisabled  : false,
                swipeToClose: true,
                sliderValue : 0.3

            }
    }

    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    }

    render() {

        return (
            <View>
                <SearchBox/>
                <ScrollView style={{marginBottom: 50}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData, rowID) => <Card key={rowID} data={rowData}/>}
                    />
                </ScrollView>
            </View>
        );
    }
}

module.exports = Feed;
