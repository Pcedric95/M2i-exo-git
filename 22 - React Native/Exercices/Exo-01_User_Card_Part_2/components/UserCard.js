import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const UserCard = ({ name, job, description, email, phone, avatar, rating, variant, onSelect }) => {

  // Animation pour les cards (fade-in)
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  // Carte compacte
  if (variant === 'compact') {
    return (
      <Animated.View style={[styles.compactCard, { opacity: fadeAnimation }]}>
        {/* Avatar */}
        <Image source={{ uri: avatar }} style={styles.compactAvatar} />

        {/* Infos principales */}
        <View style={styles.compactInfo}>
          <Text style={styles.compactName}>{name}</Text>
          <Text style={styles.compactJob}>{job}</Text>
        </View>

        {/* Bouton pour afficher détails */}
        <TouchableOpacity
          style={styles.compactButton}
          onPress={onSelect}
        >
          <Text style={styles.compactButtonText}>+</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  // 🔹 Carte détaillée
  return (
    <Animated.View style={[styles.card, { opacity: fadeAnimation }]}>
      {/* Avatar centré */}
      <Image source={{ uri: avatar }} style={styles.avatar} />

      {/* Nom et métier */}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.job}>{job}</Text>

      {/* Affichage du rating si présent */}
      {rating && <Text style={styles.rating}>{rating}</Text>}

      {/* Description */}
      <Text style={styles.description}>{description}</Text>

      {/* Contact */}
      <View style={styles.contact}>
        <Text style={styles.contactLabel}>Email :</Text>
        <Text style={styles.contactText}>{email}</Text>
        <Text style={styles.contactLabel}>Téléphone :</Text>
        <Text style={styles.contactText}>{phone}</Text>
      </View>

      {/* Bouton d'action */}
      <TouchableOpacity
        style={styles.button}
        onPress={onSelect}
      >
        <Text style={styles.buttonText}>Contacter</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  // Carte détaillée
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: '#2035edff',
    shadowOpacity: 1,
    margin: 15,
    elevation: 3,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
  rating: {
    fontSize: 16,
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
    paddingBottom: 5,
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
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  // Carte compacte
  compactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#2035edff',
    shadowOpacity: 1,
    elevation: 2,
  },
  compactAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  compactInfo: {
    flex: 1,
  },
  compactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  compactJob: {
    fontSize: 14,
    color: '#666',
  },
  compactButton: {
    backgroundColor: '#007bff',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  compactButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserCard;
