// packages
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// component
import PasswordGenerator from './src/PasswordGenerator';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text style={styles.headingText}>Password Generator</Text>
      <PasswordGenerator />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1
  },
  headingText: {
    fontSize: 30,
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
  }
})
