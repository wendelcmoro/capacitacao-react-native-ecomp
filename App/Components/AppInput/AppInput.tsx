import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './AppInputStyles';

export interface Props {
    placeholder?: string;
    isPassword?: boolean;
    keyboard?: 'default' | 'numeric';
    disabled?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    value?: string;
    onChangeText: (text: string) => void;
}

export interface State {}

export default class AppInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {
            placeholder,
            isPassword,
            keyboard,
            disabled,
            autoCapitalize,
            value,
        } = this.props;
        return (
            <View style={[styles.inputContainer]}>
                <TextInput
                    placeholder={placeholder}
                    secureTextEntry={isPassword}
                    keyboardType={keyboard ? keyboard : 'default'}
                    underlineColorAndroid={'transparent'}
                    editable={!disabled}
                    autoCapitalize={autoCapitalize}
                    value={value}
                    onChangeText={text => {
                        this.props.onChangeText(text);
                    }}
                />
            </View>
        );
    }
}
