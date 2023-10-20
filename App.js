import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/HomeScreen";
import Content from "./components/Content";
import Login from "./components/Login";
import Quiz from "./components/Quiz";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="FUTUREPAIN"
          component={HomeScreen}
          options={{
            headerLargeTitle: true,
          }}
        />
        <Stack.Screen name="Lesson" component={Content} />
        
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{
            headerLargeTitle: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
