import React from 'react';
import { View, Text } from 'react-native';

import styles from './RankingRowStyles';
import BoardColor from '../../Components/BoardColor/BoardColor';

import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export interface Props {
    board?: string;
    name?: string;
    points?: string;
    position?: string;
}

export interface State {
    rowColor: string,
    pos: number,
}

export default class RankingRow extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state ={
            rowColor: '#f8f8f8',
            pos: 0,
        };

        switch(props.position) {
            case '0':
                this.state= { rowColor: '#fff8d4', pos: (Number(this.props.position) + 1)};
                break;
            case '1':
                this.state= { rowColor: '#f8f8f8', pos: (Number(this.props.position) + 1)};
                break;
            case '2':
                this.state= { rowColor: '#fad9a2', pos: (Number(this.props.position) + 1)};
                break;
            default:
                this.state= { rowColor: '#f8f8f8', pos: (Number(this.props.position) + 1)};
                break;
        }
    }

    render() {
        const { board, name, points } = this.props;
        const { pos } = this.state;
        return (
                <View style={{
                    backgroundColor: this.state.rowColor, 
                    width: wp('100%'), 
                    height: hp('6%'), 
                    borderRadius: 30,
                    display: "flex", 
                    flexDirection: "row", 
                    flexWrap: "wrap",
                    }}
                >
                    <View style={[styles.rankingNumberContainer]}>
                        <Text style={[styles.rankingNumber]}> {pos}° </Text>
                    </View>

                    <View style={[styles.rankUserName]}>
                        <View style={[styles.rankingNameContainer]}>
                            <Text numberOfLines={1} style={[styles.rankingName]}> 
                                {name} 
                            </Text>
                        </View>
                    </View>

                    <View style={[styles.rankingUserBoard]}>
                        <BoardColor board={board} />
                    </View>

                    <View style={[styles.rankingPointsContainer]}>
                        <Text style={[styles.rankingPoints]}> €C {points} </Text>
                    </View>
                    <View style={[styles.borderStyle]}></View> 
                </View>
        );
    }
}
