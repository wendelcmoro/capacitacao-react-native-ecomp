import { ViewStyle, ImageStyle, TextStyle } from 'react-native';

import appColors from './appColors';

export default {
    centerView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: appColors.teal,
    } as ViewStyle,
    
    backgroundTeal: {
        backgroundColor: appColors.teal,
    } as ViewStyle,

    centerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    } as ImageStyle,

    centerText: {
        textAlign: 'center',
    } as TextStyle,
};
