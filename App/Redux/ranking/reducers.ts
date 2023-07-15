import { createReducer, Reducer, AnyAction } from '@reduxjs/toolkit';

import { RankingState } from './state';
import { RankingActionTypes } from './actionTypes';
import { RequestStatus } from '../../Models/RequestStatus';

const initialState: RankingState = {
    ranking: null,
    message: null,
    status: RequestStatus.NOOP,
};

const rankingRequest: Reducer = (
    state: RankingState,
): RankingState => {
    return {
        ...state,
        status: RequestStatus.WIP,
    };
};

const rankingSuccess: Reducer = (
    state: RankingState,
    action: AnyAction,
): RankingState => {
    return { ...state, ranking: action.payload, status: RequestStatus.SUCCESS };
};

const rankingFailure: Reducer = (
    state: RankingState,
    action: AnyAction,
): RankingState => {
    return { ...state, message: action.payload, status: RequestStatus.FAILURE };
};

const cleanState: Reducer = (
    state: RankingState,
): RankingState => {
    return { ...state, status: RequestStatus.NOOP };
};

export const rankingReducer: Reducer = createReducer(initialState, {
    [RankingActionTypes.RANKING_REQUEST]: rankingRequest,
    [RankingActionTypes.RANKING_SUCCESS]: rankingSuccess,
    [RankingActionTypes.RANKING_FAILURE]: rankingFailure,
    [RankingActionTypes.CLEAN_STATE]: cleanState,
});
