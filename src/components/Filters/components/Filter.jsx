import * as React from 'react'

export const Filter = ({ onChange, value }) => {
  return <div><input onChange={onChange} value={value} /></div>
}
