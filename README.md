# 仿CNode中文社区

## 项目目录

```
    |-- .gitignore
    |-- app.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- public
    |   |-- css
    |   |-- images
    |   |   |-- avatar-default.png
    |   |   |-- logo3.png
    |   |-- js
    |-- views
        |-- 404.html
        |-- index.html
        |-- login.html
        |-- register.html
        |-- settings
        |-- topic
        |-- _layouts
        |   |-- home.html
        |-- _partials
            |-- footer.html
            |-- header.html
           
```

## art-template

- [art-template继承](https://aui.github.io/art-template/zh-cn/docs/syntax.html#模板继承)

- [art-template子模板](https://aui.github.io/art-template/zh-cn/docs/syntax.html#子模板)

  ​

## 路由设计

| 路径      | 方法 | get参数 | post参数                | 是否需要权限 | 备注         |
| --------- | ---- | ------- | ----------------------- | ------------ | ------------ |
| /         |      |         |                         |              | 渲染首页     |
| /register | get  |         |                         |              | 渲染注册页面 |
| /register | post |         | username,password,email |              | 处理注册请求 |
| /login    | get  |         |                         |              | 渲染登录页面 |
| /login    | post |         | username, password      |              | 处理登录请求 |
| /logout   | get  |         |                         |              | 用户退出登录 |

## 补充知识点

- 表单同步提交和异步提交
  - 表单有默认提交行为，这个提交行为是同步的，同步提交浏览器会锁死等待服务器发回来的响应，而且无论服务器响应什么都会覆盖当前的页面
  - 为了解决同步提交会覆盖页面的问题，有人提出了一种解决办法：
    - 服务器将页面以及错误信息以及用户填写的信息重新渲染返回
  - 另一种就是提出表单异步请求
- 服务端重定向问题
  - 同步请求，服务器端重定向是可以的
  - 异步请求，服务器端重定向无效，需要在浏览器端重定向
- MD5加密
  - MD5加密
  - node中如何使用md5加密
    - 使用 blueimp-md5插件
    - 安装 ：`npm install blueimp-md5`
    - 引包 ： `var md5 = require("./md5")`
    - 使用 ：` var hash = md5("value")`
- Session和Cookie
  - ​
- localStorage，sessionStorage,cookie
- 数据持久化

## Node中使用Session



Express中没有直接支持session，需要借助中间件Express-Session

- 下载

  ```shell
  npm install express-session --save
  ```

- 配置

  ```javascript
  app.use(session({
      secret: 'keyboard cat',   // 通过设置的 secret 字符串，来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改。
      resave: true,    //即使 session 没有被修改，也保存 session 值，默认为 true
      saveUninitialized: false,  //强制没有“初始化”的session保存到storage中，没有初始化的session指的是：刚被创建没有被修改
      cookie: {
          maxAge: 1000 * 60 * 30}
  }));
  ```

- 使用

  ```javascript
       req.session.user = ret;
  	 console.log(req.session.user);
  ```

## 功能实现



## 书写步骤

- 创建目录结构

- 整合静态页模板

  - inclue
  - extend
  - block

- 设计用户注册登录退出路由

- 用户注册

  - 先处理好客户端的内容（表单控件的name，收集表单数据，发起请求）
  - 服务器端
    - 获取客户端表单请求数据
    - 操作数据库
    - 有错误返回500状态码并告诉客户端服务器出错
    - 根据业务需求返回不同内容

- 用户登录

- 用户退出

  ​

  ​