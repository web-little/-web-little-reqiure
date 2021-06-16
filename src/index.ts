const path = require('path');
const fs = require('fs');
const vm = require('vm');

export function myRequire(url: string): object {

    let module = {
        exports: {}
    }
    
    // 第一步：需要拼接绝对路径
    // ../test/ 是因为我还不知道如何在test下运行 __dirname
    let filePath: string = path.resolve(__dirname, '../test/', url);
    
    // 第二步：读取文件内容
    let fileStr: string = fs.readFileSync(filePath).toString();

    // 第三步：组合
    let funStr = `(function (module){
        ${fileStr}
    })`

    // 第四步：执行
    const func = vm.runInThisContext(funStr)
    func.call({}, module)

    return module.exports
}
