import {connect} from 'react-redux'
import {taggleTodo} from "../action/action";
import TodoList from '../compornet/TodoList'


const getVisibleTodos = (todos,filter)=>{
    switch (filter){
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t=>t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t=>!t.completed)
        default:
            return todos
    }
}
const mapStateTodoProps = state =>{
    return{
        todos:getVisibleTodos(state.todos,state.visibilityFilter)
    }
}


const mapDispatchTodoProps =dispatch =>{
    return{
        onTodoClick:id=>{
            dispatch(taggleTodo(id))
        }
    }
}


const VisibleTodoList =connect(
    mapStateTodoProps,
    mapDispatchTodoProps
)(TodoList)

export default VisibleTodoList