/*
    action types
 */

export const ADD_TODO = ' ADD_TODO '
export const TAGGLE_TODO = 'TAGGLE_TODO'
export const SET_VISIBIRITY_FILTER = 'SET_VISIBIRITY_FILTER'

/*
    other contents
 */
export const VisibirityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
    action creator
 */

export function addToDo(text) {
    return {type: ADD_TODO, text}
}

export function taggleTodo(index) {
    return {type: TAGGLE_TODO, index}
}

export function setVisibirityFilter(filter) {
    return {type:SET_VISIBIRITY_FILTER,filter}
}
