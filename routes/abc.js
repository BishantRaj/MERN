const express=require('express')
const router=express.Router()
const axios=require('axios')
// const extapi=require('./extapi')


router.get('/abc',(req,res,next)=>{
    let data={}
    data.name="bishu"
    data.class="4"
    data.roll="1"
    // res.json("data is"+data)
    res.status(200).json(data);
})


router.get('/q', (req, res, next) => {
    axios.get('https://catfact.ninja/fact')
        .then((resp) => {
            res.status(200).json(resp.data);
        })
});

router.post('/abc',(req,res,next)=>{
    let data={}
    console.log(req.body);
    data.name=req.body.name
    data.class=req.body.class
    data.roll=req.body.roll

    res.status(200).json(data);
})

// router.get('/q',(req,res,next)=>{
//     let p=fetch("https://catfact.ninja/fact")
//     p.then((data)=>{
//         return data.json()
//     }).then((data1)=>{
//         res.status(200).json(data1);
//     })
// })

router.post('/bcd',(req,res,next)=>{
    const s={};
    s.name=req.body.n;
    s.sec=req.body.c;
    console.log(s);
    res.json(s)
    
    
})
module.exports=router;