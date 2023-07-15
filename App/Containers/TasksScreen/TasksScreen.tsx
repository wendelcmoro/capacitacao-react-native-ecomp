import React from 'react';
import { Alert, View, Text, Image, TouchableOpacity, FlatList, Footer } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';;
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();

import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

import AppButton from '../../Components/AppButton/AppButton';

import { AuthenticationActions } from '../../Redux/authentication/actionCreators';
import { AuthenticationState } from '../../Redux/authentication/state';
import { RootState } from '../../Redux';

import appStyles from '../../Themes/appStyles';
import styles from './TaskScreenStyles';
import appImages from '../../Themes/appImages';

import { TaskActions } from '../../Redux/tasks/actionCreators';
import { TaskState } from '../../Redux/tasks/state';

import { PointsActions } from '../../Redux/points/actionCreators';
import { PointsState } from '../../Redux/points/state';

import { GeralTaskActions } from '../../Redux/geralTasks/actionCreators';
import { GeralTaskState } from '../../Redux/geralTasks/state';

import { RequestStatus } from '../../Models/RequestStatus';

import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-material-dropdown';

import RadioButtonRN from 'radio-buttons-react-native';



export interface Props {
    navigation: NavigationProp<any>;

    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;

    pointsActions: PointsActions;
    pointsState: PointsState;

    taskActions: TaskActions;
    taskState: TaskState;

    geralTaskActions: GeralTaskActions;
    geralTaskState: GeralTaskState;
}

export interface State {
    boardColor: string;
    points: number;
    isCollapsed: boolean;
    isCollapsedBoard: boolean;
    expandIconBoard: string;
    expandIconCommon: string;
    radioColor: string;
    //tasks: string;
}

class TasksScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state ={
            isCollapsed: false,
            isCollapsedBoard: true,
            expandIconBoard: 'chevron-down',
            expandIconCommon: 'chevron-up',
            points: 0,
            boardColor: '',
            radioColor: 'white',
        };
    }

    onLoginPress = () => {
        const { authenticationActions } = this.props;
        authenticationActions.logoutRequest();
    };

    onHomePress = () => {
        this.props.navigation.navigate('App', { screen: 'HomeScreen' });
    };

    onTaskListPress = () => {
        this.props.navigation.navigate('App', { screen: 'TasksScreen' });
    };

    onRankingListPress = () => {
        this.props.navigation.navigate('App', { screen: 'RankingScreen' });
    };

    onExpandCommonTasksPress = () => {
        if (this.state.isCollapsed == true){
            this.setState({isCollapsed: false});
            this.setState({expandIconCommon: 'chevron-up'});
        }
        else {
            this.setState({isCollapsed: true});
            this.setState({expandIconCommon: 'chevron-down'});
        }
    };

    onExpandBoardTasksPress = () => {
        if (this.state.isCollapsedBoard == true){
            this.setState({isCollapsedBoard: false});
            this.setState({expandIconBoard: 'chevron-up'});
        }
        else {
            this.setState({isCollapsedBoard: true});
            this.setState({expandIconBoard: 'chevron-down'});
        }
    };

    onSelectItem = (item) => {
        this.props.geralTaskActions.sendTaskDoneRequest(item);
        // console.log(msg, "AQUI");
        // Alert.alert(
        //     "Tarefa",
        //     msg.Mensagem,
        //     [
        //       {
        //         text: "Cancel",
        //         onPress: () => console.log("Cancel Pressed"),
        //         style: "cancel"
        //       },
        //       { text: "OK", onPress: () => console.log("OK Pressed") }
        //     ],
        //     { cancelable: false }
        // );
    };

    componentDidMount = () => {
        const { authenticationState } = this.props;
        const id = authenticationState.user!.id!;
        this.props.pointsActions.pointsRequest(id);
        this.props.taskActions.taskRequest(id);
        this.props.geralTaskActions.geralTaskRequest(id);
    };

    render() {
        const { authenticationState, pointsState, taskState, geralTaskState } = this.props;
        const { radioColor } = this.state;

        let dropList = [{
            value: '1',
          }, {
            value: '2',
          }, {
            value: '3',
        }];

        const data = [
        {
            label: ''
            },
        ];
        
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={[styles.logoContainer]}>
                    <Image source={appImages.heraLogo} style={[styles.appLogo]}/>
                </View>

                <View style={[styles.inRow]}>
                    <View style={[styles.statisticContainer]}>
                        <Text style={[styles.pointsNumber]}>
                            {pointsState.points?.Points}
                        </Text>
                        <Text style={[styles.pointsText]}>
                            Pontos
                            {'\n'}
                            Obtidos
                        </Text>
                    </View>

                    <View style={[styles.statisticContainer]}>
                        <Text style={[styles.levelText]}>
                            Nível
                        </Text>
                        <Text style={[styles.levelNumber]}>
                            {authenticationState.user!.level}
                        </Text>
                    </View>

                    <View style={[styles.statisticContainer]}>
                        <View style={{flexDirection: "row"}}>
                            <Text style={[styles.taskNumber]}>
                                {taskState.tasks?.tasks?.length}
                            </Text>
                            <Text style={[styles.taskMax]}>
                                /{geralTaskState.geralTasks?.geralTasks?.length}
                            </Text>
                        </View>
                        <Text style={[styles.taskText]}>
                            {'\n'}
                            Tarefas 
                            {'\n'}
                            Concluídas
                        </Text>
                    </View>
                </View>
                
                <ScrollView>
                    <View>
                        
                            <View style={[styles.lastTasks]}>
                                <TouchableOpacity
                                    onPress={() => this.onExpandCommonTasksPress()}
                                    activeOpacity= {0.7}
                                >
                                    <View style={[styles.inRowLastTasks]}>
                                        <Text style={[styles.tasksTitle]}>
                                            Tarefas Gerais
                                        </Text>

                                        <View>
                                            <Icon name={this.state.expandIconCommon} size={20} color="#2cd1c2" />
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <ScrollView horizontal={true}>
                                    <Collapsible collapsed={this.state.isCollapsed}>
                                        <FlatList
                                            scrollEnabled={true}
                                            data={geralTaskState.geralTasks?.geralTasks}
                                            keyExtractor={item => String(item.id)}
                                            renderItem={({ item }) => 
                                                <View style={{flex: 1}}>
                                                    <View style={[styles.tasksInRow]}>
                                                        {/* <TouchableOpacity
                                                            onPress={() => this.onSelectItem({item})}
                                                            activeOpacity= {0.7}
                                                        > */}
                                                            {/* <View style={{
                                                                marginTop: hp('0.2%'),   
                                                                marginLeft: wp('2%'),
                                                                marginRight: wp('2%'),
                                                                width: wp('4.5%'),
                                                                height: hp('3%'),
                                                                borderWidth: 1,
                                                                borderRadius: 30,
                                                                borderColor: '#F8C60F',
                                                                backgroundColor: radioColor,
                                                            }}
                                                            >
                                                            </View> */}
                                                            <RadioButtonRN style={{
                                                                    marginTop: wp('-3%'), 
                                                                    marginLeft: wp('2%'),
                                                                    marginRight: wp('3%'),
                                                                    width: wp('5%'),
                                                                    height: hp('5%'),
                                                                }}
                                                                deactiveColor='#F8C60F'
                                                                boxActiveBgColor='white'
                                                                boxStyle={{borderWidth: 1, borderColor: 'white'}}
                                                                circleSize={20}
                                                                data={data}
                                                                selectedBtn={() => this.onSelectItem(item.id)}
                                                            />
                                                        {/* </TouchableOpacity> */}

                                                        <View style={[styles.taskDescriptionContainer]}>
                                                            <Text numberOfLines={1} style={[styles.tasksDescription]}> {item.description} </Text>
                                                        </View>

                                                        <View style={[styles.taskPointsContainer]}>
                                                            <Dropdown containerStyle={{
                                                                width: wp('10%'),
                                                                height: hp('9%'),
                                                                marginTop: hp('-5%'), 
                                                                marginLeft: wp('4%'),
                                                            }} 
                                                            label='1' data={dropList}/>
                                                        </View>
                                                        
                                                    </View> 

                                                    <View style={[styles.taskTimesContainer]}>
                                                        <Text style={[styles.taskTimes]}> {item.howManyTimes} x {item.xp} </Text>
                                                    </View>

                                                    <View style={[styles.borderStyle]}></View>
                                                    
                                                </View>
                                            }
                                        />
                                    </Collapsible>
                                </ScrollView>
                            </View>
                        
                            
                    </View>
                    

                    <View>
                        
                            <View style={[styles.lastTasks]}>
                                <TouchableOpacity
                                    onPress={() => this.onExpandBoardTasksPress()}
                                    activeOpacity= {0.7}
                                >
                                    <View style={[styles.inRowLastTasks]}>
                                        <Text style={[styles.tasksTitle]}>
                                            Tarefas da Diretoria
                                        </Text>

                                        <View>
                                            <Icon name={this.state.expandIconBoard} size={20} color="#2cd1c2" />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                        
                                <ScrollView horizontal={true}>                   
                                    <Collapsible collapsed={this.state.isCollapsedBoard}>
                                        <FlatList
                                            scrollEnabled={true}
                                            data={geralTaskState.geralTasks?.geralTasks}
                                            keyExtractor={item => String(item.id)}
                                            renderItem={({ item }) =>
                                                <View style={{flex: 1}}>
                                                    <View style={[styles.tasksInRow]}>
                                                        <RadioButtonRN style={{
                                                                marginTop: wp('-3%'), 
                                                                marginLeft: wp('2%'),
                                                                marginRight: wp('3%'),
                                                                width: wp('5%'),
                                                                height: hp('5%'),
                                                            }}
                                                            deactiveColor='#F8C60F'
                                                            boxActiveBgColor='white'
                                                            boxStyle={{borderWidth: 1, borderColor: 'white'}}
                                                            circleSize={20}
                                                            data={data}
                                                            selectedBtn={() => this.onSelectItem(item.id)}
                                                        />
                                                        {/* <View style={[styles.radio]}></View> */}

                                                        <View style={[styles.taskDescriptionContainer]}>
                                                            <Text numberOfLines={1} style={[styles.tasksDescription]}> {item.description} </Text>
                                                        </View>

                                                        <View style={[styles.taskPointsContainer]}>
                                                            <Dropdown containerStyle={{
                                                                width: wp('10%'),
                                                                height: hp('9%'),
                                                                marginTop: hp('-5%'), 
                                                                marginLeft: wp('4%'),
                                                            }} 
                                                            label='1' data={dropList}/>
                                                        </View>
                                                    </View>

                                                    <View style={[styles.taskTimesContainer]}>
                                                        <Text style={[styles.taskTimes]}> {item.howManyTimes} x {item.xp} </Text>
                                                    </View>


                                                    <View style={[styles.borderStyle]}></View>

                                                </View>
                                            }
                                        />
                                    </Collapsible>
                                </ScrollView> 
                            </View>
                        
                            
                    </View>
                </ScrollView>
                

                <View style={[styles.screenIcons]}>
                    <View style={[styles.screenIconsContainer]}>
                        <TouchableOpacity
                            onPress={() => this.onTaskListPress()}
                            activeOpacity= {0.7}
                        >
                            <View>
                                <Icon name="list" size={40} color="#06a294" />
                            </View>

                            <Text style={[styles.screenIconTextSelected]}>
                                Tarefas
                            </Text>

                        </TouchableOpacity>
                    </View>

                    <View style={[styles.screenIconsContainer]}>
                        <TouchableOpacity
                            onPress={() => this.onHomePress()}
                            activeOpacity= {0.7}
                        >
                            <View>
                                <Icon name="home" size={40} color="#a8a8a8" />
                            </View>

                            <Text style={[styles.screenIconTextToHome]}>
                                Início
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.screenIconsContainer]}>
                        <TouchableOpacity
                            onPress={() => this.onRankingListPress()}
                            activeOpacity= {0.7}
                        >
                            <View>
                                <Icon name="bar-chart-2" size={40} color="#a8a8a8" />
                            </View>

                            <Text style={[styles.screenIconTextNotSelected]}>
                                Ranking
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View> 
            </View>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    authenticationState: state.authentication,
    pointsState: state.points,
    taskState: state.tasks,
    geralTaskState: state.geralTasks,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        authenticationActions: bindActionCreators(
            AuthenticationActions,
            dispatch,
        ),
        pointsActions: bindActionCreators(
            PointsActions,
            dispatch,
        ),
        taskActions: bindActionCreators(
            TaskActions,
            dispatch,
        ),
        geralTaskActions: bindActionCreators(
            GeralTaskActions,
            dispatch,
        ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TasksScreen);
