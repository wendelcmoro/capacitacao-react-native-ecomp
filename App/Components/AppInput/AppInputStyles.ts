import { ViewStyle } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import appColors from '../../Themes/appColors';

export default {
    inputContainer: {
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: '#f8c60f',
        width: wp('70%'), 
        height: hp('6%'),
        paddingLeft: wp('5%'),
        fontSize: hp('2.5%'),
        borderRadius: 15,
    } as ViewStyle,
};
