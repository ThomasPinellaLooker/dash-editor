import * as React from 'react'

export const Filter = ({ onChange, filter }) => {

  const [dropdownVisible, setDropdownVisible] = React.useState(false)

  const handleClick = () => {
    setDropdownVisible(true)
  }

  const handleBlur = () => {
    setDropdownVisible(false)
  }

  const suggs = filter.suggestions && filter.suggestions.map((suggestion, index) => {
    return (
      <li key={index}>{suggestion}</li>
    )
  })
  return (
    <div style={{ paddingLeft: '10px' }}>
      <div>
        {filter.title}
      </div>
      <input onChange={onChange} value={filter.value || ''} onClick={handleClick} onBlur={handleBlur} />
      {filter.suggestions && dropdownVisible && 
        <div
          style={{
            position: 'fixed',
            backgroundColor: 'white',
            width: '135px',
            border: '1px solid black'
          }}
        >
          <ul>
            {suggs}
          </ul>
        </div>}
    </div>
  )
}
