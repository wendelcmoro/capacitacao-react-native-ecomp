import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    optionContainer: {
        marginTop: hp('3%'),
    } as ViewStyle,

    appSplashLogo: {
        // flexDirection: 'column',
        //justifyContent: 'center',
        marginTop: hp('10%'),
        alignSelf:'center',
        width: wp(50),
        height: hp(10),
    } as ImageStyle,

    dataContainer: {
        alignSelf: 'center',
        marginTop: hp('5%'),
        // marginLeft: hp('5%'),
        // marginRight: hp('5%'),
        width: hp('50%'),
        backgroundColor: "white",
        borderRadius: 20,
    } as ViewStyle,

    textFormat: {
        fontFamily: 'Metropolis-Regular',
        marginTop: hp('5%'),
        color: '#06a294',
        marginLeft: hp('4%'),
        marginRight: hp('4%'),
        textAlign: 'center',
        fontSize: wp('7%'),
    } as TextStyle,

    messageFormat: {
        fontFamily: 'Metropolis-Light',
        marginTop: hp('3%'),
        color: '#4a4a4a',
        marginLeft: hp('1%'),
        marginRight: hp('1%'),
        textAlign: 'center',
        fontSize: wp('4.5%'),
    }as TextStyle,
  
    icon: {
        marginTop: hp('5%'),
        marginBottom: hp('7%'),
        alignSelf: 'center',
        width: hp('7.5%'),
        backgroundColor: "white",
        borderColor: "#f8c60f",
        borderWidth: 1,
        borderRadius: 30,
    } as ViewStyle,
};
