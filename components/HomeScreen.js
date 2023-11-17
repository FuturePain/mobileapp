import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";
import { useRoute } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { SafeAreaView } from "react-native-safe-area-context";
import pages from "./frameworks/ContentBody";
import quizzes from "./frameworks/QuizBody";
import AppCard from "./AppCard";
import AppButton from "./AppButton";

export default function HomeScreen({ navigation }) {
  const [collapsibleOpen, setCollapsibleOpen] = useState(true);

  const data = [
    {
      title: "Open login page (for debug purposes)",
      action: () => navigation.replace("Login"),
    },
    {
      title: "Open quiz page (debug)",
      action: () => navigation.navigate("Quiz"),
    },
    {
      title: "Open lesson page (debug)",
      action: () => navigation.navigate("Lesson"),
    },
  ];

  const route = useRoute();
  const [userData, setUserData] = useState(route.params?.userData);

  async function fetch() {
    let userData = await SecureStore.getItemAsync("userData");
    if (userData) {
      const userBody = JSON.parse(userData);
      setUserData(userBody);
    } else {
      navigation.navigate("Login");
    }
  }
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      {userData ? (
        <SafeAreaView style={{ backgroundColor: "white", minHeight: "100%" }}>
          <ScrollView
            contentContainerStyle={styles.container}
            contentInsetAdjustmentBehavior="automatic"
          >
            <Text style={styles.hiName}>
              Welcome back{" "}
              <Text style={{ fontWeight: "700" }}>
                {userData[userData.length - 2]}
              </Text>
              !{" "}
            </Text>
            <View style={{ alignItems: "center", width: "100%" }}>
              <Text style={[styles.hiText, { fontSize: 30 }]}>
                Your progress in the study:
              </Text>
              <Text style={styles.hiText}>
                1 / {pages.length + quizzes.length} modules completed
              </Text>
              <AppCard title="Lesson 1: Mind Body Syndrome" completed />
              <AppCard title="Quiz 1: What is Pain?" />

              <Text style={styles.hiText}>
                Study closes on{" "}
                <Text style={{ textDecorationLine: "underline" }}>
                  Month Day, Year
                </Text>
              </Text>
            </View>
            <StatusBar style="auto" />
          </ScrollView>
          <View
            style={{
              justifyContent: "center",
              width: "100%",
              marginTop: 15,
              alignItems: "center",
            }}
          >
            <AppButton
              title="Begin next module: Quiz 1"
              onPress={() => {
                navigation.navigate("Quiz");
              }}
            />
          </View>
        </SafeAreaView>
      ) : (
        <>
          <View style={styles.container}>
            <Text>Loading...</Text>
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "left",
  },
  collapsibleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "10%",
    padding: 10,
    backgroundColor: "#e0e0e0",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
  },
  hiName: {
    padding: 20,
    fontSize: 20,
    fontWeight: "400",
    color: "#555",
  },
  hiText: {
    fontSize: 20,
    fontWeight: "700",
    padding: 10,
    color: "#7f82e1",
  },
  cardButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    width: "100%",
    alignSelf: "left",
  },
  cardButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#555",
  },
});
