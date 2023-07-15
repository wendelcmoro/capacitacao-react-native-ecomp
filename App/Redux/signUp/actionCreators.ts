import { createAction } from '@reduxjs/toolkit';

import { SignUp } from '../../Models/SignUp';
import { SignUpActionTypes } from './actionTypes';
import { User } from '../../Models/User';

export const SignUpActions = {
    signUpRequest: createAction<SignUp>(SignUpActionTypes.SIGNUP_REQUEST),
    signUpSuccess: createAction<User>(SignUpActionTypes.SIGNUP_SUCCESS),
    signUpFailure: createAction<string>(SignUpActionTypes.SIGNUP_FAILURE),

    cleanState: createAction(SignUpActionTypes.CLEAN_STATE),
};

export type SignUpActions = typeof SignUpActions;
