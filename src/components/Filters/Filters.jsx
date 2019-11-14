import * as React from 'react'
import { connect } from 'react-redux'
import { updateFilter } from '../../data/dashboards/filters/actions'
import { Filter } from './components/Filter'
import { FilterEditor } from './components/FilterEditor'
import { Modal } from './components/Modal'

const Filters = ({ inEditMode, filters, updateFilter }) => {

  const [editorIsOpen, setEditorOpen] = React.useState(false)
  const [filterSelected, setEditFilter] = React.useState(undefined)

  const handleEditButtonClick = (_filter) => {
    // Also copy over to draft filter
    setEditorOpen(true)
    // Use id here
    setEditFilter(_filter)
  }

  const handleExitClick = () => {
    setEditorOpen(false)
  }

  const filterComponents = Object.values(filters).map(filter => {
    const handleChange = (event) => {
      updateFilter(filter.id, event.currentTarget.value)
    }
    return (
      <div style={{ display: 'flex' }}>
        <Filter key={filter.id} onChange={handleChange} value={filter.value} />
        {inEditMode && <button onClick={handleEditButtonClick.bind(null, filter)}>Edit</button>}
        
      </div>
    )
  })

  return (
    <div>
      {filterComponents}
      {editorIsOpen && (
        <Modal>
          <FilterEditor onExitClick={handleExitClick} filter={filterSelected} />
        </Modal>
      )}
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  filters: state.data.dashboards.filters,
  inEditMode: state.data.editDashboardMode.inEditMode,
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
