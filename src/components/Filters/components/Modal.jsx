import * as React from 'react'

export const Modal = ({ children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgba(150,150,150,0.25)',
      }}
    >
      <div style={{
        position: 'absolute',
        left: '25%',
        top: '20%',
        minHeight: '50%',
        width: '50%',
        backgroundColor: 'green',
      }}>
        {children}
      </div>
    </div>
  )
}
