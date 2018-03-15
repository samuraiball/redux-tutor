import {setVisibirityFilter} from "../action/action"
import { connect } from 'react-redux'
import Link from '../compornet/Link'



const mapStateToprops = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibirityFilter(ownProps.filter))
        }
    }
}
const FilterLink = connect(
    mapStateToprops,
    mapDispatchToProps
)(Link)

export default FilterLink

