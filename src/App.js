import React from 'react'
import './App.css'
import { ConnectedFilters } from './components/Filters/Filters'
import { ConnectedEditBar } from './components/EditBar/EditBar'

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '25vh', backgroundColor: 'yellow' }}>
        <ConnectedEditBar />
        <ConnectedFilters />
      </div>
    </div>
  );
}

export default App;
