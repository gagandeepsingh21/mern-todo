const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/ToDoRouter")
const cors = require("cors")

const app = express();

require('dotenv').config()

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected to mongoDb!"))
  .catch((err) => console.log(err));

app.use(routes); 

app.listen(port, ()=>{
    console.log(`the server started on port: ${port}`)
})

