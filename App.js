import { StatusBar } from "expo-status-bar";
import { StyleSheet, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
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
