import { combineReducers } from 'redux'
import { todoReducer } from './todoReducer'
import { userReducer } from './userReducer'

export const rootRedcuer = combineReducers({
  user: userReducer,
  todo: todoReducer,
})

export type RootState = ReturnType<typeof rootRedcuer>
