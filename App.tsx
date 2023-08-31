import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

const Stack = createNativeStackNavigator();
import { Welcome, Signup, Login } from "./screens";
import Home from "./screens/Home";
import COLORS from "./constants/colors";
import MyPage from "./screens/MyPage";

const apiUrl = "http://localhost:8080/";

// axios
//   .get(`${apiUrl}/`)
//   .then((response) => {
//     console.log(response.data); // 백엔드에서 받아온 데이터 처리
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// // POST 요청 예시
// const requestData = {

// };
// axios
//   .post(`${apiUrl}/`, requestData)
//   .then((response) => {
//     console.log(response.data); // 백엔드에서 받아온 응답 처리
//   })
//   .catch((error) => {
//     console.error("Error posting data:", error);
//   });

export default function App() {
  const homeis = true;
  // 요청받은 정보를 담아줄 변수 선언
  const [testStr, setTestStr] = useState("");

  // 변수 초기화
  function callback(str: string) {
    setTestStr(str);
  }

  // 첫 번째 렌더링을 마친 후 실행
  useEffect(() => {
    axios({
      url: apiUrl,
      method: "GET",
    }).then((res) => {
      callback(res.data);
      console.log(res.data);
    });
  }, []);

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
        <Stack.Screen
          name="MyPage"
          component={MyPage}
          options={{
            headerShown: false,
            title: "마이페이지",
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
