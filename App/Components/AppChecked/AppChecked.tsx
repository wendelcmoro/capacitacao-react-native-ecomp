import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './AppCheckedStyles';
import appImages from '../../Themes/appImages';

export interface Props {
    label: string | null;
    checked: boolean;
    onPress: (checked: boolean) => void;
}

export interface State {}

export default class AppChecked extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { label, checked, onPress } = this.props;
        if (checked) {
            return (
                <View style={[styles.textContainer]}>
                    <TouchableOpacity
                        style={[styles.touchable]}
                        onPress={() => onPress(!checked)}>
                        <Text style={[styles.textLabel]}>{label}</Text>
                        <Image
                            source={appImages.checkedIcon}
                            style={[styles.image]}
                        />
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={[styles.textContainer]}>
                    <TouchableOpacity onPress={() => onPress(!checked)}>
                        <Text style={[styles.textLabel]}>{label}</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}
