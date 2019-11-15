import * as React from 'react'
import { connect } from 'react-redux'
import { getLayoutComponents } from '../../data/dashboards/layout_components/selectors'
import { ConnectedElement } from './components/Element'

export const DashboardBody = ({ layoutComponents }) => {
  const lcs = Object.values(layoutComponents).map(lc => {
    return <ConnectedElement key={lc.id} layoutComponent={lc} />
  })
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100%',
        position: 'relative',
      }}
    >
      {lcs}
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  layoutComponents: getLayoutComponents(state)
})

const mapDispatchToProps = (dispatch, props) => ({
})

export const ConnectedDashboardBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardBody)
