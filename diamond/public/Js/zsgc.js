  $(function(){
    var _this = null;
    //修改
    var userList = [];
    $(document).on("click",".change",function(){
        _this = $(this).parents("tr");
        userList = [];
        $(this).parent().siblings().each(function(){
            userList.push($(this).text())
        });
        $("#change_modal").find("input").each(function(i){
            $(this).val(userList[i])
        })
    });
    //修改确定
    var changList = [];
    $(document).on("click",".confire",function(){
        changList = [];
        var shijian = $(this).parent().parent().parent().parent().prev().find("tr td:nth-child(8)")[1];
        shijian.innerText = sum; 
        console.log(shijian)
        // for(var i =0 ; i<shijian.length;i++){
        // console.log($(this).parent().parent().parent().parent().prev().find("tr td:nth-child(8)").html())
        // }
        console.log( $(this).parent().parent().parent().parent().prev().find("tr td:nth-child(8)")[0].innerText); 
        $(this).parents(".modal-content").find("input").each(function(){
            changList.push($(this).val())
            
        });
    //					console.log(_this)  
        _this.find("td").each(function(i){
            $(this).text(changList[i])         
        })
    });
    //查看
    var viewList=[];
    $(document).on("click",".view",function(){
        viewList=[];  //清空上一次输入内容
        $(this).parent().siblings().each(function(){
            viewList.push($(this).text())
        });
        $("#view").find("span").each(function(i){
            $(this).text(viewList[i])
        })
    });        
    
    var date = new Date();  
    var year = date.getFullYear();       
    var month = date.getMonth()+1; 
    var day = date.getDate();          
    var hour = date.getHours();               
    var minutes = date.getMinutes();       
    var second = date.getSeconds();      
    var sum = year+"-"+month+"-"+day+" "+hour+":"+minutes+":"+second;     
    //增加 
    // localStorage.clear(option);    
        if(localStorage.option=="[]"){ 
            localStorage.setItem("option",JSON.stringify(Class)); 
        }else{
        var chang = JSON.parse(localStorage.getItem("option"));
        console.log(chang)
        var num ="";
        for(var i=0;i<chang.length;i++){       
             num += `<tr><td>${chang[i].ID}</td><td>${chang[i]. nianji}</td><td>${chang[i].Name}</td><td>${chang[i].ZName}</td><td>${chang[i].BName}</td><td>${chang[i].PName}</td><td>${chang[i].TName}</td><td>${chang[i].date}</td><td><button class="btn btn-primary btn-xs change" data-toggle="modal" data-target = "#change_modal" style="font-size: 14px;background-color:#01c0c8;color: #fff;border-color:#fff">修改</button> <button class="btn btn-danger btn-xs view" data-toggle="modal" data-target = "#view" style="font-size: 14px;background-color:#01c0c8;color: #fff;border-color:#fff">查看</button> <button class="btn btn-warning btn-xs delete" style="font-size: 14px;background-color:#01c0c8;color: #fff;border-color:#fff">删除</button></td>
                </tr>`
        }   
        $("table").append(num);                    
        }       
        var addList=[];
        $(document).on("click",".add",function(){
            addList=[];
            $("#add_modal").find("input").each(function(){    
                addList.push($(this).val())
            });                                                  
            var S =  localStorage.getItem("chang");   
            // var duixiang = {grade:input};
            var duixiang = {ID: chang.length+1, nianji: addList[0], Name: addList[1], ZName: addList[2],BName: addList[3],PName: addList[4],TName: addList[5],date:sum}
            if(duixiang.Name == chang[0].Name || duixiang.Name == chang[1].Name){
                alert("班级输入重复！！");
                $(".form-control").val("");  
            }else{
                $("table").append(`<tr>
                                        <td>${duixiang.ID}</td>
                                        <td>${duixiang.nianji}</td>                                            
                                        <td>${duixiang.Name}</td>           
                                        <td>${duixiang.ZName}</td>   
                                        <td>${duixiang.BName}</td>  
                                        <td>${duixiang.PName}</td>                                            
                                        <td>${duixiang.TName}</td>             
                                        <td>${duixiang.date}</td>   
                                        <td>  
                                            <button class="btn btn-primary btn-xs change" data-toggle="modal" data-target = "#change_modal" style="font-size: 14px;background-color:#01c0c8;color: #fff;border-color:#fff">修改</button> <button class="btn btn-danger btn-xs view" data-toggle="modal" data-target = "#view" style="font-size: 14px;background-color:#01c0c8;color: #fff;border-color:#fff">查看</button> <button class="btn btn-warning btn-xs delete" style="font-size: 14px;background-color:#01c0c8;color: #fff;border-color:#fff">删除</button></td>
                                            
                                    </tr>`);        
            chang.push(duixiang)         
            console.log(chang)                                                
            // $(".card-body tbody").append(chang);       
            localStorage.option=JSON.stringify(chang) ;       
            }
        });
    
      //删除
    $(document).on("click",".delete",function(){
        $(this).parents("tr").remove()
    });                       
    
    //查询
    $("#serach_btn").click(function(){
        var oTxt=$("#search").val();
        if (oTxt.length==0) {
            alert("您的数据输入为空，请重新输入！")
        } else{
            if($("table tr td:contains("+oTxt+")").length==0){
                alert("没有查询到该数据")  
            }else{
                $("table tr:not(:first)").hide();
                $("table tr:contains("+oTxt+")").show()              
            }
        }
    })
    })      
    
         