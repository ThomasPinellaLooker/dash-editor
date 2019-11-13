import * as React from 'react'
import { connect } from 'react-redux'
import { updateFilter } from '../../data/dashboards/filters/actions'
import { Filter } from './components/Filter'

const Filters = ({ filters, updateFilter }) => {

  const filterComponents = Object.values(filters).map(filter => {
    const handleChange = (event) => {
      updateFilter(filter.id, event.currentTarget.value)
    }
    return <Filter key={filter.id} onChange={handleChange} value={filter.value} />
  })

  return <div>{filterComponents}</div>
}

const mapStateToProps = (state, props) => ({
  filters: state.data.dashboards.filters
})

const mapDispatchToProps = (dispatch, props) => ({
  updateFilter: (id, value) => {
    dispatch(updateFilter(id, value))
  }
})

export const ConnectedFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)
