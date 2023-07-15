import { Ranking } from '../../Models/ranking';
import { RequestStatus } from '../../Models/RequestStatus';

export interface RankingState {
    ranking: Ranking | null;
    message?: string | null;
    status: RequestStatus | null;
}
