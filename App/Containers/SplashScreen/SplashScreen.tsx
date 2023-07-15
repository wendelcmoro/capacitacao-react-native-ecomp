import React from 'react';
import { View, Image } from 'react-native';

import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';;

// import appColors from '../../Themes/appColors';
import appImages from '../../Themes/appImages';
import styles from './SplashScreenStyles';

import { RequestStatus } from '../../Models/RequestStatus';
import { RootState } from '../../Redux';

export interface Props {
}

export interface State {}

class SplashScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    
    render() {
        return (
            <View style={styles.centerView}>
                <Image source={appImages.heraLogo} style={styles.appSplashLogo}/>
            </View>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SplashScreen);

