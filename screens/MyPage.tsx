import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";

const MyPage = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        style={{
          flex: 1,
        }}
        colors={[COLORS.second, COLORS.primary]}
      ></LinearGradient>
      <SafeAreaView style={{ flex: 2 }}>
        <View style={{}}>
          <Image source={require("../assets/")} />
        </View>
      </SafeAreaView>
      <Text>MyPage</Text>
    </View>
  );
};

export default MyPage;
