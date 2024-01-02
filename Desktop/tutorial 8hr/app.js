// manual approach (create package.json in the root,  create properties etc)
// npm init (step by step enter to skip)
//npm init -y (everything default)

const_ = require('lodash');

const items =[1[2,[3,[4,[5]]]]]

const newItems = _.flattenDeep(items);

console.log(newItems);