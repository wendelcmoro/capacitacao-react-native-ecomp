import { all, takeLatest } from 'redux-saga/effects';

import { AuthenticationActionTypes } from '../Redux/authentication/actionTypes';
import { loginRequest, userRequest, tokenRequest } from './authentication/sagas';
import { authenticationCall } from './authentication/apiCall';

import { SignUpActionTypes } from '../Redux/signUp/actionTypes';
import { signUpRequest } from './signUp/sagas';
import { signUpCall } from './signUp/apiCall';

import { PointsActionTypes } from '../Redux/points/actionTypes';
import { pointsRequest } from './points/sagas';
import { pointsCall } from './points/apiCall';

import { TaskActionTypes } from '../Redux/tasks/actionTypes';
import { taskRequest } from './tasks/sagas';
import { taskCall } from './tasks/apiCall';

import { RankingActionTypes } from '../Redux/ranking/actionTypes';
import { rankingRequest } from './ranking/sagas';
import { rankingCall } from './ranking/apiCall';

import { GeralTaskActionTypes } from '../Redux/geralTasks/actionTypes';
import { geralTaskRequest, sendTaskDoneRequest } from './geralTasks/sagas';
import { geralTaskCall } from './geralTasks/apiCall';

export default function* rootSagas() {
    yield all([
        takeLatest(
            AuthenticationActionTypes.LOGIN_REQUEST,
            loginRequest,
            authenticationCall,
        ),
        takeLatest(
            AuthenticationActionTypes.USER_REQUEST,
            userRequest,
            authenticationCall,
        ),
        takeLatest(
            PointsActionTypes.POINTS_REQUEST,
            pointsRequest,
            pointsCall,
        ),
        takeLatest(
            TaskActionTypes.TASK_REQUEST,
            taskRequest,
            taskCall,
        ),
        takeLatest(
            RankingActionTypes.RANKING_REQUEST,
            rankingRequest,
            rankingCall,
        ),
        takeLatest(
            GeralTaskActionTypes.GERALTASK_REQUEST,
            geralTaskRequest,
            geralTaskCall,
        ),
        takeLatest(
            GeralTaskActionTypes.GERALTASKDONE_REQUEST,
            sendTaskDoneRequest,
            geralTaskCall,
        ),
        // takeLatest(
        //     AuthenticationActionTypes.TOKEN_REQUEST,
        //     tokenRequest,
        //     authenticationCall,
        // ),
        takeLatest(SignUpActionTypes.SIGNUP_REQUEST, signUpRequest, signUpCall),
    ]);
}
