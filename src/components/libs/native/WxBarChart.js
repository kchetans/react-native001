

import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

import { Bar } from 'react-native-pathjs-charts'

class WxBarChart extends Component {
  render() {

    let options = {
      width: 300,
      height: 300,
      margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
      },
      color: '#2980B9',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    // let data = [
    //      [{
    //        "v": 49,
    //        "name": "apple"
    //      }, {
    //        "v": 42,
    //        "name": "apple"
    //      }],
    //      [{
    //        "v": 69,
    //        "name": "banana"
    //      }, {
    //        "v": 62,
    //        "name": "banana"
    //      }],
    //      [{
    //        "v": 29,
    //        "name": "grape"
    //      }, {
    //        "v": 15,
    //        "name": "grape"
    //      }]
    //    ]

  // let  data = [
  //     [{
  //             "v": 49,
  //             "name": "apple"
  //     }, {
  //             "v": 42,
  //             "name": "banana"
  //     },
  //     {
  //             "v": 50,
  //             "name": "grape"
  //     }, {
  //             "v": 36,
  //             "name": "orange"
  //     },
  //     {
  //             "v": 49,
  //             "name": "kiwi"
  //     }, {
  //             "v": 42,
  //             "name": "mango"
  //     },
  //     {
  //             "v": 50,
  //             "name": "starfruit"
  //     }, {
  //             "v": 36,
  //             "name": "blueberry"
  //     }
  //   ]
  // ]

    return (
      <View>
        <Bar data={this.props.metadata.data} options={options} accessorKey='v'/>
      </View>

    )
  }
}

export default WxBarChart;
