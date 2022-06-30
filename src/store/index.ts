import { applyMiddleware,  createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootRedcuer } from './reducers'

export const store = createStore(rootRedcuer, applyMiddleware(thunk))