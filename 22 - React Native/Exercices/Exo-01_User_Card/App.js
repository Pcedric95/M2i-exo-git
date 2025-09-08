import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import UserCard from './components/UserCard';

export default function App() {
  return (
    <View style={styles.container}>
      <UserCard
      name="Sophie Martinez"
      job="UX Designer"
      description="Créative et passionnée par l'expérience utilisateur."
      email="sophie.martin@example.com"
      phone="06 98 76 54 32"
      avatar="https://randomuser.me/api/portraits/women/44.jpg"
    />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
