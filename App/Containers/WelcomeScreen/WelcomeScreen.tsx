import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();

import AppButton from '../../Components/AppButton/AppButton';
import AppInput from '../../Components/AppInput/AppInput';
import AppChecked from '../../Components/AppChecked/AppChecked';

import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { Login } from '../../Models/Login';
import { RootState } from '../../Redux';
import appStyles from '../../Themes/appStyles';
import styles from './WelcomeScreenStyles';
import { RequestStatus } from '../../Models/RequestStatus';
import appImages from '../../Themes/appImages';


export interface Props {
    navigation: NavigationProp<any>;
    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;
}


class LoginScreen extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

    }

    onPress = () => {
        this.props.navigation.navigate('LoginScreen');
    };

    render() {
        return (
            <View style={{backgroundColor: '#2cd1c2', flex: 1}}>

                <Image source={appImages.heraLogo} style={styles.appSplashLogo}/>

                <View style={[styles.dataContainer]}>
                    <Text style={[styles.textFormat]}>
                        Olá!
                    </Text>

                    <Text style={[styles.messageFormat]}>
                        Esse é o Ecomp Hera, aplicativo desenvolvido especialmente para você 
                        consultar e registrar seus pontos da gameficação individual. 
                        Aqui você encontrará um controle completo das tarefas realizadas, 
                        {'\n'}
                        seu nível e um ranking geral exclusivo para compartilhar 
                        experiências. Aproveite!
                    </Text>

                    <TouchableOpacity
                        onPress={() => this.onPress()}
                        activeOpacity= {0.7}
                    >
                        <View style={[styles.icon]}>
                            <Icon name="chevron-right" size={50} color="#06a294"/>
                        </View>
                    </TouchableOpacity>

                </View>

                
            </View>
           
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    authenticationState: state.authentication,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        authenticationActions: bindActionCreators(
            AuthenticationActions,
            dispatch,
        ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginScreen);

// export default LoginScreen;
