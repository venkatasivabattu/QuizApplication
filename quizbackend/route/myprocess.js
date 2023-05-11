const express=require('express');
const router=express.Router();
const con=require('../connection');
const querystring=require('querystring');
router.get('/authorize_user',(req,res)=>{
    var qobj=req.url.split('?')[1];
    var q=querystring.parse(qobj);
    console.log(q.uname);
    con.query("select * from users where uname = ? and pw = ?",[q.uname,q.pw],(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            if(result.length){
                res.json({valid:true});
            }
            else{
                res.json({valid:false});

            }
            
        }

    });
});
module.exports=router;