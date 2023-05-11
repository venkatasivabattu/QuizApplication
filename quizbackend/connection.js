const my=require('mysql');
const con=my.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'quizdb'
});
con.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("db connected");
    }
});
module.exports=con;