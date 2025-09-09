import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import UserCard from './components/UserCard';
import React, { useState } from 'react';

// Données utilisateurs
const users = [
  {
    id: '1',
    name: "Sophie Martinez",
    job: "UX Designer",
    description: "Créative et passionnée par l'expérience utilisateur.",
    email: "sophie.martinez@example.com",
    phone: "06 98 76 54 32",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: "⭐⭐⭐⭐"
  },
  {
    id: '2',
    name: 'Paul Pamieux',
    job: 'Développeur en devenir sur React Native',
    description: 'Passioné par le développement et les nouvelles modes de design mobile',
    email: 'paul.pasmieux@gmail.com',
    phone: '06 12 34 56 78',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: "⭐⭐⭐"
  },
  {
    id: '3',
    name: 'Ka Lamar',
    job: 'Designer en poulpe',
    description: 'Le renomé designer internationale pour l"océan"',
    email: 'ka.lamar@gmail.com',
    phone: '07 77 88 99 11',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    id: '4',
    name: 'Mi Kado',
    job: 'Développeuse Backend',
    description: 'Spécialiste API et sécurité.',
    email: 'c.johnson@gmail.com',
    phone: '06 55 66 77 88',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    rating: "⭐⭐⭐⭐"
  }
];

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  // Rendu d'un élément de liste (FlatList)
  const renderUser = ({ item, index }) => {
    // variante selon la section
    const variant = index < 2 ? "detailed" : "compact";
    return (
      <UserCard
        {...item}
        variant={variant}
        onSelect={() => setSelectedUser(item)}
      />
    );
  };

  // En-tête de la liste
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>👥 Notre équipe</Text>
    </View>
  );

  // Pied de liste
  const renderFooter = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>📍 Fin de la liste</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Modification par FlatList */}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUser}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        contentContainerStyle={styles.listContent}
      />

      {/* Affichage conditionnel du membre sélectionné */}
      {selectedUser && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Détails du membre</Text>
          <UserCard {...selectedUser} variant="detailed" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f2f2f2',
  },
  listContent: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#007bff',
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
});
