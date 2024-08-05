const TodoModel = require("../models/TodoModel")
const asyncHandler = require("express-async-handler")

module.exports.getToDo = asyncHandler(async(req,res) => {
    const toDo = await TodoModel.find()
    res.send(toDo)
});

module.exports.saveToDo = asyncHandler(async(req,res) => {
    const { text } = req.body
        TodoModel.create({text}).then((data)=>{
        console.log('successfully created');
        console.log(data)
        res.send(data)
    })
});

module.exports.updateToDo = asyncHandler(async(req,res) => {
    const { _id,text } = req.body
        TodoModel.findByIdAndUpdate(_id, {text})
        .then(()=>res.send("Updated successfully!"))
        .catch((err)=>console.log(err.message))
});

module.exports.deleteToDo = asyncHandler(async(req,res) => {
    const { _id } = req.body
        TodoModel.findByIdAndDelete(_id)
        .then(()=>res.send("Deleted successfully!"))
        .catch((err)=>console.log(err.message))
});