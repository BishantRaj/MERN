const fetch=require('node-fetch')
// import fetch from "node-fetch"



const extapi=(req,res,next)=>{
    let p=fetch("https://api.agify.io/?name=meelad")
    p.then((data)=>{
        return data.json()
    }).then((data1)=>{
        console.log(data1);
    })
}


module.exports=extapi;