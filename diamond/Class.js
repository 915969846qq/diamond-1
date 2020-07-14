// //1.引入http
// var http = require("http");
// //2.rs文件
// var fs = require("fs");
// //3.route
// var routes = require("./routes/SendCLass");
// //搭建服务器 
// var server = http.createServer(function(request,response){
//     var path = request.url.split(".");
//     if(path[1] == "html" ){
//         routes.sendHtml(request,response); 
//     }else if(path[1]=="css" || path[2]=="css" || path[3]=="css" || path[4]=="css" || path[5]=="css"){
//         routes.sendCss(request,response);
//     }else if(path[1]=="js" || path[2]=="js" || path[3]=="js" || path[4]=="js" || path[5]=="js"){
//         routes.sendJs(request,response);
//     }
// })

// //监听
// server.listen(1000);






// //引用http
// const http = require("http");
// //引用路由文件
// const routes =  require("./routes/SendCLass");
// //创建服务器
// const server = http.createServer(function(req,res){
//     routes.SendClass(req,res);
// })  

// //监听
// server.listen(1000);    


//时间
var moment = require("moment");
//引入express
const express = require("express");
//引入日志
const logger = require("morgan");
//引入cookie和session
const session = require("express-session");
const cookieParser = require("cookie-parser");
//小图标 
const favicon = require("serve-favicon");
//websocket
const ws = require("ws");
//引入处理post数据的模块
const bodyParser = require("body-parser");


//引入自己的路由模块
const route=require("./routes/indexRouter");
//执行express全局函数，返回一个express服务器对象
const Class = express(); 
Class.use(logger("dev")); 
//配置cookie
Class.use(cookieParser());
//配置session
Class.use(session({          
    name:"Class",           
    secret:"123",       
    resave:true,//是否更新session-cookie的失效时间
    saveUninitialized:true,//未初始化cookie要不要保存，无论有没有设置session cookie,每次请求都设置个 session cookie
    cookie:{  
        maxAge:1000*60*60*24*30*12,   //毫秒来计算  
        rolling:true,//更新保存，按照原设定的maxAge值重新设定session同步到cookie中  
    }
}))
//使用处理post请求的模块
Class.use(bodyParser.urlencoded({limit:"50mb",extended:true,parameterLimit:50000}));
Class.use(bodyParser.json({limit:"50mb"}));
//view ejs
const path = require("path");
Class.set("views",path.join(__dirname,"view"));    
Class.set("view engine","ejs");  
//vue
Class.use('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    //post请求头
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});  


//使用自己定义路由模块      
Class.use(route);   
//文件资源路径       
Class.use(express.static(__dirname+"/public"));
Class.use(express.static(__dirname+"/public/Js/assets"));       
Class.use(express.static(__dirname+"/public/Js/vendors"));    




//监听端口      
Class.set("port",1001);
Class.listen(1001,()=>{     
    console.log("已启动"+Class.get("port"));                           
})  


