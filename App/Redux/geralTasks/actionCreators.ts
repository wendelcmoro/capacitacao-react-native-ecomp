import { createAction } from '@reduxjs/toolkit';

import { GeralTaskActionTypes } from './actionTypes';
import { GeralTasks } from '../../Models/geralTasks';

export const GeralTaskActions = {
    geralTaskRequest: createAction<number>(GeralTaskActionTypes.GERALTASK_REQUEST),
    geralTaskSuccess: createAction<GeralTasks>(GeralTaskActionTypes.GERALTASK_SUCCESS),
    geralTaskFailure: createAction<string>(GeralTaskActionTypes.GERALTASK_FAILURE),

    sendTaskDoneRequest: createAction<number>(GeralTaskActionTypes.GERALTASKDONE_REQUEST),
    sendTaskDoneSuccess: createAction<GeralTasks>(GeralTaskActionTypes.GERALTASKDONE_SUCCESS),
    sendTaskDoneFailure: createAction<string>(GeralTaskActionTypes.GERALTASKDONE_FAILURE),

    cleanState: createAction(GeralTaskActionTypes.CLEAN_STATE),
};

export type GeralTaskActions = typeof GeralTaskActions;
