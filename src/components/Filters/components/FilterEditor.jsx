import * as React from 'react'
import { Filter } from './Filter'
import { connect } from 'react-redux'
import { updateFilter, setTitle } from '../../../data/dashboards/filters/actions'
import { attemptCopyBack, erase } from '../../../data/dashboards/saved_off_filters/actions'

export const FilterEditor = ({ filter, onExitClick, updateFilter, cancel, save, saveTitle }) => {

  const [title, setTitle] = React.useState(filter.title || '')

  const handleTitleChange = (event) => {
    setTitle(event.currentTarget.value)
  }

  const handleChange = (event) => {
    updateFilter(event.currentTarget.value)
  }

  const handleCancel = () => {
    cancel()
    onExitClick()
  }

  const handleSave = () => {
    saveTitle(title)
    save()
    onExitClick()
  }

  return (
    <div style={{ padding: '15px' }}>
      <h1>
        Edit Filter:
      </h1>
      <div>
        Set Title:
      </div>
      <div>
        <input onChange={handleTitleChange} value={title} />
      </div>
      <div style={{ marginTop: '20px' }}>
        Configure Default Value:
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
  },
  saveTitle: (title) => {
    dispatch(setTitle(props.filterId, title))
  }
})

export const ConnectedFilterEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterEditor)
