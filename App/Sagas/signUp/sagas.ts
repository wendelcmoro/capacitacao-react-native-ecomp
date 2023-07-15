import { ApiResponse } from 'apisauce';
import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { signUpCall } from './apiCall';
import { User } from '../../Models/User';
import { SignUpActions } from '../../Redux/signUp/actionCreators';
import { AuthenticationActions } from '../../Redux/authentication/actionCreators';

export function* signUpRequest(instance: signUpCall, action: AnyAction) {
    try {
        const response: ApiResponse<any> = yield call(
            instance.signUpRequest,
            action.payload,
        );
        console.log(response.data);
        if (response.ok) {
            const { user, token } = response.data.dados;
            const newUser: User = { ...user, token };
            yield put(SignUpActions.signUpSuccess(newUser));
            yield put(AuthenticationActions.loginSuccess(newUser));
        } else {
            const error = response.data.mensagem;
            yield put(SignUpActions.signUpFailure(error));
        }
    } catch (error) {
        yield put(SignUpActions.signUpFailure(error.message));
    }
}
