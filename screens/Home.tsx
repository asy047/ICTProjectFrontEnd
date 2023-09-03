import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import * as Notifications from "expo-notifications";
import * as Animatable from "react-native-animatable"; // Import Animatable

const Home = ({ navigation }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [gradientPercent, setGradientPercent] = useState(0);
  // const [gradientColors, setGradientColors] = useState([
  //   `rgba(57, 227, 179, 0)`,
  //   COLORS.second,
  // ]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setGradientPercent((current) => (current === 1.0 ? 0.2 : 1.0));
    }, 3000);

    return () => clearInterval(animationInterval);
  }, []);

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };

  const buttonStyles = [styles.button, isHovered && styles.hoveredButton];

  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body of the notification",
        data: { userName: "Max" },
      },
      trigger: {
        seconds: 5,
      },
    });
  }
  const temp = -0;
  const gas = -0;
  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image
          source={require("../assets/homeImage.png")}
          style={{ width: "100%" }}
        ></Image>
      </View>
      <SafeAreaView
        style={{
          padding: 5,
          position: "absolute",
          top: 0,
          right: 15,
        }}
      >
        <Pressable
          style={[
            buttonStyles,
            {
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            },
          ]}
          onPressIn={() => navigation.navigate("Welcome")}
        >
          <Image source={require("../assets/bell.png")} />
        </Pressable>
        <TouchableOpacity
          style={[
            buttonStyles,
            {
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
            },
          ]}
          onPressIn={() => navigation.navigate("MyPage")}
        >
          <Image source={require("../assets/profile.png")} />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.chargeArea}>
        <Animated.View style={styles.gradient}>
          <LinearGradient
            colors={[
              `rgba(57, 227, 179, ${gradientPercent})`,
              `rgba(60, 203, 203, ${
                gradientPercent < 0.5 ? gradientPercent : 1
              })`,
            ]}
            style={styles.gradient}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View style={styles.chargeCircle}>
              <Text style={[styles.chargePercent]}>
                {gradientPercent === 1.0 ? "100%" : gradientPercent * 100 + "%"}
              </Text>
              <Text>
                {gradientPercent === 1.0 ? "충전 완료!" : "충전 중..."}
              </Text>
            </View>
          </LinearGradient>
        </Animated.View>
        <Image
          source={require("../assets/electricity.png")}
          style={{
            position: "absolute",
            bottom: -20,
            left: "50%",
            transform: [{ translateX: -25 }],
            zIndex: 1,
          }}
        />
      </View>
      <View style={styles.bgBox}>
        <View style={{ flex: 1 }}>
          {/* margin을 위한 View */}
          <View style={{ flex: 1.2 }}></View>
          <View style={[styles.recentParkBox, styles.boxesStyle, { flex: 1 }]}>
            <Text
              style={[
                styles.boxDesc,
                { fontSize: 16, fontWeight: "bold", color: COLORS.black },
              ]}
            >
              현재 주차 위치
            </Text>
            <Text
              style={[
                styles.boxDesc,
                { fontWeight: "bold", fontSize: 40, color: COLORS.second },
              ]}
            >
              B4 3번
            </Text>
            <Text style={[styles.boxDesc, { fontSize: 21, fontWeight: "500" }]}>
              12하 5678
            </Text>
          </View>
          <SafeAreaView
            style={{ flex: 2, flexDirection: "row", marginTop: 10 }}
          >
            <View style={[{ flex: 1 }, styles.boxesStyle]}>
              <Text style={styles.boxDescBold}>배터리</Text>
              {temp >= 0 ? (
                <CenteredImage
                  source={require("../assets/battery-safe.png")}
                  text="안전"
                  desc={`배터리 온도가 낮습니다.\n충전을 계속해도 좋습니다.`}
                />
              ) : (
                <CenteredImage
                  source={require("../assets/battery-danger.png")}
                  text="위험"
                  desc={`배터리 온도가 높습니다.\n충전을 중단하십시오.`}
                  danger={true}
                />
              )}
            </View>
            <View style={[{ flex: 1 }, styles.boxesStyle]}>
              <Text style={styles.boxDescBold}>유해가스</Text>
              {gas >= 0 ? (
                <CenteredImage
                  source={require("../assets/gas-safe.png")}
                  text="안전"
                  desc={`유해가스가\n감지되지 않았습니다.`}
                />
              ) : (
                <CenteredImage
                  source={require("../assets/gas-danger.png")}
                  text="위험"
                  desc="유해가스가 검출되었습니다. 환풍구를 가동합니다."
                  danger={true}
                />
              )}
            </View>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

const CenteredImage = ({ source, text, desc, danger }) => (
  <View style={styles.centerContent}>
    <Image style={styles.imageStyle} source={source} />
    <Text
      style={[
        styles.boxDescLarge,
        { color: danger ? COLORS.highlight : COLORS.second },
      ]}
    >
      {text}
    </Text>
    <Text style={styles.centerText}>{desc}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  button: { flex: 1, padding: 10, backgroundColor: COLORS.white },
  hoveredButton: {
    backgroundColor: "#2980b9", // Change background color on hover
  },
  imageArea: {
    flex: 2,
    position: "relative",
    backgroundColor: "blue",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  chargeArea: {
    width: 230,
    height: 230,
    zIndex: 1,
    position: "absolute",
    top: "20%",
    left: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 230,
  },
  chargeCircle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "96%",
    height: "96%",
    borderRadius: 230,
  },
  chargePercent: {
    fontSize: 48,
    fontWeight: "bold",
    color: COLORS.second,
    letterSpacing: -1,
  },
  electricityIcon: {
    position: "absolute",
    bottom: -20,
    left: "50%",
    transform: [{ translateX: -25 }],
    zIndex: 1,
  },
  bgBox: {
    flex: 5,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
  },
  recentParkBox: {
    width: 350,
    flex: 1.2,
  },
  boxesContainer: {
    flex: 2,
    flexDirection: "row",
    marginTop: 10,
  },
  boxesStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    shadowOpacity: 0.125,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    maxHeight: 225,
    marginHorizontal: 5,
    padding: 10,
  },
  boxDescBold: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.black,
    textAlign: "center",
    marginBottom: 20,
  },
  boxDescLarge: {
    fontWeight: "900",
    fontSize: 24,
    color: COLORS.second,
    textAlign: "center",
    letterSpacing: -1,
    marginVertical: 5,
  },
  boxDesc: {
    flexWrap: "wrap",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "center",
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    resizeMode: "contain",
  },
  centerText: {
    textAlign: "center",
    marginVertical: 10,
  },
});

export default Home;
