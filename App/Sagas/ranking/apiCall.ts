import { ApiResponse } from 'apisauce';

import { Ranking } from '../../Models/ranking';
import { api } from '../../Services/api';

export const rankingCall = {
    rankingRequest: (user: string): Promise<ApiResponse<Ranking>> => {
        return api.get<Ranking>('/api/leaderboard');
    },
};

export type rankingCall = typeof rankingCall;
