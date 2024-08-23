import {combineReducers, configureStore} from "@reduxjs/toolkit";
import actionReducer from '../features/actions/actionSlice'

const rootReducer = combineReducers({
    actionReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}


