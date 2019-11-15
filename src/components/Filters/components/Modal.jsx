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
        backgroundColor: 'rgba(230,240,250,1.0)',
        border: '2px solid rgba(100,140,150,1.0)',
        borderRadius: '25px',
      }}>
        {children}
      </div>
    </div>
  )
}
