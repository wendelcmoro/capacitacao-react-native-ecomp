import { ApiResponse } from 'apisauce';

import { api } from '../../Services/api';
import { SignUp } from '../../Models/SignUp';
import { User } from '../../Models/User';

export const signUpCall = {
    signUpRequest: (signUpInfo: SignUp): Promise<ApiResponse<User>> => {
        return api.post<User>('/api/registro', signUpInfo);
    },
};

export type signUpCall = typeof signUpCall;
