import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import { getDoc, doc} from "firebase/firestore";
import { useRoute } from '@react-navigation/native';
import { db } from './firebase';

export default function HomeScreen({ navigation }) {
  const [docData, setDocData] = useState(false);

  const route = useRoute();
  const uid = route.params?.uid;

  const getInfo = async () => {
    let docSnap = await getDoc(doc(db, "users", uid));
        
    if (!docSnap.exists()){
      throw new Error('Cannot Access tasks');
    }
  
    setDocData(docSnap.data());
  }

  getInfo()

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hello, {docData.firstname}!</Text>
      <Text style={styles.subheader}>Your Pending Surveys:</Text>

      <FlatList
        data={docData.tasks}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingVertical: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.taskButton} onPress={() => console.log("Pressed:", item)}>
            <Text style={styles.taskText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace("Login")}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fc",
    paddingTop: "15%",
    paddingHorizontal: "5%",
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: "#333",
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    fontWeight: '500',
    color: "#666",
    marginBottom: 10,
  },
  taskButton: {
    backgroundColor: "#8888e0",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  taskText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  logoutButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    borderRadius: 6,
  },
  logoutText: {
    fontWeight: "500",
    color: "#333",
  },
});