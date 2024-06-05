import React, { useState } from 'react';
import styles from '../../constants/styleIndex';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import * as toxicity from '@tensorflow-models/toxicity';

export default function App() {
  const [valor, setValor] = useState('');
  const [itens, setItens] = useState([]);
  const [headerText, setHeaderText] = useState('Verifique a Toxidade do seu texto');
  const [verificada, setVerificada] = useState(null);
  const [isToxic, setIsToxic] = useState(false);

  const adicionarItem = async () => {
    if (valor.trim()) {
      const threshold = 0.2;
      const model = await toxicity.load(threshold);
      const predictions = await model.classify([valor]);

      const toxicities = {
        'identity_attack': 'ataque à identidade',
        'insult': 'insulto',
        'obscene': 'obsceno',
        'severe_toxicity': 'extremamente tóxico',
        'sexual_explicit': ' sexual explícito',
        'threat': 'ameaça',
        'toxicity': 'tóxico',
      };

      const foundToxicities = predictions
        .filter(prediction => prediction.results.some(result => result.match))
        .map(prediction => toxicities[prediction.label]);

      setVerificada(valor);

      if (foundToxicities.length > 0) {
        setHeaderText(`Seu texto foi um ${foundToxicities[0]}`);
        setIsToxic(true);
      } else {
        setHeaderText('Verifique a Toxidade do seu texto');
        setItens([...itens, valor]);
        setIsToxic(false);
      }
      setValor('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{headerText}</Text>
        {verificada && (
          <View style={styles.item}>
            <Text style={[styles.itemText, { color: isToxic ? 'red' : 'green' }]}>{verificada}</Text>
          </View>
        )}
        <FlatList
          data={itens}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.mainContent}>
        <TextInput
          style={styles.input}
          placeholder='Verificar'
          value={valor}
          onChangeText={setValor}
        />
        <TouchableOpacity style={styles.button} onPress={adicionarItem}>
          <Text style={styles.buttonText}>Verificar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}