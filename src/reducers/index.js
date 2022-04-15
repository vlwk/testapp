import { combineReducers} from 'redux'

import mainReducer from './MainReducer'
import { TYPES } from '../types/Types'

const appReducer = combineReducers({
    data: mainReducer,
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer