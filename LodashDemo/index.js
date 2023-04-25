const lodash = require('lodash');

const nums = [1,2,2,3,4,1];

let result = lodash.uniq(nums);

console.log(result);

const data = lodash.concat(nums, [7,8]);

console.log(data);

lodash.fill(nums, 10);
console.log(nums);