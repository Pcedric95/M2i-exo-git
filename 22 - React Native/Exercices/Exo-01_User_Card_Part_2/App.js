import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import UserCard from './components/UserCard';

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
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserCard
            name={item.name}
            job={item.job}
            description={item.description}
            email={item.email}
            phone={item.phone}
            avatar={item.avatar}
          />
        )}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
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
  header: {
  padding: 16,
  backgroundColor: '#f0f0f0',
  alignItems: 'center',
},
headerText: {
  fontSize: 18,
  fontWeight: 'bold',
},

footer: {
  padding: 16,
  backgroundColor: '#f0f0f0',
  alignItems: 'center',
},
footerText: {
  fontSize: 14,
  color: '#666',
},

});
