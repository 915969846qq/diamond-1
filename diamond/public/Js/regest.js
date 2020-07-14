function register(){
    let usernameV = document.getElementById("exampleInputEmail1").value; 
    //1.创建XMLHTTPRequest对象
    let xhr=new XMLHttpRequest()||new ActiveXObject("Microsoft.XMLHTTP");
    //2.注册回调函数
    /*0-未初始化  1-读取中 2-已读取 3-交互中 4-完成*/
    xhr.onreadystatechange=function () {
        console.log(xhr.readyState);         
        if(xhr.readyState==4){
            console.log(xhr.responseText);              
            document.getElementById("msg").innerHTML=xhr.responseText;  
        }   
    };
    //3.xhr 对象向服务器发起连接
    xhr.open("post","/regest1.do");     
    //4.post请求必须设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");          
    //5.send参数 
    xhr.send("username="+usernameV);        
}
