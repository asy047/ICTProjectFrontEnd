import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import axios from "axios";

const Stack = createNativeStackNavigator();
import { Welcome, Signup, Login } from "./screens";
import Home from "./screens/Home";
import COLORS from "./constants/colors";

// const apiUrl = "http://localhost:8080/";

// axios.get(`${apiUrl}/endpoint`)
//   .then(response => {
//     console.log(response.data); // 백엔드에서 받아온 데이터 처리
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// // POST 요청 예시
// const requestData = { /* 요청 데이터 */ };
// axios.post(`${apiUrl}/endpoint`, requestData)
//   .then(response => {
//     console.log(response.data); // 백엔드에서 받아온 응답 처리
//   })
//   .catch(error => {
//     console.error('Error posting data:', error);
//   });

export default function App() {
  const homeis = true;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={homeis ? "Home" : "Welcome"}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            title: "로그인",
            headerTintColor: COLORS.second,
            headerTitleStyle: {
              fontWeight: "bold",
              color: COLORS.black,
            },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: true,
            title: "회원가입",
            headerTintColor: COLORS.second,
            headerTitleStyle: {
              fontWeight: "bold",
              color: COLORS.black,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
