let modules = {};
import reduce from "lodash/reduce";

modules.replacer = function (string, options) {
    let splitString = string.split('$');
    return reduce(splitString, (val, item) => {
        if (item != '')
            val += options[item] || item;
        return val
    }, '');
};

module.exports = modules;


/***
 * Previous format replacer version
 *
 modules.replacer = function (string, options, callback) {
    console.log("string, options => ", string, options);
    let cmp = string.split(' ');
    for (let i = 0; i < cmp.length; i++) {
        let item       = cmp[i];
        let item_array = item.split('$');
        let j          = 0;
        cmp[i]         = item_array[0];

        while (j < item_array.length - 1) {
            // console.log(item_array)
            let variable = item_array[j + 1];
            if (item_array[j + 2] !== null && item_array[j + 2] !== undefined) {
                if (options[variable] !== null && options[variable] !== undefined)
                    cmp[i] += options[variable] + item_array[j + 2];
                else {
                    cmp[i] += item_array[j + 2];
                }
            }
            else {
                cmp[i] += item_array[j + 1];
            }
            j += 2
        }
    }
    return cmp.join(" ");
};
 **/
