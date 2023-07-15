import { createAction } from '@reduxjs/toolkit';

import { TaskActionTypes } from './actionTypes';
import { Tasks } from '../../Models/tasks';

export const TaskActions = {
    taskRequest: createAction<number>(TaskActionTypes.TASK_REQUEST),
    taskSuccess: createAction<Tasks>(TaskActionTypes.TASK_SUCCESS),
    taskFailure: createAction<string>(TaskActionTypes.TASK_FAILURE),

    cleanState: createAction(TaskActionTypes.CLEAN_STATE),
};

export type TaskActions = typeof TaskActions;
