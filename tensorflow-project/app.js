import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  const handlePress = () => {
    console.log(text);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.mainContent}>
          <Text style={styles.mainText}>Verificar Toxidade do Texto</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="verificar toxidade"
            placeholderTextColor="#BB86FC"
            onChangeText={setText}
            value={text}
          />
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Verificar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#330033',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: '#BB86FC',
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FF0000',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default App;
