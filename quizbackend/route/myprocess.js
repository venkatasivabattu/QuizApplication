const express=require('express');
const router=express.Router();
const con=require('../connection');
const querystring=require('querystring');
router.get('/authorize_user',(req,res)=>{
    var qobj=req.url.split('?')[1];
    var q=querystring.parse(qobj);
    
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
router.get('/checkUname/:u',(req,res)=>{
    var r=req.url.split('/')[2];
    
    
    con.query("select * from users where uname = ?",[r],(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({result:result.length});
        }
    });
});
router.post("/register",(req,res)=>{
    
    con.query("insert into users set ?",req.body,(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({result:true});
        }
    })
});
router.put("/resetP",(req,res)=>{
    
    
    con.query("update users set pw = ? where uname = ?",[req.body.pw,req.body.uname],(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({result:true});
        }
    })
});
router.put("/updateP",(req,res)=>{
    
    
    con.query("update users set name = ?, dob =?,gender = ? , education =? ,address = ?,mobile =? ,email = ?,uname=? where uname = ?",[req.body.name,req.body.dob,req.body.gender,req.body.education,req.body.address,req.body.mobile,req.body.email,req.body.uname,req.body.ouname],(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            if(result.affectedRows){
                res.json({result:true});
            }
            else{
                res.json({result:false,problem:result});

            }
        }
    })
});






router.get('/subjectLoader',(req,res)=>{
    con.query("select * from subjects",(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({result:result});
        }

    });
});
router.get('/getUserDetails',(req,res)=>{
    
   var q=req.url.split('?')[1];
    q=querystring.parse(q);
    
    con.query("select * from users where uname=?",[q.u],(err,result)=>{
        if(err){
            res.json({err:err})
        }
        else{
            res.json({result:result});
        }
    });
});
router.get('/quizloader/:id',(req,res)=>{
    sid=req.url.split('/')[2];
    con.query("select * from subjects where sid=?",[sid],(err,res1)=>{
        if(err){
            res.json({err:err});
        }
        else{
            con.query("select * from quizes where sid = ?",[sid],(err,res2)=>{
                if(err){
                    res.json({err:err});
                }
                else{
                    res.json({subject:res1,
                    quizes:res2});
                }
            });
        }
    });
});
router.get("/starter/:qid",(req,res)=>{
    qid=req.url.split('/')[2];
    con.query("select * from quizes where qid = ?",[qid],(err,res1)=>{
        if(err){
            res.json({err:err});
        }
        else{
            if(res1.length){
                sid=res1[0]['sid'];
                
                con.query("select * from subjects where sid= ?",[sid],(err,res2)=>{
                    if(err){
                        res.json({err:err});
                    }
                    else{
                        
                        res.json({subject:res2,
                        quiz:res1});
                    }
                });
            }
        }
    });
});
router.get("/qsidloader/:qid",(req,res)=>{
    qid=req.url.split('/')[2];
    con.query("select qsid from questions where qid = ?",[qid],(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({result:result});
        }
    });
});
router.get('/getQuestion/:id',(req,res)=>{
    id=req.url.split('/')[2];
   
    con.query("select * from questions where qsid=?",[id],(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({q:result});
        }
    })
});
router.get('/getOptions/:id',(req,res)=>{
    id=req.url.split('/')[2];
    con.query("select * from options where qsid = ?",[id],(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({options:result});
        }
    });
});
router.post('/postQuizHistory',(req,res)=>{
    console.log(req.body);
    con.query("insert into quizhistory set ?",req.body,(err,res1)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({submit:true});
        }
    });

});
router.get('/checkHistory',(req,res)=>{
    var q=req.url.split('?')[1];
    q=querystring.parse(q);
    
    con.query("select * from quizhistory where uname = ? and qid = ?",[q['uname'],Number(q['qid'])],(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({result:result});
        }
    });
});

router.get('/getHistory/:uname',(req,res)=>{
    u=req.url.split('/')[2];
    con.query("select * from quizhistory where uname = ? order by date desc",[u],(err,result)=>{
        if(err){
            res.json({err:err});
        }
        else{
            res.json({result:result});
        }

    });
});
router.get('/analysis/:u',(req,res)=>{
    u=req.url.split('/')[2];
    con.query("select count(*) from quizhistory where uname = ? ",[u],(err,res1)=>{
        if(err){
            res.json({err:err});
        }
        else{
            con.query("select count(*) from quizhistory where uname = ? and  status = 'p' ",[u],(err,res2)=>{
                if(err){
                    res.json({err:err});
                }
                else{
                    res.json({r1:res1,r2:res2});
                    
                }
            });
        }
    });

});
module.exports=router;