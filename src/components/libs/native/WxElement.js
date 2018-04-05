import React, {Component} from "react";
import {View, ToastAndroid} from "react-native";
// import {Row, Col} from "react-grid-system";
import WxSpan from "./WxSpan";
import WxFlatButton from "./WxButtonFlat";
import WxFabButton from "./WxButtonFab";
import WxRaisedButton from "./WxButtonRaised";
import WxSection from "../container/WxSection";
import WxRadio from "../group-component/WxRadio";
import WxAction from "../group-component/WxRadio";
import WxVerticalStack from "../container/WxVerticalStack";
import WxRowColContainer from "../container/WxRowColContainer";
import WxTextArea from "./WxTextArea";
import WxDropdown from "../group-component/WxDropdown";
import WxTextField from "./WxTextField";
import WxDatePicker from "./WxDatePicker";
import WxTimePicker from "./WxTimePicker";
import WxAutoComplete from "../group-component/WxAutoComplete";
import WxFormDialog from "./WxFormDialog";
import WxFrom from "../container/WxForm";
import WxToggle from "./WxToggle";
import WxCheckBox from "./WxCheckBox";
import WxHeader from "./WxHeader";
import WxTable from "./WxTable";
import WxListContainer from "../templates/WxListContainer";
import WxCardList from "../templates/WxCardList";
import WxPage from "../container/WxPage";
import WxBadge from "./WxBadge";
import WxAvatar from "./WxAvatar";
import WxSlider from "./WxSlider";
import map from "lodash/map";
import {WxComponents} from "../../../libs/constants/app-constants";

export default class WxElement extends Component {

    inputChange = (args) => {

    //    console.log("Leave Form" , new Date());
      // console.log("args element",args)
        if (this.props.onChange)
            this.props.onChange(args);

    };


    render() {
        let getUI = (item, index = 0) => {
            let returnObj = undefined;
            // Check if item is array; if Array: call this method recursively;
            if (item instanceof Array) {
                let list  = item;
                returnObj = map(list, (listItem, index) => getUI(listItem, index));
                return returnObj; // Process if item is not an Array
            } else {
                //console.log('items2',item);
                switch (item.type) {
                    case WxComponents.SPAN:
                        returnObj = <WxSpan metadata={item} key={index}/>
                        break;
                    case WxComponents.VERTICAL_STACK:
                        returnObj = <WxVerticalStack metadata={item} key={index}  onChange={this.inputChange}/>
                        break;
                    case WxComponents.ROW_COL_CONTAINER:
                        returnObj = <WxRowColContainer metadata={item} key={index}  onChange={this.inputChange}/>
                        break;
                    case WxComponents.FORM:
                        returnObj = <WxFrom metadata={item} key={index}  onChange={this.inputChange}/>
                        break;
                    case WxComponents.SECTION:
                        returnObj = <WxSection metadata={item} key={index}  onChange={this.inputChange}/>;
                        break;
                    case WxComponents.HEADER:
                        returnObj = <WxHeader metadata={item} key={index}/>;
                        break;
                    case WxComponents.ICON:
                    case WxComponents.AVATAR:
                        returnObj = <WxAvatar metadata={item} key={index}/>;
                        break;
                    case WxComponents.RADIO:
                        returnObj = <WxRadio metadata={item} key={index} onChange={this.inputChange}/>;
                        break;
                    case WxComponents.DROP_DOWN:
                        returnObj = <WxDropdown metadata={item} key={index} onChange={this.inputChange}/>;
                        break;
                    case WxComponents.TEXT:
                        returnObj = <WxTextField metadata={item} key={index} onChange={this.inputChange}/>;
                        break;
                    case WxComponents.TEXT_AREA:
                        returnObj = <WxTextArea metadata={item} key={index} onChange={this.inputChange}/>;
                        break;
                    case WxComponents.DATE:
                        returnObj = <WxDatePicker metadata={item} key={index} onChange={this.inputChange}/>;
                        break;
                    case WxComponents.TIME:
                        returnObj = <WxTimePicker metadata={item} key={index} onChange={this.inputChange}/>;
                        break;
                    case WxComponents.NESTED_DROPDOWN:
                        returnObj = <WxDropdown metadata={item} key={index}/>;
                        break;
                    case WxComponents.AUTO_COMPLETE:
                        returnObj = <WxAutoComplete metadata={item} key={index} onChange={this.inputChange}/>;
                        break;
                    case WxComponents.TOGGLE:
                        returnObj = <WxToggle metadata={item} key={index} onChange={this.inputChange}/>;
                        break;
                    case WxComponents.CHECKBOX:
                        returnObj = <WxCheckBox metadata={item} key={index} onChange={this.inputChange}/>;
                        break;
                    case WxComponents.DIALOG:
                        returnObj = <WxFormDialog metadata={item} key={index}/>;
                        break;
                    case WxComponents.PAGE:
                        returnObj = <WxPage metadata={item} key={index}/>;
                        break;
                    case WxComponents.TABLE:
                        returnObj = <WxTable metadata={item} key={index}/>;
                        break;
                    case WxComponents.LIST_CONTAINER:
                        returnObj = <WxListContainer metadata={item} key={index}/>;
                        break;
                    case WxComponents.CARD_STACK:
                        returnObj = <WxCardList metadata={item} key={index}/>;
                        break;
                    case WxComponents.SLIDER:
                        returnObj = <WxSlider metadata={item} key={index} onChange={this.inputChange}/>;
                        break;
                    case WxComponents.BADGE:
                        returnObj = <WxBadge metadata={item} key={index}/>;
                        break;
                    case WxComponents.BUTTON_RAISED:
                        returnObj = <WxRaisedButton metadata={item} key={index}/>;
                        break;
                    case WxComponents.BUTTON_FAB:
                        returnObj = <WxFabButton metadata={item} key={index}/>;
                        break;
                    case WxComponents.BUTTON_FLAT:
                        returnObj = <WxFlatButton metadata={item} key={index}/>;
                        break;
                    case WxComponents.AUTO_COMPLETE:
                        returnObj = <WxAutoComplete metadata={item} key={index}/>;
                        break;
                    case WxComponents.ACTIONS:
                        returnObj = <WxAction metadata={item} key={index}/>;
                        break;
                    default:
                        returnObj = <View key={index}>

                        </View>
                }
                return <View key={index}>{returnObj}</View>;
            }
        };
        var ui    = getUI(this.props.fields);
        return (
            <View>{ui}</View>
        );
    }
}
