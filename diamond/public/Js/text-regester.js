function register(){
    let usernameV = document.getElementsByClassName("username-2")[0].value; 
    console.log(usernameV);
    //1.创建XMLHTTPRequest对象
    let xhr=new XMLHttpRequest();
    //2.注册回调函数
    /*0-未初始化  1-读取中 2-已读取 3-交互中 4-完成*/
    xhr.onreadystatechange=function () {      
        if(xhr.readyState==4){              
            console.log(xhr.responseText);              
            document.getElementById("msg").innerHTML=xhr.responseText;                             
        }   
    };
    //3.xhr 对象向服务器发起连接
    xhr.open("post","/registerText.do");       
    //4.post请求必须设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");          
    //5.send参数 
    xhr.send("username="+usernameV);            
}

function regestText(){              
    let username = $(".username-2").val();
    let password = $("#password-2").val();      
    let newpwd = $(".password-22").val();
    console.log(newpwd);
    console.log(password);           
    $.ajax({
        type:"get",
        url:"/regestTextAdd.do",        
        data:"username="+username+"&pwd="+password+"&newpassword="+newpwd,  
        success:function(data){ 
                alert("注册成功");
                $(".login-title2").css("display","block");
                $(".login-other").css("display","block");
                $(".login-btns").css("display","block");
                $(".login-btns-3").css("display","none");
                $(".register").css("display","none");
                $(".login-wrap01").css("display","block");     
        },
        error:function(data){
             console.log(data);            
        },
    })
}
//登陆
function regestTextLogin(){              
    let username = $(".username").val();
    let password = $("#password").val(); 
    let date = new Date();
    let year = date.getFullYear();
    let month=date.getMonth()+1;
    let day = date.getDate();
    let sum = year+"."+month+"."+day;
    let today = new Array("星期天","星期一","星期二","星期三","星期四","星期五","星期六");
    var str = "今天是星期" + "日一二三四五六".charAt(new Date().getDay());
    console.log(username);      
    console.log(password);     
    let xhr = new XMLHttpRequest();                             
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4&&xhr.status==200){     
                    console.log(xhr.responseText);      
                    let data = JSON.parse(xhr.responseText);
                    console.log(data.length);        
                    if(data.length>0){
                        alert("登陆成功");          
                        $(".login-box1").css("display","block");
                        $(".login span").text("我的");
                        $(".login-top1 span").text(data[0].username).css("float","right");    
                        $(".login-span02").text(sum); 
                        $(".login-span01").text(str);  
                    }else{   
                        alert("登陆失败");      
                    }
                }   
            }
            xhr.open("post","/regestTextLogin.do"); 
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
            xhr.send("username="+username+"&pwd="+password);        
}

