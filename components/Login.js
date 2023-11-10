import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert, Linking, KeyboardAvoidingView} from "react-native";
import { Input, Button } from 'react-native-elements';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

//replace with Brown's values
const qualtricsDomain = 'yul1.qualtrics.com';
const apiToken = '0VyxWL7gN9DPxvNUSgKzumW28qCLaQoLaaSnVg7g';
const surveyId = 'SV_bHO8xELxQ0ddZ66';

async function createExport(surveyId) {
  const response = await fetch(`https://${qualtricsDomain}/API/v3/surveys/${surveyId}/export-responses`, {
    method: 'POST',
    headers: {
      'X-API-TOKEN': apiToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      format: 'json',
      compress: 'false'
    })
  });

  if (!response.ok) {
    throw new Error(`HTTP error! here status: ${response.status}`);
  }

  const json = await response.json();
  return json.result.progressId; // Save this ID to check the export progress
}

async function checkExportProgress(progressId) {
  let checkResponse = await fetch(`https://${qualtricsDomain}/API/v3/surveys/${surveyId}/export-responses/${progressId}`, {
    method: 'GET',
    headers: {
      'X-API-TOKEN': apiToken
    }
  });

  if (!checkResponse.ok) {
    throw new Error(`HTTP error! here there status: ${checkResponse.status}`);
  }

  let jsonResponse = await checkResponse.json();

  if (jsonResponse.result.status === 'complete') {
    return jsonResponse.result.fileId; // Save this ID to download the responses
  } else {
    return checkExportProgress(progressId);
  }
}

async function downloadResponses(fileId) {
  const downloadResponse = await fetch(`https://${qualtricsDomain}/API/v3/surveys/${surveyId}/export-responses/${fileId}/file`, {
    method: 'GET',
    headers: {
      'X-API-TOKEN': apiToken
    }
  });

  if (!downloadResponse.ok) {
    throw new Error(`HTTP error! status: ${downloadResponse.status}`);
  } else{
  }

  let data = await downloadResponse.json();
  return data;
}

function getValuesArrayByEmail(jsonResponse, email) {
  const response = jsonResponse.responses.find(r => r.values.QID1_TEXT === email);
  return response ? Object.values(response.values) : null; // Returns the values as an array if found, otherwise null
}

// Main function to run the export process
async function exportSurveyResponses() {

  const progressId = await createExport(surveyId);
  const fileId = await checkExportProgress(progressId);
  const downloadedData = await downloadResponses(fileId);

  return downloadedData;
}

export default function Login({ navigation }) {
  let downloadedData;
  const [emailValue, setInputValue] = useState('');
  const handleInputChange = (text) => {
    setInputValue(text);
  };
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior='position' 
    keyboardVerticalOffset='-30'>

    <View style={styles.container}>

      <Image
        source={require('../assets/screenHeader.png')}
        style={styles.imageHeader}
      />
      <Text style={styles.headerText}>Login</Text>

      <Input
        placeholder='Email ID'
        value={emailValue}
        onChangeText={handleInputChange}
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
        onPress={async () => { 

          if(downloadedData == undefined){
            downloadedData = await exportSurveyResponses();
          }
          //Replace "QID1_TEXT" with the question ID corresponding to Brown's email question
          const emailAddresses = downloadedData.responses.map(response => response.values.QID1_TEXT);
          const email = emailValue.toLowerCase().trim();

          console.log(emailAddresses);
          console.log(email);
          
          if(emailAddresses.includes(email)){
            const userData = getValuesArrayByEmail(downloadedData, email);
            
            navigation.replace("FUTUREPAIN", { userData: userData });
          }else{
            Alert.alert(
              "Username not found",
              "The entered username is not valid",
              [],
              { cancelable: false }
            );
          }
    
          /*
          navigation.replace(
            "FUTUREPAIN",{
            user: userData,
          })
          */
        }}
      />
      <TouchableOpacity onPress={() => { 
        Linking.openURL('https://berkeley.qualtrics.com/jfe/form/SV_bHO8xELxQ0ddZ66');
        console.log('Register link pressed')
        }}>
        <Text style={styles.registerText}>Register for the study here</Text>
      </TouchableOpacity>

      
      
    </View>

    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    alignItems: "center",
    paddingTop: 25,
  },
  imageHeader: {
    width: '70%',
    height: 290,
    padding:5,
    marginBottom:20,
    marginTop:20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#383838"
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: 5,
    paddingLeft: 15,
    marginBottom:5,
    width: "130%",
    backgroundColor: "#FFF",
    alignSelf: "center",
  },
  loginButton: {
    backgroundColor: "#7f82e1",
    width: 300,
    borderRadius: 5,
  },
  registerText: {
    marginTop: 5,
    color: '#7f82e1',
    textDecorationLine: 'underline',
  },
});
