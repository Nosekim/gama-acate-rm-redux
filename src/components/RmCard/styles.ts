import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  imageBox: {},
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoBlock: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
});

export default styles;
