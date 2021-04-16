import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TodoInput({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View style={styles.main}>
      <TextInput
        type="text"
        placeholder="New ToDo..."
        style={styles.input}
        onChangeText={changeHandler}
        value={text}></TextInput>
      <AntDesign
        name="pluscircle"
        size={40}
        color="red"
        onPress={() => {
          if(text !== ''){
          submitHandler(text.trim());
          setText('');
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    margin: 10,
    borderRadius: 20,
    flex: 1,
    padding: 10,
  },
});
