import { Token } from './Token';

export interface User {
    id?: number | null;
    name?: string | null;
    email?: string | null;
    board?: string | null;
    level?: string | null;
    token?: Token | null;
}
