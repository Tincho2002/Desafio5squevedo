import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  containerTouchable: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  name: {
    fontSize: 17,
    fontFamily: "Inter-Regular",
    color: COLORS.text,
  },
});
