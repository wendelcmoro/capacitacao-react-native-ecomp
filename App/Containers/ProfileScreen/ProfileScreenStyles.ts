import { TextStyle, ViewStyle } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    greetingText: {
        color: appColors.darkgrey,
        fontWeight: 'bold',
        fontSize: hp('5%'),
    } as TextStyle,

    optionContainer: {
        marginTop: hp('5%'),
    } as ViewStyle,
};
