const express = require('express');

const router = express.Router();

const fs=require('fs');

router.get('/login',(req,res,next)=>{     
    res.send(`<form onsubmit="var username=document.getElementById('username').value;
    localStorage.setItem('username',username);" action="/" method="POST"><input id="username" type="text" name="username"><button type="submit">LOGIN</button></form>`);
   
});

router.post('/',(req,res,next)=>{
    res.send(`<form onsubmit="document.getElementById('username').value=localStorage.getItem('username');
    " action="/chat" method="POST"><input id="username" type="hidden" name="username">
    <input id="message" type="text" name="message"><button type="submit">SEND</button></form>`);
});

router.post('/chat',(req,res,next)=>{
    var data=req.body.message;
    var username=req.body.username;

    fs.readFile("message.txt",{encoding:"utf-8"},(err,prevdata)=>{
        if(err){console.log(err)};
        
        fs.writeFileSync('message.txt',`${prevdata} ${username}:${data}`);
        res.send(`<h4>${prevdata} ${username}:${data}</h4><form onsubmit="document.getElementById('username').value=localStorage.getItem('username');
        " action="/chat" method="POST"><input id="message" type="text" name="message"><input id="username" type="hidden" name="username"><button type="submit">SEND</button></form>`);
      return res.end();
      })
    
});

module.exports = router;