import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';


if (Platform === 'android') {
  console.log("On tourne sur un Android !");
} else if (Platform === 'ios') {
  console.log("On tourne sur un iOS !");
}

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Ceci est un deuxième test sur React Native</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.container}>
        {/* Contenu d'un header par exemple */}
        <Text >Header</Text>
      </View>

      <View style={styles.container}>
        {/* Contenu d'un footer par exemple */}
        <Text>Footer</Text>
      </View>
    </>
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
