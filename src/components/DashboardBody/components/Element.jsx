import * as React from 'react'
import { setLayoutComponent } from '../../../data/dashboards/layout_components/actions'
import { connect } from 'react-redux'

const pxPerUnit = 50

export const Element = ({ inEditMode, layoutComponent, updateLayoutComponent }) => {

  const [y, setY] = React.useState(layoutComponent.row * pxPerUnit)
  const [x, setX] = React.useState(layoutComponent.column * pxPerUnit)

  React.useEffect(() => {
    setY(layoutComponent.row * pxPerUnit)
    setX(layoutComponent.column * pxPerUnit)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inEditMode])

  const handleDragEnd = event => {
    if (!inEditMode) return
    setX(event.clientX)
    setY(event.clientY - layoutComponent.height * pxPerUnit)

    updateLayoutComponent({
      ...layoutComponent,
      row: event.clientY / pxPerUnit,
      column: event.clientX / pxPerUnit,
    })
  }
  return (
    <div
      draggable
      onDragEnd={handleDragEnd}
      style={{
        position: 'absolute',
        width: (layoutComponent.width * pxPerUnit)+'px',
        height: (layoutComponent.height * pxPerUnit)+'px',
        top: y+'px',
        left: x+'px',
        backgroundColor: 'lightgray',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '10px',
          height: '10px',
          backGroundColor: 'darkgray',
        }}
      >
        :::
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  inEditMode: state.data.editDashboardMode.inEditMode,
})

const mapDispatchToProps = (dispatch, props) => ({
  updateLayoutComponent: (layoutComponent) => {
    dispatch(setLayoutComponent(layoutComponent.id, layoutComponent))
  }
})

export const ConnectedElement = connect(
  mapStateToProps,
  mapDispatchToProps
)(Element)
