import { StatusBar } from "expo-status-bar";
import { StyleSheet, LogBox, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/HomeScreen";
import Content from "./components/Content";
import Login from "./components/Login";
import Quiz from "./components/Quiz";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import Module from "./components/Module";
import Revisit from "./components/Revisit";

const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();
  // if (Platform.OS === "ios")
  //   Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  const [isSignedIn, setSignedStatus] = useState(false);
  async function fetch() {
    userData = await SecureStore.getItemAsync("userData");
    if (userData) {
      setSignedStatus(true);
    }
  }
  useEffect(() => {
    fetch();
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {!isSignedIn ? (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false, animation: "none" }}
            />
          ) : (
            <></>
          )}
          <Stack.Screen
            name="FUTUREPAIN"
            component={HomeScreen}
            options={{
              headerLargeTitle: true,
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: "#c7d6ff",
              },
              headerTitleStyle: {
                color: "white",
              },
              animation: "fade",
            }}
          />
          <Stack.Screen
            name="Lesson"
            component={Content}
            options={{
              headerShown: false,
              gestureEnabled: false,
              animation: "fade_from_bottom",
            }}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{
              headerBackVisible: false,
              headerLargeTitle: true,
              gestureEnabled: false,
              headerShadowVisible: false,
              animation: "fade_from_bottom",
            }}
          />
          <Stack.Screen
            name="Module"
            component={Module}
            options={{
              headerShown: false,
              gestureEnabled: false,
              animation: "slide_from_bottom",
            }}
          />
          <Stack.Screen
            name="Revisit previous module"
            component={Revisit}
            options={{
              headerShown: false,
              gestureEnabled: false,
              animation: "fade",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
