import { combineReducers } from '@reduxjs/toolkit'
import { taskApi } from './api/api'

export const rootReducer = combineReducers({
    [taskApi.reducerPath]: taskApi.reducer,
})
