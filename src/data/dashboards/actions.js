export const dashboardsActions = {
  DASHBOARD_SUCCESS: '[dashboards] dashboardSuccess',
}

export const dashboardSuccess = (dashboard) => ({
  type: dashboardsActions.DASHBOARD_SUCCESS,
  payload: {
    dashboard,
  }
})
