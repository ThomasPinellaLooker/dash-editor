export const elementsActions = {
  SET_ELEMENTS: '[elements] setElements',
  SET_ELEMENT: '[elements] setElement',
}

export const setElements = (elements) => ({
  type: elementsActions.SET_ELEMENTS,
  payload: {
    elements,
  }
})

export const setElement = (id, element) => ({
  type: elementsActions.SET_ELEMENT,
  payload: {
    id,
    element,
  }
})
