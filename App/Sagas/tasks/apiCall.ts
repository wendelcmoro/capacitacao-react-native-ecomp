import { ApiResponse } from 'apisauce';

import { Tasks } from '../../Models/tasks';
import { api } from '../../Services/api';

export const taskCall = {
    tasksRequest: (id: number): Promise<ApiResponse<Tasks>> => {
        return api.get<Tasks>('/api/last/' + id);
    },
};

export type taskCall = typeof taskCall;
