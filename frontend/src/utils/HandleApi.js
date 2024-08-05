import axios from "axios"

const baseUrl = "http://localhost:5001"
const getAllTodo = (setTodo) => {
    axios.get(baseUrl).then(({data}) =>{
        console.log('data => ', data)
        setTodo(data)
    })
}

const addToDo = (text,setText,setTodo) => {
    axios.post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log(data)
        setText("")
        getAllTodo(setTodo)
    })
    .catch((err)=>console.log(err))
}
const updateTodo = (todoId, text, setTodo,setText,setIsUpdating) => {
    axios.post(`${baseUrl}/update`,{_id:todoId,text})
    .then((data)=>{
        console.log(data)
        setIsUpdating(false)
        setText("")
        getAllTodo(setTodo)
    })
    .catch((err)=>console.log(err))
}

const deleteTodo = (todoId, setToDo) => {
    axios.post(`${baseUrl}/delete`,{_id:todoId}).then((data)=>{
        console.log(data)
        getAllTodo(setToDo)
    }).catch((err) => console.log(err))
}

export{getAllTodo,addToDo,updateTodo,deleteTodo}