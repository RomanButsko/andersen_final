import { configureStore } from '@reduxjs/toolkit'
import { taskApi } from './api/api'
import { rootReducer } from './root-reducer'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(taskApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
