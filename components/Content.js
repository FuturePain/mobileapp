import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import pages, {
  parseNewElement,
  parseBold,
  images,
} from "./frameworks/ContentBody";
import { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DynamicHeader from "./DynamicHeader";
import { useRoute } from "@react-navigation/native";
import MoveOnButton from "./MoveOnButton";
import { incrementAndReturnIndex } from "./frameworks/constants";
import * as Speech from "expo-speech";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Content({ navigation, pageNumber = 0 }) {
  const route = useRoute();
  if (route.params) pageNumber = route.params?.pageNumber;
  const pageContent = pages[pageNumber - 1];
  let wordCount = pageContent.pageTitle.split(" ").length;
  for (let i = 0; i < pageContent.listOfBody.length; i++) {
    wordCount += pageContent.listOfBody[i].content.split(" ").length;
  }
  wordCount /= 100;
  let modulesDone = pageNumber - 1,
    modulesTotal = pages.length;
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const [valueOfHeight, setValueOfHeight] = useState(0);
  const [totalHeight, setTotalHeight] = useState(2000);
  const handleScroll = (event) => {
    const positionY = event.nativeEvent.contentOffset.y;
    setValueOfHeight(positionY);
    setTotalHeight(event.nativeEvent.contentSize.height - 830);
  };
  const [speechToSay, setSpeechToStay] = useState([]);
  const [paused, setPaused] = useState(true);
  const [firstTime, setFirstTime] = useState(true);
  const scrollViewRef = useRef(null);
  useEffect(() => {
    for (let i = 0; i < pageContent.listOfBody.length; i++) {
      if (
        pageContent.listOfBody[i].type == "heading" ||
        pageContent.listOfBody[i].type == "subheading"
      ) {
        setSpeechToStay((e) => [...e, pageContent.listOfBody[i].content]);
      } else if (pageContent.listOfBody[i].type == "image") {
        setSpeechToStay((e) => [
          ...e,
          "At this point in the page, there is an image.",
        ]);
      } else {
        let newStr = pageContent.listOfBody[i].content
          .replaceAll("*", " ")
          .replaceAll("^", " ")
          .replaceAll("*", " ");
        setSpeechToStay((e) => [...e, newStr]);
      }
    }
  }, []);
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <DynamicHeader
          modDone={modulesDone}
          modTotal={modulesTotal}
          animHeaderValue={scrollOffsetY}
          valueOfHeight={valueOfHeight}
          totalHeight={totalHeight}
          totalTime={Math.ceil(wordCount)}
        />
        <ScrollView
          contentContainerStyle={styles.container}
          scrollEventThrottle={10}
          ref={scrollViewRef}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
            { listener: (event) => handleScroll(event), useNativeDriver: false }
          )}
        >
          <Text
            style={{
              fontSize: 40,
              paddingTop: 15,
              paddingBottom: 15,
              fontWeight: "800",
            }}
          >
            {pageContent.pageTitle}
          </Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {firstTime ? (
              <MaterialIcons
                name="play-circle-filled"
                onPress={() => {
                  setFirstTime(false);
                  setPaused(false);
                  for (let i = 0; i < speechToSay.length; i++) {
                    Speech.speak(speechToSay[i], {
                      rate: 0.77,
                      pitch: 1.2,
                      voice: "com.apple.ttsbundle.Samantha-premium",
                    });
                  }
                }}
                size={50}
                color="black"
              />
            ) : (
              <>
                {paused ? (
                  <MaterialCommunityIcons
                    name="play-circle-outline"
                    onPress={() => {
                      setPaused(false);
                      Speech.resume();
                    }}
                    size={50}
                    color="black"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="pause-circle-outline"
                    onPress={() => {
                      setPaused(true);
                      Speech.pause();
                    }}
                    size={50}
                    color="black"
                  />
                )}
              </>
            )}
          </View>
          {pageContent.listOfBody.map((element) => {
            switch (element.type) {
              case "heading": {
                return (
                  <Text
                    key={element.content}
                    style={{ fontSize: 30, fontWeight: "700", padding: 10 }}
                  >
                    {element.content}
                  </Text>
                );
              }
              case "subheading": {
                return (
                  <Text
                    key={element.content}
                    style={{ fontSize: 25, fontWeight: "500", padding: 10 }}
                  >
                    {element.content}
                  </Text>
                );
              }
              case "body": {
                const arrToReturn = [],
                  elements = parseNewElement(element.content);
                elements.forEach((element) => {
                  const boldSeparation = parseBold(element);
                  boldSeparation.forEach((text) => {
                    if (text[0] == "#") {
                      // bold text
                      arrToReturn.push(
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: "bold",
                          }}
                        >
                          {" " + text.substring(1) + " "}
                        </Text>
                      );
                    } else {
                      arrToReturn.push(
                        <Text style={{ fontSize: 17 }}>{text}</Text>
                      );
                    }
                  });
                  arrToReturn.push(<Text>{"\n"}</Text>);
                });
                return (
                  <Text style={{ lineHeight: 30, paddingLeft: 6 }}>
                    {arrToReturn}
                  </Text>
                );
              }
              case "image": {
                return (
                  // <></>
                  <Image
                    key={element.content}
                    style={{
                      resizeMode: "contain",
                      width: "100%",
                      height: 350,
                    }}
                    source={images[element.content]}
                  />
                );
              }
              case "bullet": {
                const arrToReturn = [],
                  elements = parseNewElement(element.content);
                elements.forEach((element) => {
                  const boldSeparation = parseBold(element);
                  arrToReturn.push(
                    <Text style={{ fontSize: 20 }}>
                      {"\u2022"}
                      {"  "}
                    </Text>
                  );
                  boldSeparation.forEach((text) => {
                    if (text[0] == "#") {
                      // bold text
                      arrToReturn.push(
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: "bold",
                          }}
                        >
                          {" " + text.substring(1) + " "}
                        </Text>
                      );
                    } else {
                      arrToReturn.push(
                        <Text style={{ fontSize: 17 }}>{text}</Text>
                      );
                    }
                  });
                  arrToReturn.push(<Text>{"\n"}</Text>);
                });
                return (
                  <Text
                    style={{
                      lineHeight: 30,
                      paddingLeft: 6,
                      justifyContent: "center",
                    }}
                  >
                    {arrToReturn}
                  </Text>
                );
              }
              case "bulletalert": {
                const arrToReturn = [],
                  elements = parseNewElement(element.content);
                elements.forEach((element) => {
                  const boldSeparation = parseBold(element);
                  arrToReturn.push(
                    <Text style={{ fontSize: 18 }}>
                      {"\u2022"}
                      {"  "}
                    </Text>
                  );
                  boldSeparation.forEach((text) => {
                    if (text[0] == "#") {
                      // bold text
                      arrToReturn.push(
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                          }}
                        >
                          {text.substring(1)}
                        </Text>
                      );
                    } else {
                      arrToReturn.push(
                        <Text style={{ fontSize: 18 }}>{text}</Text>
                      );
                    }
                  });
                  arrToReturn.push(<Text>{"\n"}</Text>);
                });
                return (
                  <Text
                    style={{
                      lineHeight: 32,
                      padding: 6,
                      justifyContent: "center",
                    }}
                  >
                    {arrToReturn}
                  </Text>
                );
              }
            }
          })}
          <View
            style={{
              justifyContent: "center",
              width: "100%",
              flexDirection: "row",
              gap: "50%",
            }}
          >
            <Button
              title="Done!"
              onPress={async () => {
                await incrementAndReturnIndex();
                navigation.navigate("FUTUREPAIN");
              }}
            />
            {/* <Button
              title="Move on →"
              onPress={async () => {
                const contentIndex = await incrementAndReturnIndex();
                const { type, num } = translateIndex(contentIndex);
                if (type == "p") {
                  navigation.navigate("Lesson", {
                    pageNumber: num + 1,
                  });
                  scrollViewRef.current?.scrollTo({
                    y: 0,
                    animated: true,
                  });
                } else if (type == "m") {
                  navigation.navigate("Module", {
                    pageNumber: num + 1,
                  });
                } else {
                  navigation.navigate("Quiz", { pageNumber: num + 1 });
                }
              }}
            /> */}
          </View>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "left",
    justifyContent: "center",
    paddingBottom: 100,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
