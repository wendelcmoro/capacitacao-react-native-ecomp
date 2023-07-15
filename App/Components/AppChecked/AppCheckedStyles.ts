import { TextStyle, ImageStyle, ViewStyle } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    textContainer: {
        marginLeft: wp('32%'),
        marginRight: wp('32%'),
        marginTop: hp('-3%'),
        padding: wp('2.5%'),
        borderRadius: wp('10%'),
    } as TextStyle,

    textLabel: {
        color: appColors.darkgrey,
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    } as TextStyle,

    image: {
        width: wp('5%'),
        height: hp('5%'),
        marginLeft: wp('2.5%'),
        marginTop: hp('-0.8%'),
    } as ImageStyle,

    touchable: {
        flexDirection: 'row',
    } as ViewStyle,
};
