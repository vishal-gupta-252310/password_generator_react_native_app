import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Password: React.FC<{ password: string }> = ({ password }) => {
    return (
        <View style={styles.passwordContainer}>
            <Text style={styles.textContainer}>{password}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    passwordContainer: {
        backgroundColor: "#fff",
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        fontSize: 18,
        color: 'black'
    }
})

export default Password