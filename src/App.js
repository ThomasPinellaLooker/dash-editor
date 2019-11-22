import React from 'react'
import './App.css'
import { ConnectedFilters } from './components/Filters/Filters'
import { ConnectedEditBar } from './components/EditBar/EditBar'
import { ConnectedDashboardBody } from './components/DashboardBody/DashboardBody'

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <ConnectedEditBar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        <ConnectedDashboardBody />
        <ConnectedFilters />
      </div>
    </div>
  );
}

export default App
