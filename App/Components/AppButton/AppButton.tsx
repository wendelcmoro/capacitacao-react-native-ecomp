import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import appStyles from '../../Themes/appStyles';
import styles from './AppButtonStyles';

export interface Props {
    color?: string | null;
    text: string;
    onPress: () => void;
}

export interface State {}

export default class AppButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { color, text } = this.props;
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View
                    style={[
                        styles.buttonContainer,
                        color ? { backgroundColor: color } : {},
                    ]}>
                    <Text style={[appStyles.centerText, styles.textButton]}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
