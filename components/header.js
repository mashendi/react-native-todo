import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Header() {
  return (
    <View>
      <Text style={styles.brand}>BABY SHARK</Text>
      <Text style={styles.hero}>TODO
      <Text style={styles.secondary}> - dodododododo</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  brand: {
    color: 'red',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hero: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold"
  },
  secondary: {
    color: "#afafaf",
    fontSize: 16
  }
});
