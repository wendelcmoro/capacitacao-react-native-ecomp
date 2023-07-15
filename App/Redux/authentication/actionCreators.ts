import { createAction } from '@reduxjs/toolkit';

import { AuthenticationActionTypes } from './actionTypes';
import { User } from '../../Models/User';
import { Login } from '../../Models/Login';

export const AuthenticationActions = {
    loginRequest: createAction<Login>(AuthenticationActionTypes.LOGIN_REQUEST),
    loginSuccess: createAction<User>(AuthenticationActionTypes.LOGIN_SUCCESS),
    loginFailure: createAction<string>(AuthenticationActionTypes.LOGIN_FAILURE),

    tokenRequest: createAction<string>(AuthenticationActionTypes.TOKEN_REQUEST),
    tokenSuccess: createAction<User>(AuthenticationActionTypes.TOKEN_SUCCESS),
    tokenFailure: createAction<string>(AuthenticationActionTypes.TOKEN_FAILURE),

    userRequest: createAction<User>(AuthenticationActionTypes.USER_REQUEST),
    userSuccess: createAction<User>(AuthenticationActionTypes.USER_SUCCESS),
    userFailure: createAction<User>(AuthenticationActionTypes.USER_FAILURE),

    logoutRequest: createAction(AuthenticationActionTypes.LOGOUT_REQUEST),

    cleanState: createAction(AuthenticationActionTypes.CLEAN_STATE),
};

export type AuthenticationActions = typeof AuthenticationActions;
