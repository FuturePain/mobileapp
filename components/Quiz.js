import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  FlatList,
  Pressable,
  TouchableHighlight,
  Alert,
  Linking,
} from "react-native";
import quizzes, { VideoPlayer } from "./frameworks/QuizBody";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";
import AppButton from "./ButtonStyles/AppButton";
import { useRoute } from "@react-navigation/native";
import { incrementAndReturnIndex } from "./frameworks/constants";
import { Video, ResizeMode } from "expo-av";
import InteractiveTextInput from "react-native-text-input-interactive";

export default function Quiz({ navigation, pageNumber = 0 }) {
  const route = useRoute();
  if (route.params) pageNumber = route.params?.pageNumber;
  const pageContent = quizzes[pageNumber - 1];
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const ifVideoRef = useRef(null);
  const [playing, setPlaying] = useState({});

  useEffect(() => {
    navigation.setOptions({
      title: pageContent.quizTitle,
    });
  }, []);
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white", minHeight: "100%" }}>
        <ScrollView
          contentContainerStyle={styles.container}
          contentInsetAdjustmentBehavior="automatic"
        >
          <Text style={{ paddingBottom: 10, fontWeight: 800 }}>
            If there is a video on this page but you do not hear sound, please
            unmute (the switch button on the side of your device).
          </Text>
          {pageContent.quizQuestions[currentQuestion].type == "video" ? (
            <Text style={{ paddingBottom: 10 }}>
              {pageContent.quizDescription}
            </Text>
          ) : (
            <></>
          )}
          {pageContent.links.map((link) => {
            return (
              <>
                <Text style={{ fontWeight: "bold" }}>{link[1]}</Text>
                <Text
                  style={{ paddingBottom: 10, color: "blue" }}
                  onPress={async () => {
                    await Linking.openURL(link[0]);
                  }}
                >
                  {link[0]}
                </Text>
              </>
            );
          })}
          {pageContent.quizQuestions[currentQuestion].type == "multiple" ? (
            <>
              <Text
                key={pageContent.quizQuestions[currentQuestion].content}
                style={{ fontSize: 20, fontWeight: "500", padding: 10 }}
              >
                {currentQuestion + 1}
                {")"} {pageContent.quizQuestions[currentQuestion].content}
              </Text>
              {pageContent.quizChoices[currentQuestion].map((choice, index) => {
                if (index == 0) {
                  return (
                    <Pressable
                      style={[
                        styles.buttonTop,
                        {
                          backgroundColor: userAnswers.includes(index)
                            ? "#7f82e1"
                            : "#7f7f7f",
                        },
                      ]}
                      onPress={() => {
                        if (userAnswers.includes(index)) {
                          setUserAnswers(
                            userAnswers.filter((a) => a !== index)
                          );
                        } else {
                          setUserAnswers([...userAnswers, index]);
                        }
                      }}
                    >
                      <Text style={styles.text}>{choice}</Text>
                    </Pressable>
                  );
                } else if (
                  index ==
                  pageContent.quizChoices[currentQuestion].length - 1
                ) {
                  return (
                    <Pressable
                      style={[
                        styles.buttonBottom,
                        {
                          backgroundColor: userAnswers.includes(index)
                            ? "#7f82e1"
                            : "#7f7f7f",
                        },
                      ]}
                      onPress={() => {
                        if (userAnswers.includes(index)) {
                          setUserAnswers(
                            userAnswers.filter((a) => a !== index)
                          );
                        } else {
                          setUserAnswers([...userAnswers, index]);
                        }
                      }}
                    >
                      <Text style={styles.text}>{choice}</Text>
                    </Pressable>
                  );
                } else {
                  return (
                    <Pressable
                      style={[
                        styles.button,
                        {
                          backgroundColor: userAnswers.includes(index)
                            ? "#7f82e1"
                            : "#7f7f7f",
                        },
                      ]}
                      onPress={() => {
                        if (userAnswers.includes(index)) {
                          setUserAnswers(
                            userAnswers.filter((a) => a !== index)
                          );
                        } else {
                          setUserAnswers([...userAnswers, index]);
                        }
                      }}
                    >
                      <Text style={styles.text}>{choice}</Text>
                    </Pressable>
                  );
                }
              })}
            </>
          ) : pageContent.quizQuestions[currentQuestion].type == "video" ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Video
                ref={ifVideoRef}
                style={{
                  alignSelf: "center",
                  width: "100%",
                  height: 200,
                  marginBottom: 10,
                }}
                source={pageContent.quizQuestions[currentQuestion].content}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                onPlaybackStatusUpdate={(playing) => setPlaying(() => playing)}
                key={pageContent.quizQuestions[currentQuestion].content}
              />
              <View
                style={{
                  height: 70,
                  justifyContent: "center",
                  borderRadius: 15,
                  backgroundColor: "#7f82e1",
                }}
              >
                <Button
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  color="white"
                  title={
                    playing.isPlaying ? "Pause the video" : "Play the video"
                  }
                  onPress={() =>
                    playing.isPlaying
                      ? ifVideoRef.current.pauseAsync()
                      : ifVideoRef.current.playAsync()
                  }
                />
              </View>
            </View>
          ) : (
            <View key={pageContent.quizQuestions[currentQuestion].content}>
              <Text style={{ fontSize: 25, fontWeight: "500", padding: 10 }}>
                {pageContent.quizQuestions[currentQuestion].content}
              </Text>
              {/* TODO: Submit answers to external API/database */}
              <InteractiveTextInput
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="off"
                placeholder="Type your answer here"
                // value={answer}
                onChangeText={(a) => {
                  // check empty text
                  if (a == "") {
                    setUserAnswers([]);
                    return;
                  }
                  let tempAnswers = userAnswers.slice();
                  if (tempAnswers.length == 0) tempAnswers.push(a);
                  else tempAnswers[0] = a;
                  setUserAnswers(tempAnswers);
                }}
              />
            </View>
          )}
          <StatusBar style="auto" />
        </ScrollView>
        <View
          style={{
            justifyContent: "center",
            width: "100%",
            marginTop: 15,
            alignItems: "center",
          }}
        >
          <AppButton
            title="Next question"
            style={{ fontWeight: "bold" }}
            disabled={
              [...new Set(userAnswers)].length == 0 &&
              pageContent.quizQuestions[currentQuestion].type != "video"
            }
            onPress={() => {
              if (pageContent.quizQuestions[currentQuestion].type == "video") {
                setCurrentQuestion(currentQuestion + 1);
                setUserAnswers([]);
              } else {
                const answers = [...new Set(userAnswers)].sort();
                if (
                  JSON.stringify(answers) ==
                  JSON.stringify(pageContent.quizAnswers[currentQuestion])
                ) {
                  Alert.alert(
                    "Done!",
                    currentQuestion == pageContent.quizQuestions.length - 1
                      ? "That's all! Thanks for your response!"
                      : pageContent.quizQuestions[currentQuestion].type !=
                        "shortform"
                      ? "Your answer to this question was correct."
                      : "Thanks for your response!",
                    [
                      {
                        text:
                          currentQuestion ==
                          pageContent.quizQuestions.length - 1
                            ? "Finish activity"
                            : "Next question",
                        onPress: async () => {
                          if (
                            currentQuestion ==
                            pageContent.quizQuestions.length - 1
                          ) {
                            await incrementAndReturnIndex();
                            navigation.navigate("FUTUREPAIN");
                          } else {
                            setCurrentQuestion(currentQuestion + 1);
                            setUserAnswers([]);
                          }
                        },
                      },
                    ]
                  );
                } else {
                  Alert.alert(
                    "Close!",
                    pageContent.quizFeedbacks[currentQuestion]
                  );
                }
              }
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "left",
    justifyContent: "flex-start",
    padding: 20,
    paddingTop: 0,
  },
  buttonTop: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    elevation: 3,
    backgroundColor: "#7f7f7f",
    width: "100%",
    borderColor: "white",
    borderWidth: 1,
  },
  buttonBottom: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    elevation: 3,
    backgroundColor: "#7f7f7f",
    width: "100%",
    borderColor: "white",
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "#7f7f7f",
    width: "100%",
    borderColor: "white",
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
