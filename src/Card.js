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
    ToastAndroid
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
    cardWrapper         : {
        marginHorizontal: 20,
        marginVertical  : 5,
        borderColor     : 'lightgray',
        borderRadius    : 5,
        borderWidth     : 1
    },
    cardheader          : {
        padding: 10
    },
    cardheader_header   : {
        fontSize  : 15,
        fontWeight: 'bold',
        color     : '#757575'
    },
    cardheader_subheader: {
        color    : '#9E9E9E',
        fontStyle: 'italic',
        fontSize : 12
    },
    cardContentWrapper  : {
        paddingHorizontal: 15,
        paddingTop       : 10,
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
        borderColor: '#E3F2FD',
        borderWidth: 0.5,
        height     : 1
    },
    iconContainer       : {
        padding     : 15,
        borderWidth : 0.5,
        borderRadius: 30,
        height      : 40,
        borderColor : '#9E9E9E',
        marginRight : 10
    },
    header_icon         : {}
});

class CardHeader extends React.Component {
    render() {
        return (
            <View style={styles.cardheader}>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                    <View style={{marginHorizontal: 10}}>
                        <Icon name="md-walk" size={35} style={styles.header_icon}/>
                    </View>
                    <View>
                        <Text style={styles.cardheader_header}>{this.props.header}</Text>
                        <Text style={styles.cardheader_subheader}>{this.props.subheader}</Text>
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

    onPress() {

    }

    render() {
        var _data = this.props.data;
        var _cardHeader, _cardActions;
        if (_data.header) {
            _cardHeader = <CardHeader header={_data.header.title} subheader={_data.header.subtitle}/>
        }
        if (_data.actions) {
            _cardActions = (
                <CardActions style={styles.cardActionsWrapper}>
                    <Icon name="md-send" size={15} style={styles.header_icon}/>

                    <Text style={{color: '#1E88E5', fontSize: 15, paddingVertical: 5}}>
                        Approve
                    </Text>
                    <Text style={{color: '#1E88E5', fontSize: 15, paddingVertical: 5}}>
                        Cancel
                    </Text>
                </CardActions>);
        }
        return (
            <View style={styles.cardWrapper}>
                {_cardHeader}
                <CardDivider/>
                <CardContent>
                    <Text style={{textAlign: 'justify'}}>
                        Dear Chirag! Your attendance for today is pending yet. It will be marked absent automatically
                        after 2 pm.
                    </Text>
                </CardContent>
                <CardDivider/>
                {_cardActions}
            </View>
        );
    }
}

module.exports = {
    Card      : Card,
    CardHeader: CardHeader,

}
