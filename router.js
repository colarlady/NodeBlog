
 var express = require('express');
 var User = require('./models/user');
 var md5 = require('blueimp-md5');

 var router =  express.Router();



 //渲染首页
 router.get("/",function (req,res) {

     res.render('index.html',{
         user:req.session.user
     });
 });
 
 //渲染登录页
 router.get("/login",function (req,res) {
        res.render('login.html');
 });

 //处理登录请求
 router.post("/login",function (req,res,next) {

     var data = req.body;
     User.findOne({
         email:data.email,
         password:md5(md5(data.password))
     },function (err,ret) {
         if(err){
             // res.status(500).json({
             //     err_code:500,
             //     message:'Internal error'
             // });
            return next(err);
         }
         console.log(ret);

         if(!ret){
            return  res.status(200).json({
                 err_code:1,
                 message:'email or password Invalid'
             });
         }

         req.session.user = ret;

         res.status(200).json({
             err_code:0,
             message:'OK'
         });
     })

 });


 //渲染注册页
 router.get("/register",function (req,res) {
     res.render('register.html');
 });

 //处理注册请求
 router.post("/register",function (req,res,next) {

        //1. 判断注册的邮箱和昵称是否已经存在
        var data = req.body;
        User.findOne({
            $or:[
                {nickname:data.nickname},
                {email:data.email}
            ]
        },function (err,ret) {

            if(err){

                // return res.status(500).json({
                //     err_code:500,
                //     message:'Internal error'
                // });
                // return  res.status(500).send('Internal error');

                return next(err);
            }

            if(ret){

                //如果邮箱和昵称已存在

                //前端异步请求标识dataType:json,浏览器会尝试将服务端返回的内容解析为json对象
                //如果解析不成功也不会报错
                return res.status(200).json({
                    err_code:1,
                    message:'Email or nickname aleady exists.'
                });

            }
            //对密码进行md5加密
            data.password = md5(md5(data.password));

            //保存数据
            new User(data).save(function (err,ret) {
                if(err){

                    // return res.status(500).json({
                    //     err_code:500,
                    //     message:'Internal error'
                    // });
                    return next(err);
                }

                // 注册成功，使用 Session 记录用户的登陆状态

                req.session.user = ret;

                res.status(200).json({
                    err_code:0,
                    message:'OK'
                });

            });
        });
 });
 
 
 
 //处理用户退出请求
 
 router.get("/logout",function (req,res) {
   req.session.user = null;
   res.redirect('/');
 });

 module.exports = router;