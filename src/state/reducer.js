import { combineReducers } from "redux";
import { userReducer } from './users/reducer';
import { uiReducer } from './ui/reducer';



export const reducer = combineReducers({
    users: userReducer,
    ui: uiReducer
});