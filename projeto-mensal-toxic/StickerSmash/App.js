import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  const handlePress = () => {
    // Aqui você pode adicionar a lógica para lidar com o texto enviado
    console.log(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o texto aqui"
        placeholderTextColor="#BB86FC" // Cor placeholder para combinar com o tema
        onChangeText={setText}
        value={text}
      />
      <Button
        title="Verificar"
        onPress={handlePress}
        color="#FF0000" // Cor do botão vermelho
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#BB86FC', 
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#FFFFFF',
  },
});

export default App;
