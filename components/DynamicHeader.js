import * as React from "react";
import { useEffect } from "react";
import { Text, View, Animated, StyleSheet } from "react-native";

const Header_Max_Height = 80;
const Header_Min_Height = 60;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

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
      0.4 * totalHeight,
      0.6 * totalHeight,
      0.8 * totalHeight,
      totalHeight,
    ],
    outputRange: ["#ffb6c1", "red", "#FFD580", "yellow", "#90EE90", "#2AAA8A"],
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
      <Text style={styles.headerText}>
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
      <Text>
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
        minutes left to complete
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
