import { Dimensions, ViewStyle } from 'react-native';
//import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    centerView: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        backgroundColor: appColors.teal,
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,
    appSplashLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '20%',
    }
};
