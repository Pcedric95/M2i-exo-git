import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

// Affichage si android ou ios
/* if (Platform === 'android') {
  console.log("On tourne sur un Android !");
} else if (Platform === 'ios') {
  console.log("On tourne sur un iOS !");
} */

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}> Mon premier titre</Text>
          <Text style={styles.content}>Contenu de mon app</Text>

        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea:{
    flex: 1,
    // Fix pour android
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#cd0b0b81',
    fontSize: 30,
    fontWeight: 'bold',
  },
  content: {
    fontFamily: "Arial",
  },
});
