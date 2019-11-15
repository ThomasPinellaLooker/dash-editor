export const layoutComponentsActions = {
  SET_LAYOUT_COMPONENT: '[layout_components] setLayoutComponent',
  SET_ALL_LAYOUT_COMPONENTS: '[layout_components] setAllLayoutComponents',
}

export const setLayoutComponent = (id, layoutComponent) => ({
  type: layoutComponentsActions.SET_LAYOUT_COMPONENT,
  payload: {
    id,
    layoutComponent,
  }
})

export const setAllLayoutComponents = (layoutComponents) => ({
  type: layoutComponentsActions.SET_ALL_LAYOUT_COMPONENTS,
  payload: {
    layoutComponents,
  }
})
