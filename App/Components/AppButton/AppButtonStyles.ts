import { TextStyle } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    buttonContainer: {
        backgroundColor: appColors.buttonBlue,
        marginLeft: wp('20%'),
        marginRight: wp('20%'),
        padding: wp('2.5%'),
        borderRadius: wp('10%'),
    } as TextStyle,

    textButton: {
        color: appColors.white,
        fontWeight: 'bold',
        fontSize: hp('4%'),
    } as TextStyle,
};
