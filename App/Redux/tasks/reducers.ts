import { createReducer, Reducer, AnyAction } from '@reduxjs/toolkit';

import { TaskState } from './state';
import { TaskActionTypes } from './actionTypes';
import { RequestStatus } from '../../Models/RequestStatus';

const initialState: TaskState = {
    tasks: null,
    message: null,
    status: RequestStatus.NOOP,
};

const taskRequest: Reducer = (
    state: TaskState,
): TaskState => {
    return {
        ...state,
        status: RequestStatus.WIP,
    };
};

const taskSuccess: Reducer = (
    state: TaskState,
    action: AnyAction,
): TaskState => {
    return { ...state, tasks: action.payload, status: RequestStatus.SUCCESS };
};

const taskFailure: Reducer = (
    state: TaskState,
    action: AnyAction,
): TaskState => {
    return { ...state, message: action.payload, status: RequestStatus.FAILURE };
};

const cleanState: Reducer = (
    state: TaskState,
): TaskState => {
    return { ...state, status: RequestStatus.NOOP };
};

export const taskReducer: Reducer = createReducer(initialState, {
    [TaskActionTypes.TASK_REQUEST]: taskRequest,
    [TaskActionTypes.TASK_SUCCESS]: taskSuccess,
    [TaskActionTypes.TASK_FAILURE]: taskFailure,
    [TaskActionTypes.CLEAN_STATE]: cleanState,
});
