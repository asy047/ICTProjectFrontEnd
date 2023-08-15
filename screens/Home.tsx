import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";

const Home = () => {
  const temp = 0;
  const gas = 0;
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
        <Image
          source={require("../assets/electricity.png")}
          style={{
            position: "absolute",
            bottom: -25,
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
          <View style={{ flex: 2, flexDirection: "row", marginTop: 10 }}>
            <View style={[{ flex: 1 }, styles.boxesStyle]}>
              <Text style={[styles.boxDesc, styles.subBoxHeader]}>
                배터리 온도
              </Text>
              {temp >= 0 ? <Text>안전</Text> : <Text>주의</Text>}
            </View>
            <View style={[{ flex: 1 }, styles.boxesStyle]}>
              <Text style={styles.boxDesc}>유해가스</Text>
              {gas >= 0 ? <Text>안전</Text> : <Text>위험</Text>}
            </View>
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
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
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
    width: 350,
  },
  boxesStyle: {
    justifyContent: "center",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 20,
    shadowOpacity: 0.125,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  boxDesc: { textAlign: "center" },
  subBoxHeader: {},
  safeStyle: {},
  warningStyle: {},
});

export default Home;
