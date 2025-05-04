import React from 'react'
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { toPascalCase } from '../Services/Helper';

interface radioTypes {
    type: string;
    isChecked: boolean;
    color: string,
    onPressed: (event: GestureResponderEvent) => void;
}

const RadioInput: React.FC<radioTypes> = ({ type, isChecked, color, onPressed }): React.JSX.Element => {
    return (
        <TouchableOpacity onPress={onPressed}>
            <View style={styles.radioContainer}>
                <Text style={styles.textContainer}>Include {toPascalCase(type)} {!['numbers', 'symbols'].includes(type) && 'letters'}</Text>
                <View style={[styles.circle, { borderColor: color, backgroundColor: isChecked ? color : 'transparent' }]}>
                    <Text style={styles.tickText}>✔</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingInline: 10,
        paddingBlock: 10
    },
    textContainer: {
        color: '#fff',
        fontSize: 15
    },
    circle: {
        borderRadius: '50%',
        borderWidth: 1,
        height: 26,
        width: 26,
        marginRight: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tickText: {
        color: '#fff'
    }
})

export default RadioInput