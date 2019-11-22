import * as React from 'react'
import { connect} from 'react-redux'
import { enterEditMode, saveEditMode, cancelEditMode, addElement } from '../../data/edit_dashboard_mode/action'
import { inEditMode } from '../../data/saved_off_dashboard/selectors'

const EditBar = ({
  addElement,
  inEditMode,
  enterEditMode,
  saveChanges,
  cancelChanges,
}) => {
  const buttonText = inEditMode ? 'Save changes' : 'Enter Edit Mode'

  const handleClick = () => {
    if (inEditMode) {
      saveChanges()
    } else {
      enterEditMode()
    }
  }

  const cancelButton = inEditMode ? (
    <button onClick={cancelChanges}>Cancel</button>
  ) : null
  return (
  <div style={{ display: 'flex', backgroundColor: 'purple', justifyContent: 'space-between'}}>
    <div>
      {inEditMode && <button onClick={addElement}>Add Tile</button>}
    </div>
    <div style={{ display: 'flex' }}>
      {cancelButton}
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  </div>
  )
}

const mapStateToProps = (state, props) => ({
  inEditMode: inEditMode(state)
})

const mapDispatchToProps = (dispatch, props) => ({
  enterEditMode: () => {
    dispatch(enterEditMode())
  },
  saveChanges: () => {
    dispatch(saveEditMode())
  },
  cancelChanges: () => {
    dispatch(cancelEditMode())
  },
  addElement: () => {
    dispatch(addElement())
  }
})

export const ConnectedEditBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBar)
