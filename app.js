/**
 * created by charsh-kop on 2020/03/10
 */
const Koa = require('koa');
// 创建 Koa 对象
const app = new Koa()
// 引入 controller
const controller = require('./controller');

// koa-bodyparser  解析post请求的request body
const bodyParser = require('koa-bodyparser');

// koa-bodyparser必须在router之前被注册到app对象上
app.use(bodyParser());
// 使用 koa-router middleware 处理 URL
app.use(controller());

app.listen(8999)
console.log('koa app started at port 8999')