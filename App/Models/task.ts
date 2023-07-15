import { Category } from './category';

export interface Task {
    id?: number | null;
    description?: string | null;
    points?: number | null;
    xp?: number | null;
    howManyTimes?: number | null;
    category?: Category | null;
}
