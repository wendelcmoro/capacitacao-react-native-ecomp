import React from 'react';
import { View, Text, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppButton from '../../Components/AppButton/AppButton';
import AppInput from '../../Components/AppInput/AppInput';
import AppChecked from '../../Components/AppChecked/AppChecked';

import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { Login } from '../../Models/Login';
import { RootState } from '../../Redux';
import appStyles from '../../Themes/appStyles';
import styles from './LoginScreenStyles';
import { RequestStatus } from '../../Models/RequestStatus';
import appImages from '../../Themes/appImages';

export interface Props {
    navigation: NavigationProp<any>;
    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;
}

export interface State {
    email: string;
    password: string;
    remember: boolean;
}

class LoginScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            remember: false,
        };
    }

    onChangeEmail = (text: string) => {
        this.setState({
            email: text,
        });
    };

    onChangePassword = (text: string) => {
        this.setState({
            password: text,
        });
    };

    onLoginPress = () => {
        const { authenticationActions } = this.props;
        const { email, password, remember } = this.state;
        const auth: Login = {
            email,
            password,
            remember,
        };
        authenticationActions.loginRequest(auth);
    };

    onSignUpPress = () => {
        this.props.navigation.navigate('main', { screen: 'ForgetPasswordScreen' });
    };

    onCheckedPress = (checked: boolean) => {
        this.setState({
            remember: checked,
        });
    };

    render() {
        const { email, password, remember } = this.state;
        const { authenticationState } = this.props;
        const loading = authenticationState.status == RequestStatus.WIP;
        return (

            <KeyboardAwareScrollView  contentContainerStyle={{flexGrow: 1}}>
                <View style={{backgroundColor: '#2cd1c2', flex: 1,}}>

                    <Image source={appImages.heraLogo} style={styles.appSplashLogo}/>

                    <View style={[styles.dataContainer]}>
                        <Text style={[styles.textFormat]}>
                            Entrar no Hera
                        </Text>
                        <View style={[styles.optionContainer]}>
                            <TextInput
                                style={[styles.textInput]}
                                placeholder={'E-mail'}
                                placeholderTextColor='#06a294'
                                autoCapitalize={'none'}
                                value={email}
                                onChangeText={text => this.onChangeEmail(text)}
                            />
                        </View>

                        <View style={[styles.optionContainer]}>
                            <TextInput
                                style={[styles.textInput]}
                                placeholder={'Senha'}
                                secureTextEntry={true}
                                placeholderTextColor='#06a294'
                                autoCapitalize={'none'}
                                value={password}
                                onChangeText={text => this.onChangePassword(text)}
                            />
                        </View>

                        {loading ? (
                            <View style={[styles.optionContainer]}>
                                <AppButton text={'Entrando...'} onPress={() => {}} />
                            </View>
                        ) : (
                            
                                <TouchableOpacity
                                    onPress={() => this.onLoginPress()}
                                    activeOpacity= {0.7}
                                    >
                                        <Text style={[styles.buttonContainer]} onPress={() => this.onLoginPress()}>Entrar</Text>
                                </TouchableOpacity>
                            
                        )}

                        <View>
                            <TouchableOpacity
                                onPress={() => this.onSignUpPress()}
                                activeOpacity= {0.7}
                                >
                                    <Text style={[styles.forgetPassword]}>Esqueci Minha Senha</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
            </KeyboardAwareScrollView>
           
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
