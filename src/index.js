import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { store } from './store'
import { dashboardSuccess } from './data/dashboards/actions'

const dashboard = {
  filters: {
    '1': {
      id: '1',
      value: '23'
    },
    '2': {
      id: '2',
      value: '24'
    },
    '3': {
      id: '3',
      value: '3434'
    },
  },
  elements: {
    '1': 'oi',
  },
  layoutComponents: {
    '1': {
      id: '1',
      width: 3,
      height: 2,
      row: 0,
      column: 0,
    },
    '2': {
      id: '2',
      width: 2,
      height: 2,
      column: 4,
      row: 2,
    }
  }
}

store.dispatch(dashboardSuccess(dashboard))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
