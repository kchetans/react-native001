

import React, { Component } from 'react';
import { View, Text, RefreshControl } from 'react-native';

class WxPullRefresh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh() {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
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

  render() {
    return (
        <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="red"
            colors={['#ffffff']}
            progressBackgroundColor="#6c86ff"
          />

      );
    }
  }


export default WxPullRefresh;
