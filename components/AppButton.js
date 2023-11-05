import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AppButton = ({ onPress, title, disabled }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={!disabled ? styles.appButtonContainer : styles.appButtonContainer1}
    disabled={disabled}
  >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#7f82e1",
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
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default AppButton;
