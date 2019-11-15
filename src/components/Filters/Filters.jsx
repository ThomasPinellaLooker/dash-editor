import * as React from 'react'
import { connect } from 'react-redux'
import { updateFilter } from '../../data/dashboards/filters/actions'
import { Filter } from './components/Filter'
import { ConnectedFilterEditor } from './components/FilterEditor'
import { Modal } from './components/Modal'
import { getDashboardFilters } from '../../data/dashboards/filters/selectors'
import { attemptSaveOff } from '../../data/dashboards/saved_off_filters/actions'

const Filters = ({ inEditMode, filters, updateFilter, openFilterEditor }) => {

  const [editorIsOpen, setEditorOpen] = React.useState(false)
  const [filterSelected, setEditFilter] = React.useState(undefined)

  const handleEditButtonClick = (filterId) => {
    openFilterEditor()
    setEditorOpen(true)
    setEditFilter(filterId)
  }

  const handleExitClick = () => {
    setEditorOpen(false)
    setEditFilter(undefined)
  }

  const filterComponents = Object.values(filters).map(filter => {
    const handleChange = (event) => {
      updateFilter(filter.id, event.currentTarget.value)
    }
    return (
      <div key={filter.id} style={{ display: 'flex' }}>
        <Filter onChange={handleChange} filter={filter} />
        {inEditMode && <button onClick={handleEditButtonClick.bind(null, filter.id)}>Edit</button>}
      </div>
    )
  })

  return (
    <div style={{ backgroundColor: 'yellow' }}>
      {inEditMode && <button onClick={handleEditButtonClick.bind(null, '-1')}>Add new filter</button>}
      <div style={{ display: 'flex', padding: '20px' }}>
        {filterComponents}
      </div>
      {editorIsOpen && (
        <Modal>
          <ConnectedFilterEditor onExitClick={handleExitClick} filterId={filterSelected} />
        </Modal>
      )}
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  filters: getDashboardFilters(state),
  inEditMode: state.data.editDashboardMode.inEditMode,
})

const mapDispatchToProps = (dispatch, props) => ({
  updateFilter: (id, value) => {
    dispatch(updateFilter(id, value))
  },
  openFilterEditor: (filterId) => {
    dispatch(attemptSaveOff(filterId))
  },
})

export const ConnectedFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)
