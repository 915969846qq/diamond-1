//引用mysql
const mysql = require("mysql");
//连接池对象
const pooldb = {
    //连接池
    pool:{},
    config:{      //连接池配置
        host:"localhost",
        port:"3306",
        user:"root",
        password:"root",
        database:"diamond",
        timezone: "08:00"       
    },
    //创建连接池
    found(){
        this.pool = mysql.createPool(this.config);
    },
    //  
    connect(sql,canshu,data){          
        this.pool.getConnection((error,connection)=>{
            connection.query(sql,canshu,data); 
            connection.release();   //释放连接
        })   
    }       
}
//打开页面就可以调用到连接对象
pooldb.found();
module.exports=pooldb;