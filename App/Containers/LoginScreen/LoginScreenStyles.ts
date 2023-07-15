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
        marginTop: hp('5%'),
        alignSelf: 'center',
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
        marginLeft: hp('5%'),
        textAlign: 'left',
        fontSize: wp('7%'),
    } as TextStyle,

    textInput: {
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: '#f8c60f',
        width: wp('70%'), 
        height: hp('6%'),
        paddingLeft: wp('5%'),
        fontSize: hp('2.5%'),
        borderRadius: 15,
    } as TextStyle,

    buttonContainer: {
        fontFamily: 'Metropolis-Regular',
        marginTop: hp('5%'),
        borderWidth: 1,
        backgroundColor: '#f8c60f',
        alignSelf: 'center',
        borderColor: 'gray',
        width: wp('70%'), 
        height: hp('6%'),
        fontSize: hp('2.5%'),
        paddingTop: hp('1%'),
        color: 'white',
        textAlign: 'center',
        borderRadius: 15,
    } as ViewStyle,

    forgetPassword: {
        fontFamily: 'Metropolis-Regular',
        marginTop: hp('5%'),
        marginBottom: hp('7%'),
        backgroundColor: 'white',
        alignSelf: 'center',
        fontSize: hp('2.5%'),
        color: '#06a294',
        textAlign: 'center',
    } as ViewStyle,

  
};
