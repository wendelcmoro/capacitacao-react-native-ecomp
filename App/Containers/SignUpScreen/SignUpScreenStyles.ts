import { ViewStyle, TextStyle } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    optionContainer: {
        marginBottom: hp('5%'),
    } as ViewStyle,

    error: {
        marginLeft: wp('15%'),
        marginRight: wp('15%'),
        padding: wp('2.5%'),
        color: appColors.red,
    } as TextStyle,
};
