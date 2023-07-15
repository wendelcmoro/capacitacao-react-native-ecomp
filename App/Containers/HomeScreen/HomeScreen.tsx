import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
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
import styles from './HomeScreenStyles';
import appImages from '../../Themes/appImages';

import { PointsActions } from '../../Redux/points/actionCreators';
import { PointsState } from '../../Redux/points/state';

import { TaskActions } from '../../Redux/tasks/actionCreators';
import { TaskState } from '../../Redux/tasks/state';

import { RankingActions } from '../../Redux/ranking/actionCreators';
import { RankingState } from '../../Redux/ranking/state';

import { GeralTaskActions } from '../../Redux/geralTasks/actionCreators';
import { GeralTaskState } from '../../Redux/geralTasks/state';

import BoardColor from '../../Components/BoardColor/BoardColor';
import RankingPosition from '../../Components/RankingPosition/RankingPosition';

import { RequestStatus } from '../../Models/RequestStatus';

import { widthPercentageToDP } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';


export interface Props {
    navigation: NavigationProp<any>;
    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;

    pointsActions: PointsActions;
    pointsState: PointsState;

    taskActions: TaskActions;
    taskState: TaskState;

    rankingActions: RankingActions;
    rankingState: RankingState;

    geralTaskActions: GeralTaskActions;
    geralTaskState: GeralTaskState;
}

export interface State {
    boardColor: string;
    points: number;
    position: number;
    //tasks: string;
}

class HomeScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state ={
            position: 0,
            points: 0,
            boardColor: '',
        };
        // this.setState({boardColor: "red"});
        switch(props.authenticationState.user!.board) {
            case 'Admin':
                this.state= { position: 0, points: 0, boardColor: '#f9cb22'};
                break;
            case 'Comunica':
                this.state= { position: 0, points: 0, boardColor: '#7467d2', };
                break;
            case 'DH':
                this.state= { position: 0, points: 0, boardColor: '#67a4d2'};
                break;
            case 'Negócios':
                this.state= { position: 0, points: 0, boardColor: '#86858d'};
                break;
            case 'Presidência':
                this.state= { position: 0, points: 0, boardColor: '#d26767'};
                break;
            case 'Projetos':
                this.state= { position: 0, points: 0, boardColor: '#f89b0f'};
                break;
            case 'Qualidade':
                this.state= { position: 0, points: 0, boardColor: '#72d267'};
                break;
            default:
                this.state= { position: 0, points: 0, boardColor: '#2cd1c2'};
        }
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

    // test = (position: Number) => {
    //     return (Number + 1);
    // }

    componentDidMount = () => {
        const { authenticationState } = this.props;
        const id = authenticationState.user!.id!;
        this.props.pointsActions.pointsRequest(id);
        this.props.taskActions.taskRequest(id);
        this.props.rankingActions.rankingRequest('');
        this.props.geralTaskActions.geralTaskRequest(id);
    };

    render() {
        const { authenticationState, pointsState, taskState, rankingState, geralTaskState } = this.props;
        // const JSONString = rankingState.ranking?.ranking;
        // const object = JSON.parse(JSONString);
        // const array = Object.keys(object).map(function(k) {
        //     return object[k];
        // });
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={[styles.logoContainer]}>
                    <View style={[styles.inRow]}>
                        <Image source={appImages.heraLogo} style={[styles.appLogo]}/>

                        <TouchableOpacity
                            onPress={() => this.onLoginPress()}
                            activeOpacity= {0.7}
                        >
                            <View style={styles.logoutIcon}>
                                <Icon name="log-out" size={30} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.greetingText]}>
                        Olá, {authenticationState.user!.name}!
                    </Text>

                    <View style={[styles.boardContainer]}>
                        <View style={{backgroundColor: this.state.boardColor, borderRadius: 30}}>
                            <Text style={[styles.boardText]}>
                                {authenticationState.user!.board}
                            </Text>
                        </View>
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
                </View>

                <View style={[styles.lastTasks]}>
                    
                    <TouchableOpacity
                        onPress={() => this.onTaskListPress()}
                        activeOpacity= {0.7}
                    >
                        <View style={[styles.inRowLastTasks]}>
                            <Text style={[styles.tasksTitle]}>
                                Últimas Tarefas
                            </Text>
                            <View>
                                <Icon name="chevron-right" size={20} color="#2cd1c2" />
                            </View>
                        </View>
                    </TouchableOpacity>
                          
                    <FlatList
                            scrollEnabled={true}
                            data={taskState.tasks?.tasks}
                            keyExtractor={item => String(item.id)}
                            renderItem={({ item }) => 
                                <View style={[styles.tasksInRow]}>
                                    <View style={[styles.taskTimesContainer]}>
                                        <Text style={[styles.taskTimes]}> {item.howManyTimes}x </Text>
                                    </View>

                                    <View style={[styles.taskDescriptionContainer]}>
                                        <Text numberOfLines={1} style={[styles.tasksDescription]}> {item.description} </Text>
                                    </View>

                                    <View style={[styles.taskCategoryContainer]}>
                                        <Text numberOfLines={1} style={[styles.taskCategory]}> - {item.category?.name} </Text>
                                    </View>

                                    <View style={[styles.taskPointsContainer]}>
                                        <Text style={[styles.taskPoints]}> €C {item.xp} </Text>
                                    </View>

                                    <View style={[styles.borderStyle]}></View>   
                                </View> 
                            }
                    />
                        
                </View>

                <View style={[styles.lastTasks]}>
                    <TouchableOpacity
                        onPress={() => this.onRankingListPress()}
                        activeOpacity= {0.7}
                    >
                        <View style={[styles.inRow]}>
                            <Text style={[styles.tasksTitle]}>
                                Ranking Geral
                            </Text>
                            <View>
                                <Icon name="chevron-right" size={20} color="#2cd1c2" />
                            </View>
                        </View>
                    </TouchableOpacity>
                        
                    
                    
                    {rankingState.ranking?.ranking == undefined ? 
                        ( <Text></Text> 
                    ):(
                        <FlatList
                            scrollEnabled={true}
                            data={Object.keys(rankingState.ranking?.ranking)}
                            keyExtractor={item => String(item)}
                            renderItem={({ item }) =>  
                                <View style={[styles.tasksInRow]}>
                                    <View style={[styles.positionContainer]}>
                                        <RankingPosition position={item}></RankingPosition>
                                    </View>

                                    <View style={[styles.rankUserName]}>
                                        <View style={[styles.rankingNameContainer]}>
                                            <Text numberOfLines={1} style={[styles.tasksDescription]}> 
                                                {rankingState.ranking?.ranking[item].name} 
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={[styles.leaderboardUserBoard]}>
                                        <BoardColor board={rankingState.ranking?.ranking[item].board} />
                                    </View>

                                    <View style={[styles.taskPointsContainer]}>
                                        <Text style={[styles.taskPoints]}> €C {rankingState.ranking?.ranking[item].points} </Text>
                                    </View>
                                    <View style={[styles.borderStyle]}></View> 
                                </View>
                            }
                        />
                    )}
                    
                        
                </View>

                <View style={[styles.screenIcons]}>
                    <View style={[styles.screenIconsContainer]}>
                        <TouchableOpacity
                            onPress={() => this.onTaskListPress()}
                            activeOpacity= {0.7}
                        >
                            <View>
                                <Icon name="list" size={40} color="#a8a8a8" />
                            </View>

                            <Text style={[styles.screenIconTextNotSelected]}>
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
                                    <Icon name="home" size={40} color="#06a294" />
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

               
                {/* <Text style={{color: 'black', marginTop: widthPercentageToDP(23)}}> */}
                
                {/* <Text style={{color: 'black'}}>
                    {taskState.tasks?.tasks[0].description}        
                </Text> */}

                {/* <View style={[styles.optionContainer]}>
                    <AppButton
                        text={'LogOut'}
                        onPress={() => this.test()}
                    />
                </View> */}
                {/* </View> */}
            </View>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    authenticationState: state.authentication,
    pointsState: state.points,
    taskState: state.tasks,
    rankingState: state.ranking,
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
        rankingActions: bindActionCreators(
            RankingActions,
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
)(HomeScreen);
