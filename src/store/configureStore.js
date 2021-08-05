import { createStore, combineReducers } from 'redux'

const configureStore = (props) => {
    const store = createStore(combineReducers({
        numbers: numberReducer
    }))
    return store
}
export default configureStore