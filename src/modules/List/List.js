import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoList } from '../../Store/Actions/TodoListActions'
import Todo from '../Todo/Todo'
import './List.css'

function List() {
    let list = useSelector((store)=> store.list)
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTodoList)
    },[])

  return (
    
    <>
      {list.map((todo)=>{
        return <Todo key={todo.id} todo={todo}/>
      })}
    </>
  )
}

export default List