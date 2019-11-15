import * as React from 'react'
import { Filter } from './Filter'
import { connect } from 'react-redux'
import { updateFilter } from '../../../data/dashboards/filters/actions'
import { attemptCopyBack, erase } from '../../../data/dashboards/saved_off_filters/actions'

export const FilterEditor = ({ filter, onExitClick, updateFilter, cancel, save }) => {

  const handleChange = (event) => {
    updateFilter(event.currentTarget.value)
  }

  const handleCancel = () => {
    cancel()
    onExitClick()
  }

  const handleSave = () => {
    save()
    onExitClick()
  }

  return (
    <div>
      <div>
        Edit Filter:
      </div>
      <Filter onChange={handleChange} filter={filter} />
      <div
        style={{ display: 'flex', position: 'absolute', right: '10px', bottom: '5px' }}
      >
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  filter: state.data.dashboards.filters[props.filterId] || { [props.filterId] : {} }
})

const mapDispatchToProps = (dispatch, props) => ({
  updateFilter: (value) => {
    dispatch(updateFilter(props.filterId, value))
  },
  cancel: () => {
    dispatch(attemptCopyBack())
  },
  save: () => {
    dispatch(erase())
  }
})

export const ConnectedFilterEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterEditor)
