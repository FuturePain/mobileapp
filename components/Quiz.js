import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Quiz() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, padding: 20 }}>
        Check your understanding #1:{" "}
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
        amet turpis massa. Ut eu vulputate ante, a faucibus leo. Fusce blandit
        nisl metus, sit amet maximus dolor sagittis vitae. Quisque convallis non
        lacus sed bibendum. Praesent pharetra in sapien sed malesuada. Ut vitae
        magna varius, aliquam orci a, blandit sapien. Morbi elementum felis
        facilisis nisl auctor, a blandit dolor lobortis. Proin nec commodo arcu,
        quis cursus augue. Donec eget tellus id risus vestibulum semper nec nec
        lectus. Cras mattis odio quam. Nunc fermentum libero urna, eu elementum
        augue semper sed. Vestibulum a massa in nibh sollicitudin porttitor.
        Nulla sollicitudin in velit id pulvinar. Morbi a fringilla est. Sed
        consectetur libero vitae dolor lobortis imperdiet. Phasellus consequat
        massa lorem, at fermentum felis condimentum a. Nullam ipsum lacus,
        gravida eu risus et, lacinia euismod velit. Suspendisse orci justo,
        malesuada convallis eros et, interdum rhoncus est. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Maecenas nec rhoncus dui. Maecenas pellentesque ipsum quis odio
        tincidunt malesuada. Nulla sed ante ipsum. Nullam porttitor sem ac orci
        pellentesque lobortis. Cras quis luctus lectus, non commodo arcu.
        Integer lobortis vel nisi at condimentum. Duis euismod ante justo,
        laoreet maximus velit porttitor ac. Aenean lorem libero, scelerisque ac
        quam sed, commodo congue diam.
      </Text>
      <Button title="Submit and move on" />
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
