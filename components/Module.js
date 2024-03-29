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
import MoveOnButton from "./ButtonStyles/MoveOnButton";
import { incrementAndReturnIndex, moduleTitles } from "./frameworks/constants";

export default function Module({ navigation, pageNumber = 0 }) {
  const route = useRoute();
  if (route.params) pageNumber = route.params?.pageNumber;
  const modTitle = moduleTitles[pageNumber - 1];
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white", minHeight: "100%" }}>
        <Text
          style={{
            fontSize: 30,
            paddingTop: "10%",
            textAlign: "center",
          }}
        >
          Welcome to:{" "}
        </Text>
        <Text
          style={{
            fontSize: 30,
            paddingTop: 5,
            fontWeight: "800",
            textAlign: "center",
          }}
        >
          {modTitle}
        </Text>
        <View
          style={{
            width: "70%",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              paddingTop: 20,
              paddingBottom: 15,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            You've just entered a new module. As the study is sectioned into
            multiple modules, the content you will encounter will also be
            different across modules. Ready?
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            width: "100%",
            flexDirection: "row",
            gap: "50%",
          }}
        >
          <Button
            title="Continue"
            onPress={async () => {
              await incrementAndReturnIndex();
              navigation.navigate("FUTUREPAIN");
            }}
          />
        </View>
        <StatusBar style="auto" />
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
