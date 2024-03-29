import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AppCardOutline = ({ onPress, title }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={styles.appButtonContainer}
    onPress={onPress}
    disabled={true}
  >
    <Text style={styles.appButtonText}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    // backgroundColor: "black",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    width: 330,
    height: 55,
    justifyContent: "center",
  },
  appButtonText: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default AppCardOutline;
