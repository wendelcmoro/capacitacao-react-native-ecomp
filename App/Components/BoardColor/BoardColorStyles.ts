import { ViewStyle, TextStyle } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import appColors from '../../Themes/appColors';

export default {
    boardText: {
        padding: wp('0.5%'),
        fontFamily: 'Metropolis-Medium',
        color: 'white',
        fontSize: hp('1.5%'),
        textAlign: 'center',
    } as TextStyle,
};
