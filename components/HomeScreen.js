import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';

export default function HomeScreen({ navigation }) {
  const [collapsibleOpen, setCollapsibleOpen] = useState(true);

  const data = [
    { title: "Open login page (for debug purposes)", action: () => navigation.replace("Login") },
    { title: "Open quiz page (debug)", action: () => navigation.navigate("Quiz") },
    { title: "Open lesson page (debug)", action: () => navigation.navigate("Lesson") },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.hiName}>
        Hello David, {"\n"}Please complete the marked modules
      </Text>

      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setCollapsibleOpen(!collapsibleOpen)}
      >
        <Text style={styles.headerText}>Module #1</Text>
        <MaterialCommunityIcons 
          name={collapsibleOpen ? 'arrow-up' : 'arrow-down'} 
          size={24} 
          color="#555" 
        />
      </TouchableOpacity>
      <Collapsible collapsed={!collapsibleOpen}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.cardButton} onPress={item.action}>
              <MaterialCommunityIcons name="file-document" size={24} color="#555" />
              <Text style={styles.cardButtonText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Collapsible>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "left",
    paddingTop: "40%",
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    padding: 10,
    backgroundColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#555",
  },
  hiName: {
    padding: 5,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: "#555",
    lineHeight: 40,
  },
  cardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: '100%',
    alignSelf: 'left',
  },
  cardButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#555",
  },
});

