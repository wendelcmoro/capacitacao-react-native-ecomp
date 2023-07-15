import { ViewStyle, TextStyle } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import appColors from '../../Themes/appColors';

export default {
    rankingNumberContainer: {
        width: wp('14%'),
    } as ViewStyle,

    rankingNumber: {
        fontFamily: 'Metropolis-Medium',
        marginLeft: wp('4%'),
        color: '#06a294',
        fontSize: hp('3%'),
    } as TextStyle,

    rankingNameContainer: {
        width: wp('35%'),
    } as ViewStyle,

    rankingName: {
        textAlign: 'left',
        fontFamily: 'Metropolis-Medium',
        color: '#4a4a4a',
        fontSize: hp('2.7%'),
    } as TextStyle,

    rankUserName: {
        width: wp('35%'),
    } as ViewStyle,

    rankingUserBoard: {
        marginTop: hp('1%'),
        width: wp('22%'),
    } as ViewStyle,

    rankingPointsContainer: {
        width: wp('28%'),
    } as ViewStyle,

    rankingPoints: {
        textAlign: 'right',
        fontFamily: 'Metropolis-Medium',
        color: '#4a4a4a',
        fontSize: hp('3%'),
        fontWeight: 'bold', 
    } as TextStyle,

    borderStyle: {
        marginTop: hp('1.2%'),
        marginLeft: wp('10%'),
        marginBottom: hp('2%'),
        marginRight: wp('1%'),
        borderBottomWidth: 1,
        borderColor: '#a8a8a8',
        width: wp('74%'),
    } as ViewStyle,
};
