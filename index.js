const express=require('express')
const route=require("./routes/abc")
const fetch=require('node-fetch')

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",route)

app.listen(3000);


// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());