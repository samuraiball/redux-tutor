import React from 'react'
import {VisibilityFilters} from '../action/action'
import FilterLink from './FilterLink'

const Footer= () => (
    <p>
        Show:
        {' '}
        <FilterLink filter = {VisibilityFilters.SHOW_ALL}>
            ALL
        </FilterLink>

        <FilterLink filter ={VisibilityFilters.SHOW_ACTIVE}>
            Active
        </FilterLink>
        <FilterLink filter ={VisibilityFilters.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </p>
)


export default Footer