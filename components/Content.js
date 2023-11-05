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
import pages, { parseNewElement, parseBold, images } from "./ContentBody";
import { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DynamicHeader from "./DynamicHeader";

const scrollPercentage = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}) => {
  return (
    ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100
  );
};

export default function Content({ navigation, pageNumber = 1 }) {
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
    setTotalHeight(event.nativeEvent.contentSize.height);
  };
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
          scrollEventThrottle={16}
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
                            padding: 6,
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
                  <Text style={{ lineHeight: 32, padding: 6 }}>
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
                    <Text style={{ fontSize: 25 }}>
                      {"\u29bf"}
                      {"  "}
                    </Text>
                  );
                  boldSeparation.forEach((text) => {
                    if (text[0] == "#") {
                      // bold text
                      arrToReturn.push(
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                          }}
                        >
                          {" " + text.substring(1) + " "}
                        </Text>
                      );
                    } else {
                      arrToReturn.push(
                        <Text style={{ fontSize: 20 }}>{text}</Text>
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
              case "bulletalert": {
                const arrToReturn = [],
                  elements = parseNewElement(element.content);
                elements.forEach((element) => {
                  const boldSeparation = parseBold(element);
                  arrToReturn.push(
                    <Text style={{ fontSize: 18 }}>
                      {"        \u29be"}
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
                          {" " + text.substring(1) + " "}
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
          <View style={{ justifyContent: "center", width: "100%" }}>
            <Button
              title="Open quiz"
              style={{ fontWeight: "bold" }}
              onPress={() => {
                navigation.navigate("Quiz");
              }}
            />
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
    paddingBottom: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
