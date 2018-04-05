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
import SplashScreen from "react-native-splash-screen";
import SearchBox from "../../../components/libs/native/WxSearchHeader";
import WxBottomSheet from "../../../components/libs/native/WxBottomSheet";
import WxCardHeader from  "../../../components/libs/native/WxCardHeader";
import imageConstant from "../../../components/libs/data/imageConstant";
import WxVideo from "../../../components/libs/native/WxVideo";
import RNBottomSheet from 'react-native-bottom-sheet';
import WxBarChart from '../../../components/libs/native/WxBarChart';
import WxImage from '../../../components/libs/native/WxImage';
import feedJson from "../../../components/libs/data/feed-Json";
import styles from '../../../styles';


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
    state = {
        visible: true
    };

    onActionPressed(data) {
        if (data.actiontype === 'page') {
            this.props.navigation.navigate(data.actionevent);

        }
        if (data.actiontype === 'api') {
            ToastAndroid.show('else', ToastAndroid.SHORT);
        }
        if (data.actiontype === 'share'){
                shareData = data.shareContent;
                BottomSheet.showShareBottomSheetWithOptions({
                  url: 'app.workex.in',
                  subject: 'hello',
                  message: shareData,
                }, (value) => {
                  alert(value);
                }, (resultcode, path) => {
                  alert(resultcode);
                  alert(path);
                })
              }
    }

    render() {
        let _data = this.props.data;
        let _cardHeader, _cardActions;
        let _cardContent;
        if (_data.header) {
            _cardHeader = <WxCardHeader headerColor={_data.header.headerColor} avatar={_data.header.avatar}
                                      header={_data.header.title} subheader={_data.header.subtitle}/>
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
                            <TouchableOpacity onPress={() => this.onActionPressed(_data.actions[0])}>
                                <Text style={{
                                    color          : _data.actions[0].actioncolor,
                                    fontSize       : 13.05,
                                    fontWeight     : "bold",
                                    paddingVertical: 5
                                }}>
                                    {_data.actions[0].actiontext}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                            <View style={{marginHorizontal: 10, marginTop: 7}}>
                                {_data.actions[1].icon ? <Icon name={_data.actions[1].icon} size={15}
                                                               style={styles.header_icon}/> : undefined}
                            </View>
                            <TouchableOpacity onPress={() => this.onActionPressed(_data.actions[1])}>
                                <Text style={{
                                    color          : _data.actions[1].actioncolor,
                                    fontSize       : 13.05,
                                    fontWeight     : "bold",
                                    paddingVertical: 5
                                }}>
                                    {_data.actions[1].actiontext}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                            <View style={{marginHorizontal: 10, marginTop: 7}}>
                                {_data.actions[2].icon ? <Icon name={_data.actions[2].icon} size={15}
                                                               style={styles.header_icon}/> : undefined}
                            </View>
                            <TouchableOpacity onPress={() => this.onActionPressed(_data.actions[2])}>
                                <Text style={{
                                    color          : _data.actions[2].actioncolor,
                                    fontSize       : 13.05,
                                    fontWeight     : "bold",
                                    paddingVertical: 5
                                }}>
                                    {_data.actions[2].actiontext}
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </CardActions>);
            }
            if (actionlength === 2) {
                _cardActions = (
                    <CardActions style={styles.cardActionsWrapper}>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginBottom: 9}}>
                            {_data.actions[0].icon ? <View style={{marginHorizontal: 10, marginTop: 7,}}>
                                <Icon name={_data.actions[0].icon} size={15} style={{color: '#ff9800'}}/>
                            </View> : undefined}
                            {_data.actions[0].actiontext ? <View>
                                <TouchableOpacity onPress={() => this.onActionPressed(_data.actions[1])}>
                                    <Text style={{
                                        color     : _data.actions[0].actioncolor,
                                        fontSize  : 13.95,
                                        fontWeight: 'bold',
                                        marginLeft: 7
                                    }}>
                                        {_data.actions[0].actiontext}

                                    </Text></TouchableOpacity>
                            </View> : undefined}
                            {_data.actions[0].count ? <View>
                                <TouchableOpacity onPress={() => this.onActionPressed(_data.actions[0])}>
                                    <Text style={styles.liked}>
                                        {_data.actions[0].count} people congratulated
                                    </Text>
                                </TouchableOpacity>
                            </View> : undefined}
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginBottom: 9}}>
                            {_data.actions[1].icon ? <View style={{marginHorizontal: 10, marginTop: 7}}>
                                <Icon name={_data.actions[1].icon} size={15} style={styles.header_icon}/>
                            </View> : undefined}
                            {_data.actions[1].actiontext ? <View>
                                <TouchableOpacity onPress={() => this.onActionPressed(_data.actions[1])}>
                                    <Text style={{
                                        fontSize  : 13.95,
                                        color     : _data.actions[1].actioncolor,
                                        fontWeight: 'bold'
                                    }}>
                                        {_data.actions[1].actiontext}
                                    </Text>
                                </TouchableOpacity>
                            </View> : undefined}
                            {_data.actions[1].count ? <View>
                                <TouchableOpacity>
                                    <Text style={styles.liked}>
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
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 9}}>
                            {_data.actions[0].icon ? <View style={{marginRight: 5, marginTop: 7} }>
                                <Icon name={_data.actions[0].icon} size={15} style={styles.header_icon}/>
                            </View> : undefined}
                            <TouchableOpacity onPress={() => this.onActionPressed(this.props.data)}>
                                <Text style={styles.Action}>
                                    {_data.actions[0].actiontext}
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </CardActions>);
            }
        }
        if (_data.content) {
            if (_data.type === "quiz" || _data.type === "attendence" || _data.type === "payroll") {
                _cardContent = (<CardContent>
                    <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
                        {_data.content.url ? <Image source={{uri: _data.content.url}} style={{height: 51, width: 51, margin: 1}}/>
                      : undefined}
                        {_data.content.url ? <View
                            style={{flexDirection: "column", justifyContent: "flex-start", paddingHorizontal: 15}}>
                            {_data.content.text ?
                                <Text style={styles.Posttitle}>{_data.content.text}</Text> : undefined}
                            {_data.content.subtext ?
                                <Text style={styles.Source}>{_data.content.subtext}</Text> : undefined}
                        </View> :
                            <View style={{flexDirection: "column", justifyContent: "flex-start", marginRight: 20}}>
                                {_data.content.text ?
                                    <Text style={styles.Posttitle}>{_data.content.text}</Text> : undefined}
                                {_data.content.subtext ?
                                    <Text style={styles.Source}>{_data.content.subtext}</Text> : undefined}
                            </View>
                        }
                    </View>


                </CardContent>);
            }
            if (_data.type === "training") {
                _cardContent = (<CardContent>
                    <Text style={styles.Posttitle}>{_data.content.text}</Text>
                    {_data.content.imageurl ?
                        <View Style={{padding: 5}}><Image source={{uri: _data.content.imageurl}} style={{height: 180}}/></View> : undefined}
                    {_data.content.videourl ?<View Style={{padding: 5}}><WxVideo metadata={_data.content}/></View>: undefined}
                    {_data.content.data ?<View Style={{padding: 5}}><WxBarChart metadata={_data.content}/></View>: undefined}
                    <Text style={{fontSize: 12, marginBottom: 5, marginTop: 5}}>{_data.content.subtext}</Text>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <View style={{
                                alignItems     : 'center',
                                marginLeft     : 0,
                                marginTop      : 7,
                                padding        : 1,
                                height         : 12,
                                width          : 12,
                                borderRadius   : 12,
                                backgroundColor: '#6c86ff'
                            }}>
                                <Icon name="md-thumbs-up" size={9} style={{color: "#ffffff"}}/>
                            </View>
                            <TouchableOpacity>

                                {_data.content.likecount ? <Text style={styles.liked}>You + {_data.content.likecount}
                                    Others</Text> : undefined}
                            </TouchableOpacity>

                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <View>
                                <TouchableOpacity>
                                    {_data.content.commentcount ?
                                        <Text style={styles.liked}>  {_data.content.commentcount}
                                            comments,</Text> : undefined}
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    {_data.content.sharecount ? <Text style={styles.liked}>  {_data.content.sharecount}
                                        shares</Text> : undefined}
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <CardDivider/>
                </CardContent>);
            }
        }

        if (this.state.visible)
            return (
                <View style={styles.cardWrapper} elevation={2}>
                    {_cardHeader}
                    {_cardContent}
                    {_cardActions}
                </View>

            );
        else
            return (
                <View> </View>
            );
    }
}


class Feed extends React.Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        data = feedJson;
        this.state = {
                dataSource: ds.cloneWithRows(data),
                isRefreshing: false,

            }
    }

    componentDidMount() {
        SplashScreen.hide();
    }
    // _onRefresh = () => {
    //   this.setState({isRefreshing: true});
    //   setTimeout(() => {
    //     // prepend 10 items
    //     const rowData = Array.from(new Array(10))
    //     .map((val, i) => ({
    //       text: 'Loaded row ' + (+this.state.loaded + i),
    //       clicks: 0,
    //     }))
    //     .concat(this.state.rowData);
    //
    //     this.setState({
    //       loaded: this.state.loaded + 10,
    //       isRefreshing: false,
    //       rowData: rowData,
    //     });
    //   }, 5000);
    // };
    //

    _onRefresh = () => {
      this.setState({isRefreshing: true});
      setTimeout(() => {
        // prepend 10 items
        const rowData = Array.from(new Array(10))
        .map((val, i) => ({
          text: 'Loaded row ' + (+this.state.loaded + i),
          clicks: 0,
        }))
        .concat(this.state.rowData);

        this.setState({
          loaded: this.state.loaded + 10,
          isRefreshing: false,
          rowData: rowData,
        });
      }, 5000);
    };



    render() {


        return (
            <View>
                <SearchBox/>

                <ScrollView style={{marginBottom: 50}}
                  refreshControl={
                      <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#ffffff']}
                        progressBackgroundColor="#6c86ff"
                      />
                    }>

                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData, rowID) => <Card key={rowID} data={rowData} navigation={this.props.navigation}/>}
                    />
                </ScrollView>

            </View>
        );
    }
}
module.exports = Feed;
