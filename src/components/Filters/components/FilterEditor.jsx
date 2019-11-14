import * as React from 'react'
import { Filter } from './Filter'
import { connect } from 'react-redux'
import { updateFilter } from '../../../data/dashboards/filters/actions'
import { attemptSaveChanges } from '../../../data/dashboards/draft_filters/actions'

export const FilterEditor = ({ filter, onExitClick, updateFilter, save }) => {

  const handleChange = (event) => {
    updateFilter(event.currentTarget.value)
  }

  const handleCancel = () => {
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
      <Filter onChange={handleChange} value={filter.value} />
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
  filter: state.data.dashboards.draftFilters[props.filterId] || { [props.filterId]: {} },
})

const mapDispatchToProps = (dispatch, props) => ({
  updateFilter: (value) => {
    dispatch(updateFilter(props.filterId, value))
  },
  save: () => {
    dispatch(attemptSaveChanges())
  }
})

export const ConnectedFilterEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterEditor)
