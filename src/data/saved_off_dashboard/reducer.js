import { savedOffDashboardActions } from "./actions"

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case savedOffDashboardActions.SAVE_OFF_SUCCESS:
      return action.payload.dashboard
    case savedOffDashboardActions.COPY_BACK_SUCCESS:
    case savedOffDashboardActions.ERASE:
      return {}
    default:
      return state
  }
}
