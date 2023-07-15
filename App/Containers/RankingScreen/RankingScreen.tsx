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
import styles from './RankingScreenStyles';
import appImages from '../../Themes/appImages';
import BoardColor from '../../Components/BoardColor/BoardColor';
import RankingRow from '../../Components/RankingRow/RankingRow';

import { RankingActions } from '../../Redux/ranking/actionCreators';
import { RankingState } from '../../Redux/ranking/state';
import { ScrollView } from 'react-native-gesture-handler';

export interface Props {
    navigation: NavigationProp<any>;

    authenticationActions: AuthenticationActions;
    authenticationState: AuthenticationState;

    rankingActions: RankingActions;
    rankingState: RankingState;

}

export interface State {
    boardColor: string;
    //tasks: string;
}

class RankingScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state ={
            boardColor: '',
        };
    }

    onHomePress = () => {
        this.props.navigation.navigate('App', { screen: 'HomeScreen' });
    };

    onTaskListPress = () => {
        this.props.navigation.navigate('App', { screen: 'TasksScreen' });
    };

    onRankingListPress = () => {
        this.props.navigation.navigate('App', { screen: 'RankingScreen' });
    };

    componentDidMount = () => {
        const { authenticationState } = this.props;
        const id = authenticationState.user!.id!;
        this.props.rankingActions.rankingRequest('');
    };

    // test = () => {
    //     const { authenticationState } = this.props;
    //     const id = authenticationState.user!.id!;
    //     this.props.geralTaskActions.geralTaskRequest(id);
    // }

    render() {
        const { authenticationState, rankingState } = this.props;
        

        return (
            

            <View style={{flex: 1, backgroundColor: 'white'}}>
                
                <View style={[styles.logoContainer]}>
                    <Image source={appImages.heraLogo} style={[styles.appLogo]}/>
                </View>

                <View style={[styles.summaryContainer]}>
                    <Text style={[styles.summaryText]}>
                        Os Membros no topo do ranking são os que {'\n'}
                        mais possuem €C (€Coins) e concluíram {'\n'}
                        tarefas. Apesar disso, todos os participantes {'\n'}
                        ganham prêmios e recompensas de acordo {'\n'}
                        com as metas da Gameficação Coletiva. 
                    </Text>
                </View>

                <ScrollView horizontal={true}>
                    <View>
                    {rankingState.ranking?.ranking == undefined ? 
                        ( <Text></Text> 
                    ):(
                        <FlatList
                                scrollEnabled={true}
                                data={Object.keys(rankingState.ranking?.ranking)}
                                keyExtractor={item => String(item)}
                                renderItem={({ item }) => 
                                    <RankingRow 
                                        board={rankingState.ranking.ranking[item].board} 
                                        name={rankingState.ranking.ranking[item].name} 
                                        points={rankingState.ranking.ranking[item].points} 
                                        position={item}
                                    >
                                    </RankingRow>
                                }
                        />
                    )}
                    </View>
                </ScrollView>

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
                                    <Icon name="bar-chart-2" size={40} color="#06a294" />
                                </View>

                                <Text style={[styles.screenIconTextSelected]}>
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
    rankingState: state.ranking,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        authenticationActions: bindActionCreators(
            AuthenticationActions,
            dispatch,
        ),
        rankingActions: bindActionCreators(
            RankingActions,
            dispatch,
        ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RankingScreen);
