import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";

const Login = () => {
  const [name, setName] = React.useState("");
  const [carNum, setCarNum] = React.useState("");
  const [phoneNum, setPhoneNum] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
  },
});

export default Login;
