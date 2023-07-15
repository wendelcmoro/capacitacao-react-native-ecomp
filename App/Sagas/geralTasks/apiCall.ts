import { ApiResponse } from 'apisauce';

import { GeralTasks } from '../../Models/geralTasks';
import { api } from '../../Services/api';

export const geralTaskCall = {
    geralTaskRequest: (id: number): Promise<ApiResponse<GeralTasks>> => {
        return api.get<GeralTasks>('/api/task');
    },

    sendTaskDoneRequest: (id: number): Promise<ApiResponse<GeralTasks>> => {
        return api.put<GeralTasks>('/api/done/' + id);
    },
};

export type geralTaskCall = typeof geralTaskCall;
