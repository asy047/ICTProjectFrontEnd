import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.primary, COLORS.second]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 4 }}>
          <View
            style={{
              position: "absolute",
              top: 30,
              left: 30,
              width: 100,
              height: 100,
              borderRadius: 10,
              backgroundColor: "rgba(255, 255, 255, .8)",
              transform: [{ rotate: "-5deg" }],
            }}
          >
            <Image
              source={require("../assets/welcome-person-01.png")}
              style={{
                width: 100,
                height: 100,
              }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              top: 100,
              left: 90,
              width: 150,
              height: 150,
              borderRadius: 10,
              backgroundColor: "rgba(255, 255, 255, .9)",
              transform: [{ rotate: "10deg" }],
            }}
          >
            <Image
              source={require("../assets/welcome-person-02.png")}
              style={{
                width: 150,
                height: 150,
              }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              top: 150,
              right: -280,
              width: 600,
              height: 300,
            }}
          >
            <Image
              source={require("../assets/welcome-car.png")}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
        </View>

        {/* contents */}

        <View
          style={{
            flex: 3,
            // backgroundColor: "blue",
            paddingHorizontal: 25,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 46,
              color: COLORS.white,
            }}
          >
            같이,
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 46,
              color: COLORS.white,
            }}
          >
            시작해볼까요?
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 10,
              fontWeight: "600",
              color: COLORS.white,
            }}
          >
            충전 중 전기차 화재 사고 이제 걱정마세요.
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: COLORS.white,
            }}
          >
            저희와 함께하면 사고 예방할 수 있어요!
          </Text>
          <Button
            onPress={() => {
              navigation.navigate("Signup");
            }}
            title="시작하기"
            color={COLORS.white}
            textColor={COLORS.second}
            style={{
              marginTop: 20,
            }}
            disabled={false}
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "center",
              alignItems: "baseline",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: COLORS.white,
              }}
            >
              이미 계정이 있으신가요?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 16,
                  fontWeight: "bold",
                  color: COLORS.white,
                }}
              >
                로그인
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Welcome;
