import { Alert } from 'react-native';
import { ApiResponse } from 'apisauce';
import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { geralTaskCall } from './apiCall';
import { GeralTaskActions } from '../../Redux/geralTasks/actionCreators';
import { GeralTasks } from '../../Models/geralTasks';

export function* geralTaskRequest(instance: geralTaskCall, action: AnyAction) {
    try {
        const response: ApiResponse<any> = yield call(
            instance.geralTaskRequest,
            action.payload,
        );
        console.log(response.data);
        if (response.ok) {
            const data = response.data.Dados;
            const geralTasks: GeralTasks = {
                geralTasks: data,
            };
            yield put(GeralTaskActions.geralTaskSuccess(geralTasks));
        } else {
            const error = response.data.Mensagem;
            yield put(GeralTaskActions.geralTaskFailure(error));
        }
    } catch (error) {
        yield put(GeralTaskActions.geralTaskFailure(error.message));
    }
}

export function* sendTaskDoneRequest(instance: geralTaskCall, action: AnyAction) {
    try {
        const response: ApiResponse<any> = yield call(
            instance.sendTaskDoneRequest,
            action.payload,
        );
        console.log(response.data);
        if (response.data.Dados != null) {
            Alert.alert(
                "Tarefa",
                String(response.data.Mensagem),
                //"teste",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
            // const data = response.data.Dados;
            //     geralTasks: data,
            // };
            yield put(GeralTaskActions.sendTaskDoneSuccess(geralTasks));
        } else {
            const error = response.data;
            Alert.alert(
                "Tarefa",
                String(error.Mensagem),
                //"teste",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
            yield put(GeralTaskActions.sendTaskDoneFailure(error));
        }
    } catch (error) {
        yield put(GeralTaskActions.sendTaskDoneFailure(error.message));
    }
}