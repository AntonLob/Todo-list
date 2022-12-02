import {ADD_TODO, DELETE_TODO, GET_LIST , TOGGLE_TODO} from '../Actions/TodoListActions'
    

let initialValue = {
    list: [],
}

export default function AppReducer(state = initialValue , {type , payload}){
    switch(type){
        case(GET_LIST):
            return state =  {...state, list: payload};
        case(TOGGLE_TODO):
            return state =  {...state, list: state.list.map((todo)=>{
                return todo.id === payload.id ? payload : todo;
            })};
        case(ADD_TODO):
            return state = {...state , list: [...state.list , payload]}
        case(DELETE_TODO):
            return state = {...state , list: state.list.filter((todo)=>{
               return todo.id !== payload
            })}
        default: return state 
    }
}