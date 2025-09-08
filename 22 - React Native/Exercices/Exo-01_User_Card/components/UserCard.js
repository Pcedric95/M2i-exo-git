import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const UserCard = ({ name, job, description, email, phone, avatar }) => {
    return (
        <View style={styles.card}>
            {/* Avatar */}
            <Image 
            source={{ uri: avatar }}
            style={styles.avatar}
            />
            {/* Informations utilisateur */} */}
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.job}>{job}</Text>
            <Text style={styles.description}> {description} </Text>

            {/* Contact */}
            <View style={styles.contact}>
                <Text style={styles.contactLabel}>Email :</Text>
                <Text style={styles.contactText}>{email}</Text>
                <Text style={styles.contactLabel}>Téléphone:</Text>
                <Text style={styles.contactText}>{phone}</Text>
            </View>

            <TouchableOpacity 
            style={styles.button}
            onPress={() => Alert.alert('Contact', 'Vous voulez contacter ${name} ')}
            >
                <Text style={styles.buttonText}>Contacter</Text>
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