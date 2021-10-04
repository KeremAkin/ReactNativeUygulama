import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';

const Form = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text>String input</Text>
      <Text>Anlık Değer: {value1}</Text>
      <TextInput
        style={styles.input}
        value={value1}
        onChangeText={setValue1}
        placeholder="Herhangi bir input"
      />

      <Text>Sadece sayı</Text>
      <Text>Anlık Değer: {value2}</Text>
      <TextInput
        style={styles.input}
        value={value2}
        onChangeText={setValue2}
        keyboardType="numeric"
        placeholder="Sadece sayı"
      />

      <Text>Şifre input</Text>
      <Text>Anlık Değer: </Text>
      <TextInput
        style={styles.input}
        value={value3}
        onChangeText={setValue3}
        secureTextEntry={true}
        placeholder="Sifre"
      />

      <Text>Çok satırlı input</Text>
      <Text>Anlık Değer: {value4}</Text>
      <TextInput
        style={styles.input}
        value={value4}
        onChangeText={setValue4}
        multiline={true}
        numberOfLines={4}
        placeholder="Birden fazla satırda girdi girebilirsin"
      />
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 5,
  },
});
