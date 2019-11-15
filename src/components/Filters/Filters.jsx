import * as React from 'react'
import { connect } from 'react-redux'
import { updateFilter } from '../../data/dashboards/filters/actions'
import { Filter } from './components/Filter'
import { ConnectedFilterEditor } from './components/FilterEditor'
import { Modal } from './components/Modal'
import { onFilterEditorOpen, onFilterEditorClose } from '../../data/dashboards/draft_filters/actions'

const Filters = ({ inEditMode, filters, updateFilter, openFilterEditor, closeFilterEditor }) => {

  const [editorIsOpen, setEditorOpen] = React.useState(false)
  const [filterSelected, setEditFilter] = React.useState(undefined)

  const handleEditButtonClick = (filterId) => {
    openFilterEditor(filterId)
    setEditorOpen(true)
    setEditFilter(filterId)
  }

  const handleExitClick = () => {
    setEditorOpen(false)
    closeFilterEditor()
  }

  const filterComponents = Object.values(filters).map(filter => {
    const handleChange = (event) => {
      updateFilter(filter.id, event.currentTarget.value)
    }
    return (
      <div key={filter.id} style={{ display: 'flex' }}>
        <Filter onChange={handleChange} value={filter.value} />
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
  filters: state.data.dashboards.filters,
  inEditMode: state.data.editDashboardMode.inEditMode,
})

const mapDispatchToProps = (dispatch, props) => ({
  updateFilter: (id, value) => {
    dispatch(updateFilter(id, value))
  },
  openFilterEditor: (filterId) => {
    dispatch(onFilterEditorOpen(filterId))
  },
  closeFilterEditor: () => (
    dispatch(onFilterEditorClose())
  )
})

export const ConnectedFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)
