import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { SafeAreaView } from "react-native-safe-area-context";
import pages from "./frameworks/ContentBody";
import quizzes from "./frameworks/QuizBody";
import AppCard from "./ButtonStyles/AppCard";
import AppCardOutline from "./ButtonStyles/AppCardOutline";
import AppButton from "./ButtonStyles/AppButton";
import modules from "./frameworks/constants";
import AppButtonOutline from "./ButtonStyles/AppButtonOutline";

export const translateIndex = (ind) => {
  const modString = modules[ind].split("");
  const type = modString[0],
    num = parseInt(modString.slice(1, modString.length).join(""));
  return {
    type,
    num,
  };
};

const generateTitle = (idx) => {
  const obj = translateIndex(idx);
  switch (obj.type) {
    case "p":
      return obj.num in pages ? pages[obj.num]["pageTitle"] : "";
    case "m":
      return "New Module!";
    case "q":
      return obj.num in quizzes ? quizzes[obj.num]["quizTitle"] : "";
  }
};

export default function Revisit({ navigation }) {
  const route = useRoute();
  const [userData, setUserData] = useState(route.params?.userData);
  const [contentIndex, setIndex] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const fetchUser = async () => {
        let userProgress = await SecureStore.getItemAsync("userProgress");
        if (userProgress) {
          const userBody = parseInt(userProgress);
          setIndex(userBody);
        } else {
          navigation.navigate("Login");
        }
      };

      fetchUser();

      return () => {};
    }, [])
  );

  async function fetch() {
    let userData = await SecureStore.getItemAsync("userData");
    let userProgress = await SecureStore.getItemAsync("userProgress");
    // await SecureStore.deleteItemAsync("userData");
    if (userProgress) {
      const userBody = parseInt(userProgress);
      setIndex(userBody);
    } else {
      navigation.navigate("Login");
    }
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
        <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
          <ScrollView
            contentContainerStyle={styles.container}
            contentInsetAdjustmentBehavior="automatic"
          >
            <View style={{ alignItems: "center", width: "100%" }}>
              <Text style={[styles.hiName, { fontWeight: 800 }]}>
                Revisit a previous module
              </Text>
              {modules.map((mod, idx) => {
                if (idx - contentIndex < 0) {
                  return (
                    <>
                      <View
                        flexDirection="row"
                        style={{
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                        key={idx}
                      >
                        <Text
                          style={{
                            height: "100%",
                            textAlign: "center",
                            fontWeight: "600",
                            marginRight: 10,
                          }}
                        >
                          {idx + 1}
                        </Text>
                        <AppCard
                          title={generateTitle(idx)}
                          completed={idx < contentIndex}
                          onPress={() => {
                            const { type, num } = translateIndex(idx);
                            if (type == "p") {
                              navigation.navigate("Lesson", {
                                pageNumber: num + 1,
                                revisit: true,
                              });
                            } else if (type == "q") {
                              navigation.navigate("Quiz", {
                                pageNumber: num + 1,
                                revisit: true,
                              });
                            } else {
                              navigation.navigate("Module", {
                                pageNumber: num + 1,
                                revisit: true,
                              });
                            }
                          }}
                        />
                      </View>
                    </>
                  );
                }
              })}
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
            <AppButtonOutline
              title="Back"
              onPress={() => {
                navigation.navigate("FUTUREPAIN");
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
