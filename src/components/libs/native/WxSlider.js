var React = require('react');
var ReactNative = require('react-native');
var {
  Slider,
  Text,
  StyleSheet,
  View,
} = ReactNative;

export default class WxSlider extends React.Component {
  static defaultProps = {
    value: 0,
  };

  state = {
    value: 0,
  };

  render() {
    let item = this.props.metadata || {};
    let {
      title,style,minimumValue,maximumValue,
      value
    }            = item;
    let name= item.title
    return (
      <View>
      <Text style={styles.text} >
      {title}  {this.state.value && +this.state.value.toFixed(3)}

      </Text>
      <Slider

      minimumValue={minimumValue}
      maximumValue={maximumValue}
      onValueChange={(value) =>{ this.setState({value: value})
      let text= value
      this.props.onChange({text, name})
    }}

    />
    </View>
  );
}
}

var styles = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '500',
    margin: 10,
  },
});
