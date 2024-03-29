import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AppButtonOutline = ({ onPress, title, disabled }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={styles.appButtonContainer}
  >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderWidth: 5,
    borderColor: "#7f82e1",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    width: 330,
    height: 55,
    justifyContent: "center",
  },
  appButtonContainer1: {
    elevation: 8,
    backgroundColor: "gray",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    width: 330,
    height: 55,
    justifyContent: "center",
  },
  appButtonText: {
    fontSize: 18,
    color: "#7f82e1",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default AppButtonOutline;
