import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ field: "", message: "" });

  const onSubmit = () => {
    const loginError = { field: "", message: "" };
    if (email === "") {
      loginError.field = "email";
      loginError.message = "Please enter your email";
      setError(loginError);
    } else if (password === "") {
      loginError.field = "password";
      loginError.message = "Please enter your password";
      setError(loginError);
    } else {
      setError({ field: "", message: "" });
      alert("Login successfully!");
    }
  };

  return (
    <>
      <Text style={styles.login}>Intro Login</Text>
      <TextInput
        placeholder="Enter Email"
        style={styles.inputField}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      {error.field === "email" && (
        <Text style={styles.error}>{error.message}</Text>
      )}
      <TextInput
        placeholder="Enter Password"
        style={styles.inputField}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      {error.field === "password" && (
        <Text style={styles.error}>{error.message}</Text>
      )}
      <TouchableOpacity style={styles.submit} onPress={onSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;
