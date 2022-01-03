const express=require("express");
const bodyParser=require("body-parser");
const dotenv=require("dotenv");


const mongoose=require("mongoose");

const app=express();

dotenv.config({path:'./config.env'});
require('./db/conn');


const cors=require("cors");
const Routes=require("./service/route.js");



app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

app.use('/costumers',Routes);

const PORT=process.env.PORT;



app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})