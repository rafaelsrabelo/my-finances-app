import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Amount } from '../../components/Amount';
import { Header } from '../../components/Headaer';

export function Home() {
  return (
    <View style={styles.container}>
      <Header name="Rafael R" />
      <Amount />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
