const express = require('express');
const api = express();


const port = 5000;

api.get('/message', (req, res, next)=>{
    const {name, lastName} = req.query;
    if (!name || !lastName) return res.send("Please complete the form")
    return res.send(`New user name: ${name}`)
})

api.listen(port, (err) =>{
    if (err) return console.log(err.message)
    console.log(`API is listening to port: ${port}`)
})