import { ApiResponse } from 'apisauce';
import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { rankingCall } from './apiCall';
import { RankingActions } from '../../Redux/ranking/actionCreators';
import { Ranking } from '../../Models/ranking';

export function* rankingRequest(instance: rankingCall, action: AnyAction) {
    try {
        const response: ApiResponse<any> = yield call(
            instance.rankingRequest, 
            action.payload,
        );
        
        console.log(response.data.Dados);
        if (response.ok) {
            const data = response.data;
            const ranking = {
            //    test: data.Dados,
                ranking: data.Dados,
             };
            //console.log(tasks.id);
            yield put(RankingActions.rankingSuccess(ranking));
        } else {
            const error = response.data.Mensagem;
            yield put(RankingActions.rankingFailure(error));
        }
    } catch (error) {
        yield put(RankingActions.rankingFailure(error.message)); 
    }
}