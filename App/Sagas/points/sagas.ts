import { ApiResponse } from 'apisauce';
import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { pointsCall } from './apiCall';
import { PointsActions } from '../../Redux/points/actionCreators';
import { Points } from '../../Models/Points';

export function* pointsRequest(instance: pointsCall, action: AnyAction) {
    try {
        const response: ApiResponse<any> = yield call(
            instance.pointsRequest, 
            action.payload,
        );
        console.log(response);
        if (response.ok) {
            const data = response.data.Dados;
            const points: Points = {
                Points: data.Points,
            };
            yield put(PointsActions.pointsSuccess(points));
        } else {
            const error = response.data.Mensagem;
            yield put(PointsActions.pointsFailure(error));
        }
    } catch (error) {
        yield put(PointsActions.pointsFailure(error.message));
    }
}