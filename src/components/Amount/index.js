import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Amount() {
 return (
   <View style={styles.container}>
    <View>
    <Text>Saldo</Text>
      <View>
        <Text>R$</Text>
        <Text>15.000,00</Text>
      </View>
    </View>
    <View>
      <Text>Gastos</Text>
      <View>
      <Text>R$</Text>
      <Text>420,00</Text>
      </View>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'rpw',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
  }
})