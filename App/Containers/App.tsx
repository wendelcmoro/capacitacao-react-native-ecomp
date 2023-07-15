import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../Redux';
import RootContainer from './RootContainer/RootContainer';
import SplashScreen from './SplashScreen/SplashScreen';
import TasksScreen from './TasksScreen/TasksScreen';
import ForgetPasswordScreen from './ForgetPasswordScreen/ForgetPasswordScreen';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<SplashScreen />} persistor={persistor}>
                <RootContainer />
            </PersistGate>
        </Provider>
    );
};

export default App;



