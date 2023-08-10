import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image
          source={require("../assets/homeImage.png")}
          style={{ width: "100%" }}
        ></Image>
      </View>
      <View style={styles.chargeArea}>
        <LinearGradient
          colors={["#39E3B3", "#3CCBCB"]} // 그라디언트 색상 배열
          style={styles.gradient}
          start={{ x: 1, y: 0 }} // 시작점 (왼쪽 아래)
          end={{ x: 0, y: 1 }} // 끝점 (오른쪽 위)
        >
          <View style={styles.chargeCircle}>
            {/* <LinearGradient
                colors={['#39E3B3', '#3CCBCB']} // 그라디언트 색상 배열
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{ borderRadius: 8, overflow: 'hidden' }}
              > */}
            <Text style={styles.chargePercent}>100%</Text>
            {/* </LinearGradient> */}
            <Text>충전 완료!</Text>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.bgBox}>
        <View style={styles.recentParkBox}>
          <Text>현재 주차 위치</Text>
          <Text>B4 3번</Text>
          <Text>12하 5678</Text>
        </View>
        <View>
          <View>
            <Text>배터리 온도</Text>
            <Text>주의</Text>
          </View>
          <View>
            <Text>유해가스</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageArea: {
    flex: 2,
    position: "relative",
    backgroundColor: "blue",
  },
  bgBox: {
    flex: 5,
    width: "100%", // 화면 전체로 설정
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
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
    fontSize: 36,
    fontWeight: "bold",
    color: "#39E3B3",
    overflow: "hidden",
  },
  recentParkBox: {
    backgroundColor: "red",
  },
});

export default Home;
