import { ApiResponse } from 'apisauce';
import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { taskCall } from './apiCall';
import { TaskActions } from '../../Redux/tasks/actionCreators';
import { Tasks } from '../../Models/tasks';

export function* taskRequest(instance: taskCall, action: AnyAction) {
    try {
        const response: ApiResponse<any> = yield call(
            instance.tasksRequest, 
            action.payload,
        );
        console.log(response);
        if (response.ok) {
            const data = response.data.Dados;
            const tasks: Tasks = {
                tasks: data.Tasks,
            };
            //console.log(tasks.id);
            yield put(TaskActions.taskSuccess(tasks));
        } else {
            const error = response.data.Mensagem;
            yield put(TaskActions.taskFailure(error));
        }
    } catch (error) {
        yield put(TaskActions.taskFailure(error.message));
    }
}