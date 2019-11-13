export const elementsActions = {
  SET_ELEMENTS: '[elements] setElements',
}

export const setElements = (elements) => ({
  type: elementsActions.SET_ELEMENTS,
  payload: {
    elements,
  }
})
