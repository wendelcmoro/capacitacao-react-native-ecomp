import { createReducer, Reducer, AnyAction } from '@reduxjs/toolkit';

import { GeralTaskState } from './state';
import { GeralTaskActionTypes } from './actionTypes';
import { RequestStatus } from '../../Models/RequestStatus';

const initialState: GeralTaskState = {
    geralTasks: null,
    message: null,
    status: RequestStatus.NOOP,
};

const geralTaskRequest: Reducer = (
    state: GeralTaskState,
): GeralTaskState => {
    return {
        ...state,
        status: RequestStatus.WIP,
    };
};

const geralTaskSuccess: Reducer = (
    state: GeralTaskState,
    action: AnyAction,
): GeralTaskState => {
    return { ...state, geralTasks: action.payload, status: RequestStatus.SUCCESS };
};

const geralTaskFailure: Reducer = (
    state: GeralTaskState,
    action: AnyAction,
): GeralTaskState => {
    return { ...state, message: action.payload, status: RequestStatus.FAILURE };
};

const sendTaskDoneRequest: Reducer = (
    state: GeralTaskState,
): GeralTaskState => {
    return {
        ...state,
        status: RequestStatus.WIP,
    };
};

const sendTaskDoneSuccess: Reducer = (
    state: GeralTaskState,
    action: AnyAction,
): GeralTaskState => {
    return { ...state, geralTasks: action.payload, status: RequestStatus.SUCCESS };
};

const sendTaskDoneFailure: Reducer = (
    state: GeralTaskState,
    action: AnyAction,
): GeralTaskState => {
    return { ...state, message: action.payload, status: RequestStatus.FAILURE };
};

const cleanState: Reducer = (
    state: GeralTaskState,
): GeralTaskState => {
    return { ...state, status: RequestStatus.NOOP };
};

export const geralTasksReducer: Reducer = createReducer(initialState, {
    [GeralTaskActionTypes.GERALTASK_REQUEST]: geralTaskRequest,
    [GeralTaskActionTypes.GERALTASK_SUCCESS]: geralTaskSuccess,
    [GeralTaskActionTypes.GERALTASK_FAILURE]: geralTaskFailure,
    [GeralTaskActionTypes.GERALTASKDONE_REQUEST]: sendTaskDoneRequest,
    [GeralTaskActionTypes.GERALTASKDONE_SUCCESS]: sendTaskDoneSuccess,
    [GeralTaskActionTypes.GERALTASKDONE_FAILURE]: sendTaskDoneFailure,
    [GeralTaskActionTypes.CLEAN_STATE]: cleanState,
});
