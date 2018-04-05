import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import SplashScreen from "react-native-splash-screen";

import Image from 'react-native-image-progress';
//import ProgressBar from 'react-native-progress/Bar';
//import Progress from 'react-native-progress';
import * as Progress from 'react-native-progress';
export default class WxImage extends React.Component {
  componentDidMount() {
      SplashScreen.hide();
  }
    render() {
      ProgressBar = <Progress.CircleSnail color={['red', 'green', 'blue']} />;
        let {imageurl}      = this.props.metadata;
      console.log('imageurl',this.props.metadata.imageurl);
        return (
          // <View>
          //     <Image
          //     source={{uri: imageurl}}
          //     indicator={ProgressBar}
          //     style={this.props.imageStyle}/>
          // </View>
          <View>
              <Image
              source={{uri: imageurl}}
              indicator={Progress.Pie}
              indicatorProps={{
                  size: 80,
                  borderWidth: 0,
                  color: 'rgba(150, 150, 150, 1)',
                  unfilledColor: 'rgba(200, 200, 200, 0.2)'
                }}
              style={this.props.imageStyle}/>
          </View>
        )
    }
}
