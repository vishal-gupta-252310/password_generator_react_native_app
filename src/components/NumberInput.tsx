import React, { Dispatch, SetStateAction, useState } from 'react'
import { GestureResponderEvent, StyleSheet, Text, TextInput, View } from 'react-native'

interface numberInputProps {
  inputValue: {
    value: string
    isError: boolean,
    message: string
  };
  handleInput: (value: string) => void
}

/**
 * Component to display number input
 * @returns node
 */
const NumberInput: React.FC<numberInputProps> = ({ inputValue, handleInput }): React.JSX.Element => {

  return (
    <View style={styles.parentContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password Length
        {inputValue.isError && <Text style={styles.error}>{inputValue.message}</Text>}
        </Text>
        <TextInput
          style={styles.input}
          value={inputValue?.value}
          onChangeText={handleInput}
          placeholder='Ex. 8'
          keyboardType="numeric"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  parentContainer: {
    paddingInline: 10,
    paddingBlock: 10,
    flex: 1,
    marginBlock: 10
  },
  inputContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputLabel: {
    color: '#fff',
    fontSize: 15,
    height: 25
  },
  input: {
    width: 100,
    height: 40,
    borderWidth: 1,
    padding: 10,
    color: '#fff',
    borderRadius: 8
  },
  error: {
    marginLeft: 10,
    fontSize: 10,
    color: 'red'
  }
})

export default NumberInput