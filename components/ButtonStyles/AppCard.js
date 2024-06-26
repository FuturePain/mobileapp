import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AppCard = ({ onPress, title, completed, red }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={red ? styles.appButtonContainer : styles.appButtonContainer1}
    onPress={onPress}
  >
    <Text style={red ? styles.appButtonText : styles.appButtonText1}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "green",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    width: 330,
    height: 55,
    justifyContent: "center",
  },
  appButtonContainer1: {
    elevation: 8,
    borderColor: "green",
    borderWidth: 3,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    width: 330,
    height: 55,
    justifyContent: "center",
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
  appButtonText1: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default AppCard;
