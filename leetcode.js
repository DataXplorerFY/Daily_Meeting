"use strict";
function mergeList(list1, list2) {
    let sorted_list = list1.concat(list2).sort();
    console.log(sorted_list);
}
mergeList([], []);
