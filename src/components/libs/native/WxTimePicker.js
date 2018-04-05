import React, {Component} from "react";
import {Text, View} from "react-native";
import DatePicker from "react-native-datepicker";

export default class WxTimePicker extends Component {
    constructor(props) {
        super(props)
        this.state = {time: ""}
    }

    render() {

        let item                               = this.props.metadata || {};
        let {title,  type, format, style} =  item;
        let name=item.name
        return (
            <View>
                <Text> {title}</Text>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.time}
                    mode="time"
                    placeholder="select time"
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
                    onDateChange={(time) => {
                        this.setState({time: time})
                        let text=time
                        this.props.onChange({text, name})
                    }}
                />
            </View>
        )
    }
}
