import {combineReducers} from 'redux'

import {
    ADD_TODO,
    TAGGLE_TODO,
    SET_VISIBIRITY_FILTER,
    VisibilityFilters

} from "../action/action";

const {SHOW_ALL} = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBIRITY_FILTER:
            return action.filter
        default:
            return state
    }
}


function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            console.log(action)
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
                           ]

        case TAGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp