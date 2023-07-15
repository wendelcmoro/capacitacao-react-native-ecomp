import { createAction } from '@reduxjs/toolkit';

import { RankingActionTypes } from './actionTypes';
import { Ranking } from '../../Models/ranking';

export const RankingActions = {
    rankingRequest: createAction<string>(RankingActionTypes.RANKING_REQUEST),
    rankingSuccess: createAction<Ranking>(RankingActionTypes.RANKING_SUCCESS),
    rankingFailure: createAction<string>(RankingActionTypes.RANKING_FAILURE),

    cleanState: createAction(RankingActionTypes.CLEAN_STATE),
};

export type RankingActions = typeof RankingActions;
