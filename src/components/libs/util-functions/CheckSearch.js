/* checking if element is need to show or not depending upon its visibility condition*/

export default function checkSearch(item, options = {}) {
    if (item.search) {
        let {search :args_array, dataOptions}         = item;
        for (var i = 0; i < args_array.length; i++) {
            if (dataOptions) {
                let filtered_options = [];

                for (var j = 0; j < dataOptions.length; j++) {
                    if (dataOptions[j][args_array[i]] === options[args_array[i]]) {
                        filtered_options.push(dataOptions[j])
                    }
                }
                item.filtered_options = filtered_options
            }
            else if (item.webhook) {
                item.webhook.filtered_url = item.webhook.url + '&' + args_array[i] + '=' + options[args_array[i]]
            }
        }
    }
};
