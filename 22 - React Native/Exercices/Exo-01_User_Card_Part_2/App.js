import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, ScrollView} from 'react-native';
import UserCard from './components/UserCard';
import React, { useState } from 'react';


const users = [
  {
    id: 1,
    name: "Sophie Martinez",
    job: "UX Designer",
    description: "Créative et passionnée par l'expérience utilisateur.",
    email: "sophie.martinez@example.com",
    phone: "06 98 76 54 32",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: '2',
    name: 'Paul Pamieux',
    job: 'Développeur en devenir sur React Native',
    description: 'Passioné par le développement et les nouvelles modes de design mobile',
    email: 'paul.pasmieux@gmail.com',
    phone: '06 12 34 56 78',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    id: '3',
    name: 'Ka Lamar',
    job: 'Designer en poulpe',
    description: 'Le renomé designer internationale pour l"océan"',
    email: 'ka.lamar@gmail.com',
    phone: '07 77 88 99 11',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  }
]

export default function App() {

  const [selectedUser, setSelectedUser] = useState(null);
  const renderHeader = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>👥 Liste des utilisateurs</Text>
  </View>
);

const renderFooter = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>📍 Fin de la liste</Text>
  </View>
);


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>👥 Notre équipe</Text>

        {/* Section membres - détaillées */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profils détaillés</Text>
          {users.slice(0, 2).map(user => (
            <UserCard key={user.id} {...user} variant="detailed" />
          ))}
        </View>
        
        {/* Section autres membres */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Autres membres</Text>
          {users.slice(2).map(user => (
            <UserCard key={user.id} {...user} variant="compact" 
            onSelect={() => setSelectedUser(user)}

            />
          ))}
          {selectedUser && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Détails du membre</Text>
              <UserCard {...selectedUser} variant="detailed" />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f2f2f2',
  },
  scrollContent: {
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
});
