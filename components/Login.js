import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Linking,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import AppButton from "./AppButton";
import InteractiveTextInput from "react-native-text-input-interactive";
import * as SecureStore from "expo-secure-store";

//replace with Brown's values
const qualtricsDomain = "yul1.qualtrics.com";
const apiToken = "0VyxWL7gN9DPxvNUSgKzumW28qCLaQoLaaSnVg7g";
const surveyId = "SV_bHO8xELxQ0ddZ66";

async function createExport(surveyId) {
  const response = await fetch(
    `https://${qualtricsDomain}/API/v3/surveys/${surveyId}/export-responses`,
    {
      method: "POST",
      headers: {
        "X-API-TOKEN": apiToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        format: "json",
        compress: "false",
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! here status: ${response.status}`);
  }

  const json = await response.json();
  return json.result.progressId; // Save this ID to check the export progress
}

async function checkExportProgress(progressId) {
  let checkResponse = await fetch(
    `https://${qualtricsDomain}/API/v3/surveys/${surveyId}/export-responses/${progressId}`,
    {
      method: "GET",
      headers: {
        "X-API-TOKEN": apiToken,
      },
    }
  );

  if (!checkResponse.ok) {
    throw new Error(`HTTP error! here there status: ${checkResponse.status}`);
  }

  let jsonResponse = await checkResponse.json();

  if (jsonResponse.result.status === "complete") {
    return jsonResponse.result.fileId; // Save this ID to download the responses
  } else {
    return checkExportProgress(progressId);
  }
}

async function downloadResponses(fileId) {
  const downloadResponse = await fetch(
    `https://${qualtricsDomain}/API/v3/surveys/${surveyId}/export-responses/${fileId}/file`,
    {
      method: "GET",
      headers: {
        "X-API-TOKEN": apiToken,
      },
    }
  );

  if (!downloadResponse.ok) {
    throw new Error(`HTTP error! status: ${downloadResponse.status}`);
  } else {
  }

  let data = await downloadResponse.json();
  return data;
}

function getValuesArrayByEmail(jsonResponse, email) {
  const response = jsonResponse.responses.find(
    (r) => r.values.QID1_TEXT === email
  );
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
  const [emailValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (text) => {
    setInputValue(text);
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps={"never"}
      >
        <Image
          source={require("../assets/screenHeader.png")}
          style={styles.imageHeader}
        />
        <Text style={styles.headerText}>
          Log in to <Text style={{ color: "#7f82e1" }}>FUTUREPAIN</Text>
        </Text>
        {isLoading ? (
          <Text style={styles.headerText}>Logging you in, please wait...</Text>
        ) : (
          <>
            <InteractiveTextInput
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="off"
              placeholder="Email address"
              value={emailValue}
              onChangeText={handleInputChange}
            />
            <View style={{ height: 15, width: "100%" }} />
            {/* <InteractiveTextInput placeholder="Password" secureTextEntry={true} /> */}
            <View style={{ height: 15, width: "100%" }} />
            <AppButton
              disabled={
                !String(emailValue)
                  .toLowerCase()
                  .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  )
              }
              onPress={async () => {
                setIsLoading(true);
                const downloadedData = await exportSurveyResponses();

                //Replace "QID1_TEXT" with the question ID corresponding to Brown's email question
                const emailAddresses = downloadedData.responses.map(
                  (response) => response.values.QID1_TEXT
                );
                const email = emailValue.toLowerCase().trim();

                if (emailAddresses.includes(email)) {
                  const userData = getValuesArrayByEmail(downloadedData, email);
                  navigation.replace("FUTUREPAIN", { userData: userData });
                  await SecureStore.setItemAsync(
                    "userData",
                    JSON.stringify(userData)
                  );
                  await SecureStore.setItemAsync("userProgress", "0");
                } else {
                  Alert.alert(
                    "Username not found",
                    "The entered username is not valid",
                    [],
                    { cancelable: false }
                  );
                }
                setIsLoading(false);
              }}
              title="Login"
            />
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  "https://berkeley.qualtrics.com/jfe/form/SV_bHO8xELxQ0ddZ66"
                );
              }}
            >
              <Text style={styles.registerText}>
                Register for the study here
              </Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
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
    width: "60.35%",
    height: 250,
    padding: 5,
    marginBottom: 20,
    marginTop: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#383838",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: 5,
    paddingLeft: 15,
    marginBottom: 5,
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
    color: "#7f82e1",
    textDecorationLine: "underline",
  },
});
