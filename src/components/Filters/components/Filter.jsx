import * as React from 'react'

export const Filter = ({ onChange, value }) => {
  return <div style={{ paddingLeft: '10px' }}><input onChange={onChange} value={value} /></div>
}
