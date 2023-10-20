import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Input, Button } from 'react-native-elements';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.imageHeader}
      />
      <Text style={styles.headerText}>Login</Text>
      <Input
        placeholder='Email ID'
        inputContainerStyle={styles.inputField}
        leftIcon={
          <MaterialIcons
            name='email'
            size={24}
            color='#7B7B7B'
          />
        }
      />
      <Input
        placeholder='Password'
        secureTextEntry={true}
        inputContainerStyle={styles.inputField}
        leftIcon={
          <Ionicons
            name='lock-closed'
            size={24}
            color='#7B7B7B'
          />
        }
      />
      <Button
        title="Login"
        buttonStyle={styles.loginButton}
        onPress={() => { navigation.replace("FUTUREPAIN") }}
      />
      <TouchableOpacity onPress={() => { console.log('Register link pressed') }}>
        <Text style={styles.registerText}>Register for the study here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    alignItems: "center",
    paddingTop: 50,
  },
  imageHeader: {
    width: '90%',
    height: 110,
    padding:5,
    marginBottom:60,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    color: "#383838"
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: 5,
    paddingLeft: 15,
    backgroundColor: "#FFF",
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#7f82e1",
    width: 300,
    borderRadius: 5,
    marginTop: 30,
  },
  registerText: {
    marginTop: 20,
    color: '#7f82e1',
    textDecorationLine: 'underline',
  },
});
