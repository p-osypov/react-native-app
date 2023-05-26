import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
  },
  circle: {
    position: "absolute",
    borderWidth: 2,
  },
  circle1: {
    top: 0,
    right: 0,
    transform: [{ translateX: 50 }, { translateY: -50 }],
    width: 240,
    height: 240,
    borderRadius: 240,
    borderColor: "#51389F",
  },
  circle2: {
    top: "40%",
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 200,
    transform: [{ translateX: -60 }],
    borderColor: "#9F8452",
  },
  circle3: {
    bottom: 0,
    right: 0,
    width: 80,
    height: 80,
    borderRadius: 80,
    transform: [{ translateX: 60 }],
    borderColor: "#39763F",
  },
});

export default styles;
