import React from 'react'
import List from './List/List'
import TodoForm from './TodoForm/TodoForm'
import './TodoList.css'

function TodoList() {
  return (
    < div className='content'>
        <div className='todoList'>
            <List />
            <TodoForm />
        </div>
    </div>
  )
}

export default TodoList