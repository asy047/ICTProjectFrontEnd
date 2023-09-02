import { View, Text, Image, Pressable, Animated, Easing } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import COLORS from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable"; // import Animatable

const Welcome = ({ navigation }) => {
  const image1Opacity = useRef(new Animated.Value(0)).current;
  const image2Opacity = useRef(new Animated.Value(0)).current;
  const image1Y = useRef(new Animated.Value(0)).current;
  const image2Y = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 첫 번째 이미지 fadeIn 애니메이션
    Animated.timing(image1Opacity, {
      toValue: 1,
      duration: 1000, // 1000ms(1초) 동안 fadeIn
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    // 첫 번째 이미지 translateY 애니메이션
    Animated.timing(image1Y, {
      toValue: 5, // 이동할 y값
      duration: 1000, // 1000ms(1초) 동안 이동
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    // 0.5초 딜레이 후 두 번째 이미지 fadeIn 애니메이션
    setTimeout(() => {
      Animated.timing(image2Opacity, {
        toValue: 1,
        duration: 1000, // 1000ms(1초) 동안 fadeIn
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();

      // 두 번째 이미지 translateY 애니메이션
      Animated.timing(image2Y, {
        toValue: 5, // 이동할 y값
        duration: 1000, // 1000ms(1초) 동안 이동
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, 500); // 0.5초 딜레이
  }, []);

  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.primary, COLORS.second]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 4 }}>
          <Animated.View
            style={{
              position: "absolute",
              top: 30,
              left: 30,
              width: 100,
              height: 100,
              borderRadius: 10,
              backgroundColor: "rgba(255, 255, 255, .8)",
              transform: [{ rotate: "-5deg" }, { translateY: image1Y }], // translateY 추가
              opacity: image1Opacity, // 이미지1의 투명도
            }}
          >
            <Image
              source={require("../assets/welcome-person-01.png")}
              style={{
                width: 100,
                height: 100,
              }}
            />
          </Animated.View>
          <Animated.View
            style={{
              position: "absolute",
              top: 100,
              left: 90,
              width: 150,
              height: 150,
              borderRadius: 10,
              backgroundColor: "rgba(255, 255, 255, .9)",
              transform: [{ rotate: "10deg" }, { translateY: image2Y }], // translateY 추가
              opacity: image2Opacity, // 이미지2의 투명도
            }}
          >
            <Image
              source={require("../assets/welcome-person-02.png")}
              style={{
                width: 150,
                height: 150,
              }}
            />
          </Animated.View>
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
