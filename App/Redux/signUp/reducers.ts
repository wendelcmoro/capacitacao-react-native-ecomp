import { createReducer, Reducer, AnyAction } from '@reduxjs/toolkit';

import { SignUpState } from './state';
import { RequestStatus } from '../../Models/RequestStatus';
import { SignUpActionTypes } from './actionTypes';

const initialState: SignUpState = {
    user: null,
    message: null,
    status: RequestStatus.NOOP,
};

const signUpRequest: Reducer = (state: SignUpState): SignUpState => {
    return { ...state, status: RequestStatus.WIP };
};

const signUpSuccess: Reducer = (
    state: SignUpState,
    actions: AnyAction,
): SignUpState => {
    return { ...state, user: actions.payload, status: RequestStatus.SUCCESS };
};

const signUpFailure: Reducer = (
    state: SignUpState,
    actions: AnyAction,
): SignUpState => {
    return {
        ...state,
        message: actions.payload,
        status: RequestStatus.FAILURE,
    };
};

const cleanState: Reducer = (state: SignUpState): SignUpState => {
    return { ...state, status: RequestStatus.NOOP };
};

export const signUpReducer: Reducer = createReducer(initialState, {
    [SignUpActionTypes.SIGNUP_REQUEST]: signUpRequest,
    [SignUpActionTypes.SIGNUP_SUCCESS]: signUpSuccess,
    [SignUpActionTypes.SIGNUP_FAILURE]: signUpFailure,
    [SignUpActionTypes.CLEAN_STATE]: cleanState,
});
