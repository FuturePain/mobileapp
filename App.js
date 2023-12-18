import { StatusBar } from "expo-status-bar";
import { StyleSheet, LogBox } from "react-native";
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

const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
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
              options={{ headerShown: false }}
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
            }}
          />
          <Stack.Screen
            name="Lesson"
            component={Content}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{
              headerBackVisible: false,
              headerLargeTitle: true,
              gestureEnabled: false,
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Module"
            component={Module}
            options={{
              headerShown: false,
              gestureEnabled: false,
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
