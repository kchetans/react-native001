import map from "lodash/map";

export const validateDataSource = (someDataSource) => {
    // console.log(someDataSource)
    let invalidDataSource = false;
    var dataSource        = [];

    if (someDataSource instanceof Array) {
        map(someDataSource, (dataSourceItem, index) => {
            if (typeof dataSourceItem === "object") {
                if ((dataSourceItem.hasOwnProperty('text') || dataSourceItem.hasOwnProperty('name') || dataSourceItem.hasOwnProperty('key'))
                    && dataSourceItem.hasOwnProperty('value')) {
                    dataSource.push({
                        text : dataSourceItem.text || dataSourceItem.name || dataSourceItem.key,
                        value: dataSourceItem.value
                    });
                } else if (dataSourceItem.hasOwnProperty('text') || dataSourceItem.hasOwnProperty('name') || dataSourceItem.hasOwnProperty('key')) {
                    dataSource.push({
                        text : dataSourceItem.text || dataSourceItem.name || dataSourceItem.key,
                        value: dataSourceItem.text || dataSourceItem.name || dataSourceItem.key,
                    });
                }
                else {
                    invalidDataSource = true;
                    dataSource        = [];
                    // return false;
                }
            }
            else {
                dataSource.push({
                    value: dataSourceItem,
                    text : dataSourceItem
                })
            }
        });
    }
    else {
        invalidDataSource = true;
        dataSource        = [];
    }
    return {dataSource, invalidDataSource};
};
