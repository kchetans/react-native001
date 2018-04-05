import React from "react";
import {Text, View} from "react-native";

export default  class WxMaterialSpan extends React.Component {
    render() {
        let {text, title, size} = this.props.metadata;
        return (
            <View style={this.props.metadata.style}>
                {this.getView(size, title || text)}
            </View>
        );
    }

    getView = (size, title) => {
        switch (size) {
            case 1:
                return <Text>{title}</Text>
            case 2:
                return <Text>{title}</Text>
            case 3:
                return <Text>{title}</Text>
            case 4:
                return <Text>{title}</Text>
            case 5:
                return <Text>{title}</Text>
            case 6:
                return <Text>{title}</Text>
            default :
                console.warn("pass 'size' in WxMaterialSpan and value must be [1,6]");
                return <Text>{title}</Text>
        }
    }
}
