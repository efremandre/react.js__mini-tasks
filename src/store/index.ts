import {configureStore} from "@reduxjs/toolkit";
import textReducer from './textSlice'

const store = configureStore({
    reducer: {
        text: textReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
