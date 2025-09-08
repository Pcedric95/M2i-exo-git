import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const UserCard = () => {
    return (
        <View style={styles.card}>
            {/* Avatar */}
            <Image 
            source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
            style={styles.avatar}
            />
            {/* Informations utilisateur */} */}
            <Text style={styles.name}>Paul Pasmieux</Text>
            <Text style={styles.job}>Développeur en devenir sur React Native</Text>
            <Text style={styles.description}>Passioné par le développement et les nouvelles modes de design mobile</Text>

            {/* Contact */}
            <View style={styles.contact}>
                <Text style={styles.contactLabel}>Email :</Text>
                <Text style={styles.contactText}>paul.pasmieux@gmail.com</Text>
                <Text style={styles.contactLabel}>Téléphone:</Text>
                <Text style={styles.contactText}>06 12 34 56 78</Text>
            </View>

            <TouchableOpacity 
            style={styles.button}
            onPress={() => Alert.alert('Contact', 'Vous avez cliqué sur le bouton "Contacter"')}
            >
                <Text style={styles.buuttonText}>Contacter</Text>
            </TouchableOpacity>

            
        </View>
    );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    margin: 15,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  job: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
  },
  contact: {
    marginTop: 10,
  },
  contactLabel: {
    fontWeight: "bold",
  },
  contactText: {
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default UserCard;