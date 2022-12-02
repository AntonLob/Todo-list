import TODO_LIST_API from "../../Api/TodoListApi";
import axios from 'axios'

export const GET_LIST = "GET_LIST";
export function actionGetList(list){
    return {type: GET_LIST , payload: list}
}

export function getTodoList(dispatch){
        axios.get(TODO_LIST_API)
        .then(res => dispatch(actionGetList(res.data)))
}

export const TOGGLE_TODO = "TOGGLE_TODO";
export function actionToggleTodo(todo){
    return {type: TOGGLE_TODO , payload: todo}
}

export function updateTodo(id){
    return (dispatch, getState)=>{
        let {list} = getState()
        let todo = list.find((item)=>{
            return item.id === id;
        })
        let newTodo = {...todo, isDone: !todo.isDone}
        axios.put(TODO_LIST_API + id , newTodo)
        .then(res => dispatch(actionToggleTodo(res.data)))
    }
}

export const ADD_TODO = "ADD_TODO";
export function actionAddTodo(todo){
    return {type: ADD_TODO , payload: todo}
}

export function addNewTodo(todo){
    return (dispatch)=>{
        let newTodo = {
            title: todo,
            isDone: false,
        }
        axios.post(TODO_LIST_API , newTodo)
        .then(res => dispatch(actionAddTodo(res.data)))
    }
}

export const DELETE_TODO = "DELETE_TODO";
export function actionDeleteTodo({id}){
    return {type: DELETE_TODO , payload: id}
}

export function delTodo(todo){
    return (dispatch)=>{
        axios.delete(TODO_LIST_API + todo.id)
        .then(res => dispatch(actionDeleteTodo(res.data)))
    }
}


 