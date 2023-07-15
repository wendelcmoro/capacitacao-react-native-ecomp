import { createAction } from '@reduxjs/toolkit';

import { PointsActionTypes } from './actionTypes';
import { Points } from '../../Models/Points';

export const PointsActions = {
    pointsRequest: createAction<number>(PointsActionTypes.POINTS_REQUEST),
    pointsSuccess: createAction<Points>(PointsActionTypes.POINTS_SUCCESS),
    pointsFailure: createAction<string>(PointsActionTypes.POINTS_FAILURE),

    cleanState: createAction(PointsActionTypes.CLEAN_STATE),
};

export type PointsActions = typeof PointsActions;
