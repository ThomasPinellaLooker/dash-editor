import * as React from 'react'
import { Filter } from './Filter'

export const FilterEditor = ({ onExitClick, filter }) => {

  const handleCancel = () => {
    onExitClick()
  }

  const handleSave = () => {
    onExitClick()
  }

  return (
    <div>
      <div>
        Edit Filter:
      </div>
      <Filter value={filter.value} />
      <div
        style={{ display: 'flex', position: 'absolute', right: '10px', bottom: '5px' }}
      >
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}
