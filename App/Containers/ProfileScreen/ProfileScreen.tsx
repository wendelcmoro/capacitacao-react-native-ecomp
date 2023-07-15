import React from 'react';
import { View, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppButton from '../../Components/AppButton/AppButton';

import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { RootState } from '../../Redux';
import appStyles from '../../Themes/appStyles';
import styles from './ProfileScreenStyles';

export interface Props {
    navigation: NavigationProp<any>;
    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;
}

export interface State {}

class ProfileScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    onLoginPress = () => {
        const { authenticationActions } = this.props;
        authenticationActions.logoutRequest();
    };

    render() {
        const { authenticationState } = this.props;
        return (
            <View style={[appStyles.centerView]}>
                <Text style={[appStyles.centerText, styles.greetingText]}>
                    Hello {authenticationState.user!.name}!
                </Text>

                <View style={[styles.optionContainer]}>
                    <AppButton
                        text={'LogOut'}
                        onPress={() => this.onLoginPress()}
                    />
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
)(ProfileScreen);
