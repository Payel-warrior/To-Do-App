import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'

function App() {

  const [Todo,setTodo] = useState()
  const [todos,setTodos] = useState([])

  const handleEdit = (index) => {
    setTodo(todos[index].Todo)
    let filterData = todos.filter((Todo, id)=>{
      return id !== index
  })
  setTodos(filterData)
  }

  const handleDelete = (index) => {
    let filterData = todos.filter((Todo, id)=>{
      return id !== index
  })
  setTodos(filterData)
}
  const handleAdd = () => {
    setTodos([...todos,{Todo}])
    setTodo("")

  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
 
  return (
    <>
    <Navbar/>
      <div className="box">
        <div className="add_task">
          <span className="To-do-List">Task-Board</span>
          <div className="inp">
          <input onChange={handleChange} value={Todo} type="text" placeholder='Add your task' />
          <button onClick={handleAdd}>Save</button>
          </div>
        </div>
        <h2>Your Tasks</h2>

        <div className="itemlist"> 
          {todos.map((item,index)=>{

          return <>
          <div key={item.index} className="list">
            <p>{item.Todo}</p> 
           <div className="btn">
           <button onClick={()=>handleEdit(index)}>Edit</button>
           <button onClick={()=>handleDelete(index)}>Delete</button>
           </div>
            </div>
          </>
          
          })}
        </div>
      </div> 
      </>
  )
}

export default App
