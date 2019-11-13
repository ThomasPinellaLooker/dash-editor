import * as React from 'react'
import { connect} from 'react-redux'
import { enterEditMode, saveEditMode, cancelEditMode } from '../../data/edit_dashboard_mode/action'

const EditBar = ({
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
  <div style={{ display: 'flex', backgroundColor: 'purple' }}>
    <div style={{ display: 'flex', marginLeft: 'auto' }}>
      {cancelButton}
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  </div>
  )
}

const mapStateToProps = (state, props) => ({
  inEditMode: state.data.editDashboardMode.inEditMode,
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
  }
})

export const ConnectedEditBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBar)
