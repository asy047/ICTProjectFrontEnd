import { View, Text, Image, StyleSheet, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import SIZE from "../constants/size";
import Swiper from "react-native-swiper";

const MyPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      title: "등록된 내 차",
      description: "12하 3456",
    },
    {
      title: "현재까지 충전 시간",
      description: "68시간",
    },
    {
      title: "등록된 내 세번째 차",
      description: "This is the third slide.",
    },
  ];
  const logout = () => {
    Alert.alert(
      `로그아웃 하시겠습니까?`,
      `이사를 하셨다면 탈퇴 후 다시 가입해주세요.`,
      [
        {
          text: "취소",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "확인", onPress: () => console.log("logout") },
      ]
    );
  };
  const signout = () => {
    Alert.alert(
      `탈퇴 하시겠습니까?`,
      `이사를 하셨다면 탈퇴 후 다시 가입해주세요.`,
      [
        {
          text: "취소",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "확인", onPress: () => console.log("signout") },
      ]
    );
  };

  const renderSlides = () => {
    return slides.map((slide, index) => (
      <View key={index} style={[styles.boxesStyle]}>
        <Text style={styles.boxDescBold}>{slide.title}</Text>
        <Text style={styles.boxDescLarge}>{slide.description}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={{
          flex: 1,
        }}
        colors={[COLORS.second, COLORS.primary]}
      ></LinearGradient>
      <SafeAreaView style={styles.bgBox}>
        <View style={styles.floatTopArea}>
          <View
            style={{
              marginBottom: 15,
            }}
          >
            <Text style={styles.hello}>안녕하세요!</Text>
            <Text style={styles.nameHeader}>홍길동 님</Text>
          </View>
          <Image
            style={{ justifyContent: "center", alignContent: "center" }}
            source={require("../assets/profile-circle.png")}
          />
        </View>
        <View style={styles.swiperContainer}>
          <Swiper
            height={155}
            activeDotColor={COLORS.black}
            dotColor={COLORS.grey}
            dotStyle={{ marginTop: -20 }}
            activeDotStyle={{ marginTop: -20, width: 18 }}
          >
            {renderSlides()}
          </Swiper>
        </View>
        <View
          style={[
            styles.boxesContainer,
            { marginTop: 0, marginHorizontal: 15 },
          ]}
        >
          <View style={[styles.boxesStyle]}>
            <Text style={styles.boxDescBold}>마지막 출차 시간</Text>
            <Text style={[styles.boxDescLarge, { fontSize: 30 }]}>
              23년 4월 7일 07:14
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.boxesContainer,
            {
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
            },
          ]}
        >
          <Pressable onPress={() => logout()}>
            <Text
              style={{
                textAlign: "center",
                textDecorationLine: "underline",
                marginVertical: 20,
              }}
            >
              로그아웃
            </Text>
          </Pressable>
          <Pressable onPress={() => signout()}>
            <Text
              style={{
                textAlign: "center",
                textDecorationLine: "underline",
                marginVertical: 10,
                color: COLORS.highlight,
              }}
            >
              탈퇴하기
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignContent: "center",
  },
  swiperContainer: {
    marginTop: 50,
    marginHorizontal: 15,
    flex: 2,
    justifyContent: "center",
    alignContent: "center",
  },
  bgBox: {
    backgroundColor: COLORS.white,
    flex: 2,
    justifyContent: "center",
    alignContent: "center",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
  },
  boxesContainer: {
    flex: 1,
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
    padding: 10,
  },
  boxDescBold: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.black,
    textAlign: "center",
    marginBottom: 10,
  },
  boxDescLarge: {
    fontWeight: "700",
    fontSize: 40,
    color: COLORS.second,
    textAlign: "center",
    letterSpacing: -1,
  },
  boxDesc: {
    flexWrap: "wrap",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "center",
  },
  floatTopArea: {
    flex: 1,
    position: "absolute",
    top: "-30%",
    left: "50%",
    transform: [{ translateX: -75 }],
  },
  hello: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    color: COLORS.white,
  },
  nameHeader: {
    fontSize: 40,
    fontWeight: "900",
    textAlign: "center",
    color: COLORS.white,
  },
});

export default MyPage;
