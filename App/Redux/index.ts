import {
    combineReducers,
    Reducer,
    applyMiddleware,
    createStore,
    compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootSagas from '../Sagas/index';
import { authenticationReducer } from './authentication/reducers';
import { signUpReducer } from './signUp/reducers';
import { pointsReducer } from './points/reducers';
import { taskReducer } from './tasks/reducers';
import { rankingReducer } from './ranking/reducers';
import { geralTasksReducer } from './geralTasks/reducers';

// App reducers
const rootReducer: Reducer = combineReducers({
    authentication: authenticationReducer,
    signUp: signUpReducer,
    points: pointsReducer,
    tasks: taskReducer,
    ranking: rankingReducer,
    geralTasks: geralTasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// Redux-Saga configuration
const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
const enhancers: any = [];

middlewares.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middlewares));

// Redux Persist configuration
const persistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['authentication'],
    stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = createStore(persistedReducer, compose(...enhancers));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);
