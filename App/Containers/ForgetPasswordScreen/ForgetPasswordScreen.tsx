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
import styles from './ForgetPasswordScreenStyles';
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
            email: ''
        };
    }

    onChangeEmail = (text: string) => {
        this.setState({
            email: text,
        });
    };

    onSendEmailPress = () => {
        this.props.navigation.navigate('main', { screen: 'LoginScreen' });
    };

    render() {
        const { email } = this.state;
        const { authenticationState } = this.props;
        const loading = authenticationState.status == RequestStatus.WIP;
        return (
             <KeyboardAwareScrollView  contentContainerStyle={{flexGrow: 1}}>
            {/* <KeyboardAvoidingView style={{ flex: 1, height:'100%' }}> */}
                <View style={{backgroundColor: '#2cd1c2', flex: 1}}>

                    <Image source={appImages.heraLogo} style={styles.appSplashLogo}/>

                    <View style={[styles.dataContainer]}>
                        <Text style={[styles.textFormat]}>
                            Esqueci minha senha
                        </Text>

                        <Text style={[styles.messageFormat]}>
                            Tudo bem, isso acontece com todo mundo.{"\n"}
                            {"\n"}
                            Insira seus dados abaixo e aguarde o e-mail de recuperação.
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

                        {loading ? (
                            <View style={[styles.optionContainer]}>
                                <AppButton text={'Enviando...'} onPress={() => {}} />
                            </View>
                        ) : (
                                <TouchableOpacity
                                    onPress={() => this.onSendEmailPress()}
                                    activeOpacity= {0.7}
                                >
                                    <Text style={[styles.buttonContainer]}>Enviar recuperação de senha</Text>
                                </TouchableOpacity>
                        )}

                    </View>

                    
                </View>
            {/* </KeyboardAvoidingView> */}
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
