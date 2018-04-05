import React from "react";
import {View,ToastAndroid} from 'react-native';
import {Col, Row, Grid} from "react-native-easy-grid";
import ceil from "lodash/ceil";
import times from "lodash/times";
import WxElement from "../native/WxElement";

//TODO GRid
class WxRowColContainer extends React.Component {

  inputChange = (args) => {
    if (this.props.onChange)
    this.props.onChange(args);
  };

    render() {
        let {padding, margin, style} =  this.props.metadata;
        return (
            <Grid fluid padding={padding} margin={margin} style={style}>
                {this.getRows()}
            </Grid>
        )
    }

    getRows = () => {
        let {fields, columnCount = 4, xs, sm, md, lg} =  this.props.metadata;
        xs                       = this.getDensity(xs, columnCount);
        sm                       = this.getDensity(sm, columnCount);
        md                       = this.getDensity(md, columnCount);
        lg                       = this.getDensity(lg, columnCount);

        let rows      = [];
        let itemIndex = 0;
        if (fields)
            times(ceil(fields.length / columnCount), rowIndex => {
                let col = [];
                times(columnCount, colIndex => {
                    let field = fields[itemIndex++];
                    if (field)
                        col.push(
                            <Col size={sm[colIndex] || md[colIndex] || lg[colIndex]}
                                 key={`${colIndex}-${rowIndex}`}>
                                <WxElement
                                    onTouchTap={this.props.onTouchTap}
                                    onChange={this.inputChange}
                                    fields={field}
                                    elementState={this.props.elementState}/></Col>);
                    else   col.push(
                        <Col size={sm[colIndex] || md[colIndex] || lg[colIndex]}
                             key={`${colIndex}-${rowIndex}`}>
                            <View></View>
                        </Col>);
                });
                rows.push(<Row middle="xs" between='xs' key={rowIndex}>{col}</Row>)
            });
        return rows;
    };

    getDensity = (type, noOfCol) => {
        let returnValue = [];
        for (let i = 0; i < noOfCol; i++) {
            if (type && type[i])
                returnValue.push(type[i]);
            else
                returnValue.push(12 / noOfCol);
        }
        return returnValue;
    }
}

WxRowColContainer.propTypes = {
    metadata: React.PropTypes.shape({}).isRequired,

};
export default WxRowColContainer;
