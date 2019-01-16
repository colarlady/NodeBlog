
var express = require('express');
var path  = require('path');
var router = require('./router');
var bodyParser = require('body-parser');
var session = require('express-session');


var app = express();

app.engine('html',require('express-art-template'));


// 在 Express 这个框架中，默认不支持 Session 和 Cookie
// 但是我们可以使用第三方中间件：express-session 来解决
// 1. npm install express-session
// 2. 配置 (一定要在 app.use(router) 之前)
// 3. 使用
//    当把这个插件配置好之后，我们就可以通过 req.session 来发访问和设置 Session 成员了
//    添加 Session 数据：req.session.foo = 'bar'
//    访问 Session 数据：req.session.foo
app.use(session({
    secret: 'keyboard cat',   // 通过设置的 secret 字符串，来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改。
    resave: true,    //即使 session 没有被修改，也保存 session 值，默认为 true
    saveUninitialized: false,  //强制没有“初始化”的session保存到storage中，没有初始化的session指的是：刚被创建没有被修改
    cookie: {
        maxAge: 1000 * 60 * 30}
}));

//开放静态资源
app.use('/public/',express.static(path.join(__dirname,'./public/')));
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')));


//配置解析表单 POST 请求体插件（注意：一定要在 app.use(router) 之前 ）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())





//配置路由
app.use(router);

//监听接口

app.listen(3000,function () {
    console.log("server has stared");
})
