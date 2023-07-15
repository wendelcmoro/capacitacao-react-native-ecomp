import { Points } from '../../Models/Points';
import { RequestStatus } from '../../Models/RequestStatus';

export interface PointsState {
    points?: Points | null;
    message?: string | null;
    status: RequestStatus | null;
}
