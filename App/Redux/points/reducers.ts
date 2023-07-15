import { createReducer, Reducer, AnyAction } from '@reduxjs/toolkit';

import { PointsState } from './state';
import { PointsActionTypes } from './actionTypes';
import { RequestStatus } from '../../Models/RequestStatus';

const initialState: PointsState = {
    points: null,
    message: null,
    status: RequestStatus.NOOP,
};

const pointsRequest: Reducer = (
    state: PointsState,
): PointsState => {
    return {
        ...state,
        status: RequestStatus.WIP,
    };
};

const pointsSuccess: Reducer = (
    state: PointsState,
    action: AnyAction,
): PointsState => {
    return { ...state, points: action.payload, status: RequestStatus.SUCCESS };
};

const pointsFailure: Reducer = (
    state: PointsState,
    action: AnyAction,
): PointsState => {
    return { ...state, message: action.payload, status: RequestStatus.FAILURE };
};

const cleanState: Reducer = (
    state: PointsState,
): PointsState => {
    return { ...state, status: RequestStatus.NOOP };
};

export const pointsReducer: Reducer = createReducer(initialState, {
    [PointsActionTypes.POINTS_REQUEST]: pointsRequest,
    [PointsActionTypes.POINTS_SUCCESS]: pointsSuccess,
    [PointsActionTypes.POINTS_FAILURE]: pointsFailure,
    [PointsActionTypes.CLEAN_STATE]: cleanState,
});
