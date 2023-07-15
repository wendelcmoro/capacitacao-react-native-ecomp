import React from 'react';
import { View, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppInput from '../../Components/AppInput/AppInput';
import AppButton from '../../Components/AppButton/AppButton';

import appStyles from '../../Themes/appStyles';
import styles from './SignUpScreenStyles';
import { RootState } from '../../Redux';
import { SignUpActions } from '../../Redux/signUp/actionCreators';
import { SignUp } from '../../Models/SignUp';
import { SignUpState } from '../../Redux/signUp/state';
import { RequestStatus } from '../../Models/RequestStatus';

export interface Props {
    navigation: NavigationProp<any>;
    signUpActions: SignUpActions;
    signUpState: SignUpState;
}

export interface State {
    name: string;
    email: string;
    password: string;
    passwordConf: string;
}

class SignUpScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConf: '',
        };
    }

    onChangeName = (name: string) => {
        this.setState({
            name,
        });
    };

    onChangeEmail = (email: string) => {
        this.setState({
            email,
        });
    };

    onChangePassword = (password: string) => {
        this.setState({
            password,
        });
    };

    onChangePasswordConf = (passwordConf: string) => {
        this.setState({
            passwordConf,
        });
    };

    onRegistrarPress = () => {
        const { name, email, password, passwordConf } = this.state;
        const { signUpActions } = this.props;
        const newUser: SignUp = {
            nome: name,
            email,
            senha: password,
            senha_confirmation: passwordConf,
        };
        signUpActions.signUpRequest(newUser);
    };

    componentDidUpdate() {
        const { signUpState, navigation } = this.props;
        if (signUpState.status === RequestStatus.SUCCESS) {
            navigation.goBack();
        }
    }

    render() {
        const { signUpState } = this.props;
        const { name, email, password, passwordConf } = this.state;
        const loading = RequestStatus.WIP === signUpState.status;
        const showError = RequestStatus.FAILURE === signUpState.status;

        return (
            <View style={appStyles.centerView}>
                <View style={styles.optionContainer}>
                    <AppInput
                        placeholder={'Nome'}
                        value={name}
                        onChangeText={text => this.onChangeName(text)}
                    />
                </View>

                <View style={styles.optionContainer}>
                    <AppInput
                        placeholder={'Email'}
                        value={email}
                        onChangeText={text => this.onChangeEmail(text)}
                    />
                </View>

                <View style={styles.optionContainer}>
                    <AppInput
                        placeholder={'Senha'}
                        isPassword={true}
                        value={password}
                        onChangeText={text => this.onChangePassword(text)}
                    />
                </View>

                <View style={styles.optionContainer}>
                    <AppInput
                        placeholder={'Confirmação de senha'}
                        isPassword={true}
                        value={passwordConf}
                        onChangeText={text => this.onChangePasswordConf(text)}
                    />
                </View>

                {showError && (
                    <View style={styles.optionContainer}>
                        <Text style={styles.error}>
                            {signUpState.message && signUpState.message}
                        </Text>
                    </View>
                )}

                {loading ? (
                    <View style={styles.optionContainer}>
                        <AppButton text={'Carregando...'} onPress={() => {}} />
                    </View>
                ) : (
                    <View style={styles.optionContainer}>
                        <AppButton
                            text={'Registrar'}
                            onPress={() => this.onRegistrarPress()}
                        />
                    </View>
                )}
            </View>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    signUpState: state.signUp,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        signUpActions: bindActionCreators(SignUpActions, dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUpScreen);
