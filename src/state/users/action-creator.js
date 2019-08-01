import * as types from "./actions";

import * as UiTypes from "../ui/actions";


import { userProxyService } from "../../proxy";


export type LOAD_USERs_ACTION = {
    type: string,
    payload: any
};

export type GET_USER_BY_IB_ACTION = {
    type: string,
    payload: any
};

export type LOAD_MORE_USERS_ACTION = {
    type: string
}

export function loadUsers(): LOAD_USERs_ACTION {
    debugger;
    return async (dispatch, getState) => {
        // const state = getState();
        dispatch({ type: UiTypes.UI_LOADING });
        debugger;
        let response = await userProxyService.getUsers();
        debugger;
        let users: any;
        users = await response.json();
        debugger;
        if (response.status === 200) {
            dispatch({ type: UiTypes.UI_LOADING });
            dispatch({ type: types.LOAD_USERS, payload: users });
        } else {
            dispatch({ type: UiTypes.UI_LOADING });
        }
    };
}

export function loadMoreUsers(): LOAD_MORE_USERS_ACTION {
    debugger;
    return async (dispatch, getState) => {
        // const state = getState();
        //  dispatch({ type: UiTypes.UI_LOADING });
        // debugger;
        // let response = await userProxyService.getUsers();
        // debugger;
        // let users: any;
        // users = await response.json();
        // debugger;
        // if (response.status === 200) {
        //     //   dispatch({ type: UiTypes.UI_LOADING });
        //     dispatch({ type: types.LOAD_USERS, payload: users });
        // } else {
        // }
        dispatch({ type: types.LOAD_MORE_USERS })
    };
}


export function GetUserById(userId: number): GET_REQUEST_BY_IB_ACTION {
    debugger;
    return async (dispatch, getState) => {
        debugger;
        dispatch({ type: UiTypes.UI_LOADING });

        let response = await userProxyService.getUserById(userId);
        debugger;
        let user: any;
        user = await response.json();
        debugger
        if (response.status === 200) {
            debugger;
            dispatch({ type: types.GET_USER_BY_IB, payload: user });
            dispatch({ type: UiTypes.UI_LOADING });

        } else {
            dispatch({ type: UiTypes.UI_LOADING });
        }
    };
}