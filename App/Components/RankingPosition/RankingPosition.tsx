import React from 'react';
import { View, Text } from 'react-native';

import styles from './RankingPositionStyles';
import BoardColor from '../BoardColor/BoardColor';

import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export interface Props {
    position?: string;
}

export interface State {
    pos: number,
}

export default class RankingPosition extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state ={
            pos: 0,
        };

        this.state= { pos: (Number(this.props.position) + 1) };
    }

    render() {
        const { pos } = this.state;
        return (
                <View>
                    <Text style={[styles.posNumber]}>{pos}°</Text>
                </View>
        );
    }
}
