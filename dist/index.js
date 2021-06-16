"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myRequire = void 0;
var path = require('path');
var fs = require('fs');
var vm = require('vm');
function myRequire(url) {
    var module = {
        exports: {}
    };
    // 第一步：需要拼接绝对路径
    // ../test/ 是因为我还不知道如何在test下运行 __dirname
    var filePath = path.resolve(__dirname, '../test/', url);
    // 第二步：读取文件内容
    var fileStr = fs.readFileSync(filePath).toString();
    // 第三步：组合
    var funStr = "(function (module){\n        " + fileStr + "\n    })";
    // 第四步：执行
    var func = vm.runInThisContext(funStr);
    func.call({}, module);
    return module.exports;
}
exports.myRequire = myRequire;
