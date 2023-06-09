import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  submit: {
    backgroundColor: COLORS.black,
    margin: 50,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  login: {
    backgroundColor: COLORS.black,
    color: COLORS.white,
    padding: 10,
    alignItems: "center",
    margin: 20,
    borderRadius: 5,
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },
  submitText: {
    fontSize: 18,
    color: COLORS.white,
    fontFamily: "Inter-Regular",
  },
  error: {
    fontSize: 15,
    color: COLORS.brightRed,
    fontFamily: "Inter-Bold",
  },
  inputField: {
    width: "85%",
    margin: 8,
    color: "#3b5998",
    borderRadius: 5,
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,
    backgroundColor: COLORS.login,
    fontFamily: "Inter-Bold",
    login: "#f8f7ff",
  },
});
