import React, {Component} from "react";
import {Text, View, Alert} from "react-native";
import DatePicker from "react-native-datepicker";
import Icon from "react-native-vector-icons/Ionicons";

export default class WxDatePicker extends Component {
    constructor(props) {
        super(props)
        this.state = {date: ""}
    }

    render() {
        let item            = this.props.metadata || {};
        let {
                title,  style, type,
                defaultDate,
            }               =  item;
        let name=item.name
        return (
            <View style={{marginTop:2}}>
                <Text style={{fontWeight:"700"}}>{title}</Text>
                <DatePicker
                    style={{width: 200,marginTop:3}}
                    date={this.state.date}
                    mode="date"
                    iconSource={require('../../../assets/date.png')}
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
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {
                        this.setState({date: date})
                        let text=date
                        this.props.onChange({text, name})
                    }}
                />
            </View>
        )
    }
}
