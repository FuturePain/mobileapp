import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert} from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, setDoc, doc} from "firebase/firestore";
import { auth, db } from './firebase';
import { Ionicons } from '@expo/vector-icons'; // or 'react-native-vector-icons/Ionicons'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');

  const [loginToggle, setToggle] = useState(true);

  const finishCreation = async (uid) => {
    try {
      const docSnap = await getDoc(doc(db, "global", "SurveysTODO"));
      
      if (!docSnap.exists()){
        throw new Error('Cannot Access tasks');
      }

      let docData = docSnap.data()

      await setDoc(doc(db, "users", uid), {
        firstname: username,
        tasks: Object.keys(docData)
      });

      navigation.replace("HomeScreen", { uid: uid });
    } catch (e) {
      console.error("Error adding document: ", e);
    }    
  }
  
  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        finishCreation(user.uid)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Sign Up Error", `${errorCode}: ${errorMessage}`)
      });
  };

  const handleSignIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.replace("HomeScreen", { uid: user.uid });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Sign In Error", `${errorCode}: ${errorMessage}`)
      });
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/screenHeader.png')}
        style={styles.image}
      />
      <Text style={styles.title}>{loginToggle ? "Sign In" : "Sign Up"}</Text>

      {!loginToggle && (
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#555" style={styles.icon} />
          <TextInput
            placeholder="First Name"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            autoCapitalize="none"
          />
        </View>
      )}

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#555" style={styles.icon} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={loginToggle ? handleSignIn : handleSignUp}>
        <Text style={styles.buttonText}>{loginToggle ? "Sign In" : "Sign Up"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setToggle(!loginToggle)}>
        <Text style={styles.link}>{loginToggle ? "Don't have an account? Signup" : "Already have an account? Login"}</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f8fc',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: '600',
      marginBottom: 20,
      color: '#333',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 6,
      paddingHorizontal: 10,
      marginBottom: 12,
      width: '100%',
    },
    icon: {
      marginRight: 8,
    },
    input: {
      flex: 1,
      height: 45,
    },
    button: {
      backgroundColor: '#8888e0',
      paddingVertical: 12,
      borderRadius: 8,
      width: '100%',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: '500',
      fontSize: 16,
    },
    link: {
      color: '#6666cc',
      marginTop: 14,
      textDecorationLine: 'underline',
    },
    error: {
      color: 'red',
      marginBottom: 10,
    },
  });
  