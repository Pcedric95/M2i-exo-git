import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Animated } from 'react-native';

const UserCard = ({ name, job, description, email, phone, avatar, variant, onSelect }) => {

  // Animation pour les card 
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    }, []);


    // Condition carte compacte ou non
    if (variant === 'compact') {
    return (
      <Animated.View style={[styles.compactCard, { opacity: fadeAnimation }]}>
        <Image source={{ uri: avatar }} style={styles.compactAvatar} />
        <View style={styles.compactInfo}>
          <Text style={styles.compactName}>{name}</Text>
          <Text style={styles.compactJob}>{job}</Text>
        </View>
        <TouchableOpacity
          style={styles.compactButton}
          onPress={onSelect}
        >
          <Text style={styles.compactButtonText}>+</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  return (
      <Animated.View style={[styles.card, { opacity: fadeAnimation }]}>
          
          {/* Avatar */}
          
          <Image source={{ uri: avatar }} style={styles.avatar} />

          {/* Informations utilisateur */}
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
          onPress={onSelect}
          >
              <Text style={styles.buttonText}>Contacter</Text>
          </TouchableOpacity>

          
      </Animated.View>
  );
}


const styles = StyleSheet.create({
  // carte détaillée
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: '#9da7ffff',
    shadowOpacity: 1,
    margin: 15,
    elevation: 3,
  },
  name: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  job: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 8 },
  description: { fontSize: 14, textAlign: 'center', marginBottom: 16  },
  contact: { marginTop: 10 },
  contactLabel: { fontWeight: 'bold' },
  contactText: { marginBottom: 8 },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
  },
  buutonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },

  // carte compacte
  compactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#9da7ffff',
    shadowOpacity: 1,
    elevation: 1,
  },
  compactAvatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  compactInfo: { flex: 1 },
  compactName: { fontSize: 16, fontWeight: 'bold' },
  compactJob: { fontSize: 14, color: '#666' },
  compactButton: {
    backgroundColor: '#007bff',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  compactButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },

  // style général
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
    textAlign: "center",
    paddingBottom: 5
  },
  contactText: {
    marginBottom: 8,
    textAlign: "center",
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