import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Open login page (for debug purposes)"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Button
        title="Open quiz page (debug)"
        onPress={() => {
          navigation.navigate("Quiz");
        }}
      />
      <Button
        title="Open lesson page (debug)"
        onPress={() => {
          navigation.navigate("Lesson");
        }}
      />
      <StatusBar style="auto" />
    </View>
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
