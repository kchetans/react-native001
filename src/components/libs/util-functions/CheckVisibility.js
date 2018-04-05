/* checking if element is need to show or not depending upon its visibility condition*/

export default function checkVisibility(query, options = {}) {
    if (query) {
      // console.log("query =>", query)
      // console.log("options =>", options)
        var off_visibility = false;
        if (query instanceof Object) {
            // console.log('query', query)
            // console.log('in func state =>', options);
            for (var property in query) {
                if (query.hasOwnProperty(property)) {
                    if (query[property] !== options[property]) {
                        off_visibility = true;
                    }
                }
            }
        }
        else {
            off_visibility = true;
        }
        if (off_visibility)
            return false;
        else
            return true;
    }
    else
        return true;
};
