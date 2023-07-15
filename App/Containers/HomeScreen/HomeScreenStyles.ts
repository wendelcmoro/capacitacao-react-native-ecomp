import { TextStyle, ImageStyle, ViewStyle } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import appColors from '../../Themes/appColors';

export default {
    logoContainer: {
        height: hp('27%'),
        backgroundColor: "#2cd1c2",
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
        marginBottom: hp('4%'),
    } as ViewStyle,

    inRow: {
        display: "flex", 
        flexDirection: "row", 
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "center",
    } as ViewStyle,

    appLogo: {
        marginLeft: hp('20%'),
        marginTop: hp('2%'),
        alignSelf:'center',
        width: wp('32%'),
        height: hp('10%'),
    } as ImageStyle,

    logoutIcon: {
        marginLeft: wp('18%'),
        alignSelf: 'flex-end',
        width: hp('7.5%'),
    } as ViewStyle,

    greetingText: {
        marginTop: hp('-2%'),
        marginLeft: wp('7%'),
        fontFamily: 'Metropolis-Regular',
        color: 'white',
        fontSize: hp('4%'),
    } as TextStyle,

    boardContainer: {
        maxWidth: wp(25),
        marginTop: hp('1%'),
        marginLeft: wp('7%'),
    } as ViewStyle,

    boardText: {
        padding: wp('1%'),
        fontFamily: 'Metropolis-Medium',
        color: 'white',
        fontSize: hp('2%'),
        textAlign: 'center',
    } as TextStyle,

    optionContainer: {
        marginTop: hp('50%'),
    } as ViewStyle,

    statisticContainer: {
        marginTop: hp('2%'),
        marginLeft: wp('10%'),
        width: wp('20%'),
        height: hp('10%'),
        backgroundColor: '#f8f8f8',
        borderRadius: 20,
        elevation: 10,
    } as ViewStyle,

    pointsNumber: {
        marginTop: hp('1%'),
        marginLeft: wp('3%'),
        fontFamily: 'Metropolis-Medium',
        color: '#f8c60f',
        fontSize: hp('3%'),
    } as TextStyle,

    pointsText: {
        marginLeft: wp('3%'),
        fontFamily: 'Metropolis-Regular',
        color: '#4a4a4a',
        fontSize: hp('1.5%'),
    } as TextStyle,

    levelText: {
        marginTop: hp('1%'),
        textAlign: 'center',
        fontFamily: 'Metropolis-Regular',
        color: '#4a4a4a',
        fontSize: hp('1.5%'),
    } as TextStyle,

    levelNumber: {
        textAlign: 'center',
        fontFamily: 'Metropolis-Medium',
        color: '#52c27f',
        fontSize: hp('4%'),
    } as TextStyle,

    taskNumber: {
        marginTop: hp('1%'),
        flexDirection: "row", 
        flexWrap: "wrap",
        marginLeft: wp('2%'),
        fontFamily: 'Metropolis-Medium',
        color: '#52c27f',
        fontSize: hp('4%'),
    } as TextStyle,

    taskMax: {
        marginTop: hp('3.2%'),
        flexDirection: "row", 
        flexWrap: "wrap",
        fontFamily: 'Metropolis-Medium',
        color: '#f8c60f',
        fontSize: hp('2%'),
    } as TextStyle,

    taskText: {
        marginTop: hp('-2%'),
        marginLeft: wp('2%'),
        textAlign: 'left',
        fontFamily: 'Metropolis-Regular',
        color: '#4a4a4a',
        fontSize: hp('1.5%'),
    } as TextStyle,

    inRowLastTasks: {
        display: "flex", 
        flexDirection: "row", 
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "center",
    } as ViewStyle,

    lastTasks: {
        marginTop: hp('2%'),
        marginLeft: wp('2%'),
        marginRight: wp('2%'),
        width: wp('95%'),
        height: hp('24%'),
        backgroundColor: '#f8f8f8',
        borderRadius: 20,
        elevation: 10,
    } as ViewStyle,

    tasksTitle: {
        marginTop: hp('2%'),
        marginLeft: wp('2%'),
        width: wp('85%'),
        textAlign: 'left',
        fontFamily: 'Metropolis-Medium',
        color: '#2cd1c2',
        fontSize: hp('3%'),
    } as TextStyle,

    goToIcon: {
        marginTop: hp('3.5%'),
        alignSelf: 'center',
    } as ViewStyle,

    tasksInRow: {
        display: "flex", 
        flexDirection: "row", 
        flexWrap: "wrap",
        marginBottom: hp('0.5%'),
    } as ViewStyle,

    taskDescriptionContainer: {
        width: wp('27%'),
    } as ViewStyle,

    rankingNameContainer: {
        width: wp('30%'),
    } as ViewStyle,

    rankUserName: {
        width: wp('35%'),
    } as ViewStyle,

    tasksDescription: {
        textAlign: 'left',
        fontFamily: 'Metropolis-Medium',
        color: '#4a4a4a',
        fontSize: hp('2%'),
    } as TextStyle,

    taskTimesContainer: {
        width: wp('18%'),
    } as ViewStyle,

    positionContainer: {
        width: wp('13%'),
    } as ViewStyle,

    taskTimes: {
        flexDirection: "row", 
        flexWrap: "wrap",
        fontFamily: 'Metropolis-Medium',
        color: '#f8c60f',
        fontSize: hp('2%'),
    } as TextStyle,
    
    taskCategoryContainer: {
        marginTop: hp('0.4%'),
        width: wp('25%'),
    } as ViewStyle,

    taskCategory: {
        flexDirection: "row", 
        flexWrap: "wrap",
        fontFamily: 'Metropolis-Medium',
        color: '#a8a8a8',
        fontSize: hp('1.6%'),
    } as TextStyle,

    taskPointsContainer: {
        width: wp('25%'),
    } as ViewStyle,

    taskPoints: {
        textAlign: 'right',
        //marginRight: wp('3%'),
        fontFamily: 'Metropolis-Medium',
        color: '#4a4a4a',
        fontSize: hp('2%'),
        fontWeight: 'bold', 
    } as TextStyle,

    borderStyle: {
        marginTop: hp('1%'),
        marginLeft: wp('10%'),
        marginRight: wp('1%'),
        borderBottomWidth: 1,
        borderColor: '#4a4a4a',
        width: wp('74%'),
    } as ViewStyle,

    leaderboardUserBoard: {
        paddingTop: hp('0.4%'),
        width: wp('22%'),
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
        elevation: 12,
    } as ViewStyle,    

    screenIconTextNotSelected: {
        fontFamily: 'Metropolis-Regular',
        color: '#4a4a4a',
        fontSize: hp('1.5%'),
    } as TextStyle,

    screenIconTextToHome: {
        marginLeft: wp('1.7%'),
        fontFamily: 'Metropolis-Regular',
        color: '#06a294',
        fontSize: hp('1.5%'),
    } as TextStyle,

    screenIconTextSelected: {
        //marginLeft: wp('1.6%'),
        fontFamily: 'Metropolis-Regular',
        color: '#06a294',
        fontSize: hp('1.5%'),
    } as TextStyle,
    
};
