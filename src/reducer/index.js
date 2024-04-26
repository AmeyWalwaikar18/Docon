import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"
import allUsersReducer from "../slices/allUsersSlice";
import prescriptionReducer from "../slices/prescriptionSlice";
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    allUsers : allUsersReducer,
    prescriptions : prescriptionReducer
})

export default rootReducer;