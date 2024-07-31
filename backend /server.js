const express = require("express");
const mongoose = require("mongoose");

const app = express();

require('dotenv').config()

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`the server started on port: ${port}`)
})

