import { createStore, combineReducers } from 'redux'
import numberReducer from '../reducers/numberReducer'

const configureStore = (props) => {
    const store = createStore(combineReducers({
        numbers: numberReducer
    }))
    return store
}
export default configureStore