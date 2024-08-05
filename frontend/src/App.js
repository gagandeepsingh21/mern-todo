import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllTodo,addToDo,updateTodo, deleteTodo } from "./utils/HandleApi";


function App() {
  const [todo,setTodo] = useState([]);
  const [text,setText] = useState("");
  const [isUpdating,setIsUpdating] = useState(false);
  const [todoId,setTodoId] = useState("");

  useEffect(() => {
    getAllTodo(setTodo)
  },[])
  const updateMode =(_id,text) =>{
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  }
  return (
    <div className="App">
      <div className="container">
          <h1>ToDo App</h1>
             <div className="top">
                <input type="text" placeholder="Add Todos..." value={text} onChange={(e) => setText(e.target.value)}/>
                <div className="add" onClick={isUpdating ? () => updateTodo(todoId,text,setTodo,setText,setIsUpdating) : () => addToDo(text, setText,setTodo)}>
                   {isUpdating ? "Update" : "Add"} 
                </div>
             </div>
             <div className="list">
              {todo.map((item) => <ToDo key={item._id} text={item.text} updateMode={()=> updateMode(item._id, item.text) } deleteMode={()=> deleteTodo(item._id, setTodo) }/>)}              
             </div>

      </div>
    </div>
  );
}

export default App;
