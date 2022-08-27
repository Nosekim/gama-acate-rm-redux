import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleHead: {
    fontSize: 32,
    textAlign: "center",
  },
  separator: {
    height: 8,
  },
  img: {
    width: 300,
    height: 90,
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 50,
    flexDirection: "row",
  },
  counter: {
    left: 0,
    top: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "tomato",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
