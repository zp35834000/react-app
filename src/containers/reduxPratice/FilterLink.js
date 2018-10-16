import {connect} from 'react-redux'
import {setVisibilityFilter} from '../../redux/action'
import Link from '../../components/reduxPratice/Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () =>{
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLint = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLint