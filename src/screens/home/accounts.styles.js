import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#373737",
    backgroundColor: "#262626",
    borderRadius: 16,
    padding: 16,
  },
  activeItem: {
    backgroundColor: "#242D27",
    borderColor: "#3D8F40",
  },
  itemCurrency: {
    fontSize: 34,
    flex: 1,
    textAlign: "center",
  },
  itemAmount: {
    fontSize: 34,
    flex: 1,
  },
});

export default styles;
