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

