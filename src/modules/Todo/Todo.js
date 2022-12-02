import React from 'react'
import { useDispatch } from 'react-redux'
import { delTodo, updateTodo } from '../../Store/Actions/TodoListActions'
import './Todo.css'


function Todo({todo}) {
  let dispatch = useDispatch()

  function toggleTodo(id){
    dispatch(updateTodo(id))
  }
  function deleteTodo(e,todo){
    e.stopPropagation()
    dispatch(delTodo(todo))
  }
  return (
    <div onClick={()=>toggleTodo(todo.id)}
      className={ todo.isDone ? 'done todo' : 'todo'}>
      {todo.title} 
      {/* <button onClick={(e)=>deleteTodo(e,todo)}>delete</button> */}
      <img src='../../../../../img/3643729_bin_delete_garbage_rubbish_trash_icon.svg' alt='нет картинки' onClick={(e)=>deleteTodo(e,todo)}/>
    </div>
  )
}





export default Todo