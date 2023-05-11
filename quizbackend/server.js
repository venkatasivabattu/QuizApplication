const cors=require('cors');
const express=require("express");
const bodyparser=require('body-parser');
const app=express();
const connection=require('./connection');
const myprocess=require('./route/myprocess');
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/',myprocess);
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("running at 3000");
});


