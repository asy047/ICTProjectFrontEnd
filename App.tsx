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

const apiUrl = "https://13f3-203-249-39-175.ngrok-free.app";

// axios
//   .get(`${apiUrl}/api/parkingLot/carInfoSave`)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     if (error.response.status === 405) {
//       console.error("Method not allowed:", error.response.statusText);
//     } else {
//       console.error("An error occurred:", error.message);
//     }
//   });

// POST 요청 예시
// const requestData = {
//   batValue: 10,
//   carColor: "red",
//   carNum: 1011,
// };
// axios
//   .post(`${apiUrl}/api/parkingLot/carInfoSave`, requestData)
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
// import { useState, useEffect, useRef } from "react";
// import { Text, View, Button, Platform } from "react-native";
// import * as Device from "expo-device";
// import * as Notifications from "expo-notifications";

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

// export default function App() {
//   const [expoPushToken, setExpoPushToken] = useState("");
//   const [notification, setNotification] = useState(false);
//   const notificationListener = useRef();
//   const responseListener = useRef();

//   useEffect(() => {
//     registerForPushNotificationsAsync().then((token) =>
//       setExpoPushToken(token)
//     );

//     notificationListener.current =
//       Notifications.addNotificationReceivedListener((notification) => {
//         setNotification(notification);
//       });

//     responseListener.current =
//       Notifications.addNotificationResponseReceivedListener((response) => {
//         console.log(response);
//       });

//     return () => {
//       Notifications.removeNotificationSubscription(
//         notificationListener.current
//       );
//       Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);

//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "space-around",
//       }}
//     >
//       <Text>Your expo push token: {expoPushToken}</Text>
//       <View style={{ alignItems: "center", justifyContent: "center" }}>
//         <Text>Title: {notification && notification.request.content.title}</Text>
//         <Text>Body: {notification && notification.request.content.body}</Text>
//         <Text>
//           Data:{" "}
//           {notification && JSON.stringify(notification.request.content.data)}
//         </Text>
//       </View>
//       <Button
//         title="Press to schedule a notification"
//         onPress={async () => {
//           await schedulePushNotification();
//         }}
//       />
//     </View>
//   );
// }

// async function schedulePushNotification() {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: "You've got mail! 📬",
//       body: "Here is the notification body",
//       data: { data: "goes here" },
//     },
//     trigger: { seconds: 2 },
//   });
// }

// async function registerForPushNotificationsAsync() {
//   let token;

//   if (Platform.OS === "android") {
//     await Notifications.setNotificationChannelAsync("default", {
//       name: "default",
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: "#FF231F7C",
//     });
//   }

//   if (Device.isDevice) {
//     const { status: existingStatus } =
//       await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== "granted") {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== "granted") {
//       alert("Failed to get push token for push notification!");
//       return;
//     }
//     // Learn more about projectId:
//     // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
//     token = (
//       await Notifications.getExpoPushTokenAsync({
//         projectId: "your-project-id",
//       })
//     ).data;
//     console.log(token);
//   } else {
//     alert("Must use physical device for Push Notifications");
//   }

//   return token;
// }
