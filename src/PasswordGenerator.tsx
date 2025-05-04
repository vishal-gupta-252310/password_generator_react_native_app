import React, { useState } from 'react'
import NumberInput from './components/NumberInput'
import RadioInput from './components/RadioInput'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HaveValue } from './Services/Helper';
import Password from './components/Password';

interface radioTypes {
  type: string;
  isChecked: boolean;
  borderColor: string;
}

const generatorTypes: radioTypes[] = [
  {
    type: 'lowercase',
    isChecked: false,
    borderColor: 'green'
  },
  {
    type: 'uppercase',
    isChecked: false,
    borderColor: 'yellow'
  }, {
    type: 'numbers',
    isChecked: false,
    borderColor: 'purple'
  }, {
    type: 'symbols',
    isChecked: false,
    borderColor: 'red'
  },
]

interface inputType {
  value: string;
  isError: boolean;
  message: string;
}

const PasswordGenerator = (): React.JSX.Element => {
  const [types, setTypes] = useState<radioTypes[]>(generatorTypes);
  const [input, setInput] = useState<inputType>({
    value: "",
    isError: false,
    message: ''
  });
  const [generatedPass, setGeneratedPass] = useState<string>('');

  /**
   * To handle click on different options
   * @param index 
   */
  const onPressed = (index: number) => {
    const updatedTypes = [...types];
    updatedTypes[index] = {
      ...updatedTypes[index],
      isChecked: !updatedTypes[index]?.isChecked
    }

    setTypes([...updatedTypes]);
  }

  /**
   * To handle input
   * @param value 
   */
  const handleInput = (value: string) => {
    let copyInput = {
      message: "",
      isError: false,
      value: ""
    };

    if (!HaveValue(value)) {
      copyInput.message = "Length should be required."
      copyInput.isError = true
    }

    if (/^\d*$/.test(value)) {
      copyInput.value = value;
    }

    setInput({ ...copyInput });
  }

  /**
   * To generate password
   * @returns 
   */
  const handleGenerateBtn = () => {
    if (!HaveValue(input.value)) {
      setInput({
        ...input,
        isError: true,
        message: "Length should be required."
      })
      return;
    }

  }

  /**
   * To reset the all state of the app
   */
  const handleResetBtn = () => {
    setInput({
      value: "",
      isError: false,
      message: ""
    })
  }

  return (
    <View style={styles.mainContainer}>
      <NumberInput inputValue={input} handleInput={handleInput} />
      {types.map(({ type, isChecked, borderColor }, index) => (
        <RadioInput
          key={index}
          type={type}
          isChecked={isChecked}
          color={borderColor}
          onPressed={() => onPressed(index)}
        />
      ))}
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity style={[styles.buttonStyle, styles.generateBtn]} onPress={handleGenerateBtn}>
          <Text>Generate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonStyle, styles.resetBtn]} onPress={handleResetBtn}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
      {HaveValue(generatedPass) && (
        <Password password={generatedPass} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBlock: 10,
  },
  buttonStyle: {
    paddingBlock: 10,
    paddingInline: 20,
    borderRadius: 8,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  generateBtn: {
    backgroundColor: '#74B9FF',
    color: '#fff'
  },
  resetBtn: {
    backgroundColor: '#FFF',
    color: '#00000'
  }
})

export default PasswordGenerator