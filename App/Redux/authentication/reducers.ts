import { createReducer, Reducer, AnyAction } from '@reduxjs/toolkit';

import { AuthenticationState } from './state';
import { AuthenticationActionTypes } from './actionTypes';
import { RequestStatus } from '../../Models/RequestStatus';

const initialState: AuthenticationState = {
    user: null,
    remember: null,
    message: null,
    status: RequestStatus.NOOP,
};

const loginRequest: Reducer = (
    state: AuthenticationState,
    action: AnyAction,
): AuthenticationState => {
    return {
        ...state,
        remember: action.payload.remember,
        status: RequestStatus.WIP,
    };
};

const loginSuccess: Reducer = (
    state: AuthenticationState,
    action: AnyAction,
): AuthenticationState => {
    return { ...state, user: action.payload, status: RequestStatus.SUCCESS };
};

const loginFailure: Reducer = (
    state: AuthenticationState,
    action: AnyAction,
): AuthenticationState => {
    return { ...state, message: action.payload, status: RequestStatus.FAILURE };
};

const tokenRequest: Reducer = (
    state: AuthenticationState,
    action: AnyAction,
): AuthenticationState => {
    return { ...state };
};

const tokenSuccess: Reducer = (
    state: AuthenticationState,
    action: AnyAction,
): AuthenticationState => {
    return { ...state, user: action.payload };
};

const tokenFailure: Reducer = (
    state: AuthenticationState,
    action: AnyAction,
): AuthenticationState => {
    return { ...state };
};

const userRequest: Reducer = (
    state: AuthenticationState,
    action: AnyAction,
): AuthenticationState => {
    return { ...state, status: RequestStatus.WIP,};
};

const userFailure: Reducer = (
    state: AuthenticationState,
    action: AnyAction,
): AuthenticationState => {
    return { ...state, status: RequestStatus.FAILURE};
};

const userSuccess: Reducer = (
    state: AuthenticationState,
    action: AnyAction,
): AuthenticationState => {
    return { ...state, user: action.payload, status: RequestStatus.SUCCESS};
};

const logoutRequest: Reducer = (): AuthenticationState => {
    return initialState;
};

const cleanState: Reducer = (
    state: AuthenticationState,
): AuthenticationState => {
    return { ...state, status: RequestStatus.NOOP };
};

export const authenticationReducer: Reducer = createReducer(initialState, {
    [AuthenticationActionTypes.LOGIN_REQUEST]: loginRequest,
    [AuthenticationActionTypes.LOGIN_SUCCESS]: loginSuccess,
    [AuthenticationActionTypes.LOGIN_FAILURE]: loginFailure,
    [AuthenticationActionTypes.TOKEN_REQUEST]: tokenRequest,
    [AuthenticationActionTypes.TOKEN_SUCCESS]: tokenSuccess,
    [AuthenticationActionTypes.TOKEN_FAILURE]: tokenFailure,
    [AuthenticationActionTypes.LOGOUT_REQUEST]: logoutRequest,
    [AuthenticationActionTypes.CLEAN_STATE]: cleanState,
    [AuthenticationActionTypes.USER_REQUEST]: userRequest,
    [AuthenticationActionTypes.USER_SUCCESS]: userSuccess,
    [AuthenticationActionTypes.USER_FAILURE]: userFailure,
});
