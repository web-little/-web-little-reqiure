const { myRequire } = require('../dist/index') // 引入 myRequire 代替 node 的 require

let { name } = myRequire('./name.js');
let { age } = myRequire('./age.js');

console.log(`我的名字叫${name}, 今年${age}岁，欢迎来到myReqire`)

