import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Content({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, padding: 20 }}>Lesson #1: </Text>
      <Text>
        Lorem dolor sit amet, consectetur adipiscing elit. Praesent sit
        amet turpis massa. Ut eu vulputate ante, a faucibus leo. Fusce blandit
        nisl metus, sit amet maximus dolor sagittis vitae. Quisque convallis non
        lacus sed bibendum. Praesent pharetra in sapien sed malesuada. Ut vitae
        magna varius, aliquam orci a, blandit sapien. Morbi elementum felis
        facilisis nisl auctor, a blandit dolor lobortis. Proin nec commodo arcu,
        quis cursus augue. Donec eget tellus id risus vestibulum semper nec nec
        lectus. Cras mattis odio quam. Nunc fermentum libero urna, eu elementum
        augue semper sed. Vestibulum a massa in nibh sollicitudin porttitor.
      </Text>
      <Text style={{ paddingTop: 20, fontWeight: "bold" }}>
        Ready to take a quiz to check your comprehension?
      </Text>
      <Button
        title="Open quiz"
        onPress={() => {
          navigation.navigate("Quiz");
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
    padding: 30,
  },
});
