import { TextStyle, ImageStyle, ViewStyle } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    logoContainer: {
        height: hp('10%'),
        backgroundColor: "#2cd1c2",
        borderBottomRightRadius: 35,
        marginBottom: hp('1%'),
    } as ViewStyle,

    appLogo: {
        width: wp('20%'),
        height: hp('4%'),
        marginTop: hp('2.3%'),
        marginLeft: wp('10%'),
    } as ViewStyle,

    inRow: {
        display: "flex", 
        flexDirection: "row", 
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "center",
    } as ViewStyle,

    screenIconsContainer: {
        marginTop: hp('3%'),
        width: wp('20%'),
        height: hp('10%'),
        backgroundColor: 'white',
    } as ViewStyle,

    screenIcons: {
        borderTopWidth: 0,
        borderColor: '#f8c60f',
        flex: 1,
        paddingLeft: wp('10%'),
        paddingBottom: hp('3%'),
        bottom: 0,
        backgroundColor: 'white',
        height: hp('10%'),
        width: wp('100%'),
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center', 
        position: 'absolute',
    } as ViewStyle,     

    screenIconTextNotSelected: {
        fontFamily: 'Metropolis-Regular',
        color: '#4a4a4a',
        fontSize: hp('1.5%'),
    } as TextStyle,

    screenIconTextToHome: {
        marginLeft: wp('1.7%'),
        fontFamily: 'Metropolis-Regular',
        color: '#4a4a4a',
        fontSize: hp('1.5%'),
    } as TextStyle,

    screenIconTextSelected: {
        //marginLeft: wp('1.6%'),
        fontFamily: 'Metropolis-Regular',
        color: '#06a294',
        fontSize: hp('1.5%'),
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

    summaryContainer: {
        alignSelf: 'center',
        width: wp('95%'),
        height: hp('16%'),
        backgroundColor: '#f8f8f8',
        borderRadius: 20,
        marginBottom: hp('4%'),
        elevation: 10,
    } as ViewStyle,

    summaryText: {
        marginTop: hp('1%'),
        alignSelf:'center',
        fontFamily: 'Metropolis-Light',
        color: '#4a4a4a',
        fontSize: hp('2.2%'),
    } as TextStyle,

    rankStyle: {
        alignItems: 'center',
        width: wp('95%'),
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
};
