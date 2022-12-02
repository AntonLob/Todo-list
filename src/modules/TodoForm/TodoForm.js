import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../../Store/Actions/TodoListActions'
import './TodoForm.css'

function TodoForm() {
  let [newTodo , setNewTodo] = useState('')
  let dispatch = useDispatch()

  function addTodo(e,newTodo){
    e.preventDefault()
    dispatch(addNewTodo(newTodo))
    setNewTodo('')
  }

  return (
    <div>
      <form onSubmit={(e)=>addTodo(e,newTodo)}
        className='todoListForm'>
        <input 
          className='todoListFormInput'
          value={newTodo}
          onChange={(e)=>{
            setNewTodo(e.target.value)
          }}
        />
        <button className='todoListFormBtn'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm