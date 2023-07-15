import { Tasks } from '../../Models/tasks';
import { RequestStatus } from '../../Models/RequestStatus';

export interface TaskState {
    tasks?: Tasks | null;
    message?: string | null;
    status: RequestStatus | null;
}
