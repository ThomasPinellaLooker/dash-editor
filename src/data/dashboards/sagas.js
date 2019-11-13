import { sagas as layoutComponentsSagas } from './layout_components/sagas'
import { sagas as elementsSagas } from './elements/sagas'
import { sagas as titlesSagas } from './titles/sagas'
import { sagas as filtersSagas } from './filters/sagas'
import { sagas as queriesSagas } from './queries/sagas'

export const sagas = [
  ...layoutComponentsSagas,
  ...elementsSagas,
  ...titlesSagas,
  ...filtersSagas,
  ...queriesSagas,
]
