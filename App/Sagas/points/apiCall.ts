import { ApiResponse } from 'apisauce';

import { Points } from '../../Models/Points';
import { api } from '../../Services/api';

export const pointsCall = {
    pointsRequest: (id: number): Promise<ApiResponse<Points>> => {
        return api.get<Points>('/api/points/' + id);
    },
};

export type pointsCall = typeof pointsCall;
