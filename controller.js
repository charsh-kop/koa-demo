// 导入fs模块
const fs = require('fs')

// 映射处理
function addMapping(router, mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET ')) {
            let path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            let path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else if (url.startsWith('DELETE ')) {
            let path = url.substring(7);
            router.delete(path, mapping[url]);
            console.log(`register URL mapping: DELETE ${path}`);
        } else if (url.startsWith('PUT ')) {
            let path = url.substring(4);
            router.put(path, mapping[url]);
            console.log(`register URL mapping: PUT ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

// 文件处理
function addControllers(router, dir) {
    // 筛选 js 文件
    let files = fs.readdirSync(__dirname + '/controllers').filter(f => {
        return f.endsWith('.js')
    })
    // 映射处理
    for(let f of files) {
        let mapping = require(__dirname + '/controllers/' + f)
        addMapping(router, mapping)
    }
}

module.exports = function (dir) {
    let controllers_dir = dir || 'controllers', // 目录默认为 controllers
        router = require('koa-router')(); // koa-router 为函数
    addControllers(router, controllers_dir);
    return router.routes();
};