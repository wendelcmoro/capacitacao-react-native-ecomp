import { ViewStyle, TextStyle } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import appColors from '../../Themes/appColors';

export default {
    posNumber: {
        alignSelf: 'center',
        fontFamily: 'Metropolis-Medium',
        color: '#f8c60f',
        fontSize: hp('2%'),
    }  as TextStyle,
};
