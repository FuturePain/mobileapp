import * as React from "react";
import { useEffect } from "react";
import { Text, View, Animated, StyleSheet } from "react-native";

const Header_Max_Height = 120;
const Header_Min_Height = 80;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

const RGBAToHexA = (rgba, forceRemoveAlpha = false) => {
  return (
    "#" +
    rgba
      .replace(/^rgba?\(|\s+|\)$/g, "") // Get's rgba / rgb string values
      .split(",") // splits them at ","
      .filter((string, index) => !forceRemoveAlpha || index !== 3)
      .map((string) => parseFloat(string)) // Converts them to numbers
      .map((number, index) => (index === 3 ? Math.round(number * 255) : number)) // Converts alpha to 255 number
      .map((number) => number.toString(16)) // Converts numbers to hex
      .map((string) => (string.length === 1 ? "0" + string : string)) // Adds 0 when length of one number is 1
      .join("")
  ); // Puts the array to togehter to a string
};

const pickTextColorBasedOnBgColorSimple = (bgColor, lightColor, darkColor) => {
  arr = JSON.stringify(bgColor).split("rgba(")[1].split(", ");
  return parseFloat(arr[0]) * 0.299 +
    parseFloat(arr[1]) * 0.587 +
    parseFloat(arr[2]) * 0.114 >
    186
    ? darkColor
    : lightColor;
};

const DynamicHeader = ({
  modDone,
  modTotal,
  animHeaderValue,
  valueOfHeight,
  totalHeight,
  totalTime,
}) => {
  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [
      0,
      Header_Max_Height - Header_Min_Height,
      0.45 * totalHeight,
      0.75 * totalHeight,
      totalHeight,
    ],
    outputRange: ["#ffb6c1", "#FFD580", "yellow", "#90EE90", "#2AAA8A"],
    extrapolate: "clamp",
  });
  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animateHeaderHeight,
          backgroundColor: animateHeaderBackgroundColor,
        },
      ]}
    >
      <Text
        style={[
          styles.headerText,
          {
            color: pickTextColorBasedOnBgColorSimple(
              animateHeaderBackgroundColor,
              "#FFFFFF",
              "#000000"
            ),
          },
        ]}
      >
        {Math.max(
          0,
          Math.min(100, Math.round((valueOfHeight * 100) / (0.8 * totalHeight)))
        )}
        {"% "}
        done
        {Math.max(
          0,
          Math.min(100, Math.round((valueOfHeight * 100) / (0.8 * totalHeight)))
        ) == 100
          ? "!"
          : ""}
      </Text>
      <Text
        style={{
          color: pickTextColorBasedOnBgColorSimple(
            animateHeaderBackgroundColor,
            "#FFFFFF",
            "#000000"
          ),
        }}
      >
        🕐{" "}
        {Math.round(
          totalTime -
            (totalTime *
              Math.max(
                0,
                Math.min(
                  100,
                  Math.round((valueOfHeight * 100) / (0.8 * totalHeight))
                )
              )) /
              100
        )}{" "}
        minute
        {Math.round(
          totalTime -
            (totalTime *
              Math.max(
                0,
                Math.min(
                  100,
                  Math.round((valueOfHeight * 100) / (0.8 * totalHeight))
                )
              )) /
              100
        ) == 1
          ? ""
          : "s"}{" "}
        left to complete
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
  },
  headerText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default DynamicHeader;
