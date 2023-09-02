import { combineReducers } from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducer'


let reducers = combineReducers({
  mainReducer: reducer,
})
const store = configureStore({
  reducer:reducers,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
})

export default store
