import { GeralTasks } from '../../Models/geralTasks';
import { RequestStatus } from '../../Models/RequestStatus';

export interface GeralTaskState {
    geralTasks?: GeralTasks | null;
    message?: string | null;
    status: RequestStatus | null;
}
