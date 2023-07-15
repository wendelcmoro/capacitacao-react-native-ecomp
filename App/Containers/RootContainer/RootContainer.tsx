import React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppNavigator from '../../Navigation/AppNavigator';
import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { RootState } from '../../Redux';
import { RequestStatus } from '../../Models/RequestStatus';
import { Token } from '../../Models/Token';
import { EXPIRE_TIME } from '../../Services/api';

export interface Props {
    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;
}

export interface State {
    loggedIn: boolean;
}

class RootContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        if (props.authenticationState.user) {
            this.state = { loggedIn: true };
            // const token: Token = props.authenticationState.user!.token!;
            // const today = +new Date();
            // const diffTime = Math.abs(today - token.expires_date);
            // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            // if (diffDays > EXPIRE_TIME) {
            //     this.state = { loggedIn: false };
            // } else {
            //     props.authenticationActions.tokenRequest(token.access_token);
            // }
        } else {
            this.state = { loggedIn: false };
        }
    }

    shouldComponentUpdate(nextProps: Props, nexState: State) {
        const { authenticationState, authenticationActions } = nextProps;
        const { loggedIn } = nexState;
        const appStatus = authenticationState.status;

        if (appStatus == RequestStatus.SUCCESS) {
            authenticationActions.cleanState();
            this.setState({ loggedIn: true });
        }

        if (!authenticationState.user && loggedIn) {
            this.setState({ loggedIn: false });
            return false;
        }

        if (appStatus != RequestStatus.NOOP) {
            return false;
        }

        return true;
    }

    render() {
        const { loggedIn } = this.state;
        const Navigator = () => AppNavigator(loggedIn);
        return <Navigator />;
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
)(RootContainer);
