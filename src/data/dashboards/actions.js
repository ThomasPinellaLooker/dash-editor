export const dashboardsActions = {
  DASHBOARD_SUCCESS: '[dashboards] dashboardSuccess',
  DASHBOARD_REQUEST: '[dashboards] dashboardRequest',
}

export const dashboardSuccess = (dashboard) => ({
  type: dashboardsActions.DASHBOARD_SUCCESS,
  payload: {
    dashboard,
  }
})

export const dashboardRequest = () => ({
  type: dashboardsActions.DASHBOARD_REQUEST,
})
