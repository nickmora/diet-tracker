const express = require("express");
const server = express();
const PORT = process.env.PORT || 2020;

server.listen(PORT, err=>{
    if (err) console.log(err);
    console.log(`Now listening on Port ${PORT}, go ckeck it out :-)`)
})