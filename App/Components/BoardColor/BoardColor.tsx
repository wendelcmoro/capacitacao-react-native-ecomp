import React from 'react';
import { View, Text } from 'react-native';

import styles from './BoardColorStyles';

export interface Props {
    board?: string;
}

export interface State {
    boardColor: string,
}

export default class BoardColor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state ={
            boardColor: '',
        };

        switch(props.board) {
            case 'Admin':
                this.state= { boardColor: '#f9cb22'};
                break;
            case 'Comunicação':
                this.state= { boardColor: '#7467d2', };
                break;
            case 'DH':
                this.state= { boardColor: '#67a4d2'};
                break;
            case 'Negócios':
                this.state= { boardColor: '#86858d'};
                break;
            case 'Presidência':
                this.state= { boardColor: '#d26767'};
                break;
            case 'Projetos':
                this.state= { boardColor: '#f89b0f'};
                break;
            case 'Qualidade':
                this.state= { boardColor: '#72d267'};
                break;
            default:
                this.state= { boardColor: '#2cd1c2'};
        }
    }

    render() {
        const { board } = this.props;
        return (
            <View style={{backgroundColor: this.state.boardColor, borderRadius: 30}}>
                <Text style={[styles.boardText]}>
                    {board}
                </Text>
            </View>
        );
    }
}
