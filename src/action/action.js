/*
    action types
 */

export const ADD_TODO = ' ADD_TODO '
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
    other contents
 */
let nextId=0
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
    action creator
 */

export function addToDoAction(text) {
    return {type: ADD_TODO, text,id:nextId++}
}

export function taggleTodo(index) {
    return {type: TOGGLE_TODO, index}
}

export function setVisibirityFilter(filter) {
    return {type:SET_VISIBILITY_FILTER,filter}
}
