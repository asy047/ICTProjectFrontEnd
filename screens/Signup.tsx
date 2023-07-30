import { View, Text, StyleSheet } from "react-native";
import {
  HelperText,
  TextInput,
  Provider as PaperProvider,
} from "react-native-paper";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";
import COLORS from "../constants/colors";

interface SignupData {
  name: string; // Name
  aptName: string; // Apt. Name
  dong: Int16Array; // 동
  hosu: Int16Array; // 호수
  carNum: string; // 자동차번호   Login에도 사용
  phoneNum: Int16Array; // 전화번호     Login에도 사용
}

const DATA = [
  { label: "세양청마루아파트", value: "1001" },
  { label: "마젤란아파트", value: "1002" },
  { label: "리가아파트", value: "1003" },
  { label: "목동블랙하이츠", value: "1004" },
];

const Signup = () => {
  const [name, setName] = React.useState("");
  const [aptName, setAptName] = React.useState("");
  const [dong, setDong] = React.useState("");
  const [hosu, setHosu] = React.useState("");
  const [carNum, setCarNum] = React.useState("");
  const [phoneNum, setPhoneNum] = React.useState("");

  const hasErrors = () => {
    return !text.includes("@");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          // backgroundColor: "tomato",
        }}
      >
        <Text
          style={{
            fontSize: 36,
            textAlign: "center",
          }}
        >
          기본 회원 정보
        </Text>
        <Text></Text>
      </View>
      <View
        style={{
          flex: 4,
          // backgroundColor: "cyan",
        }}
      >
        <View style={[styles.TextInputStyle, { borderRadius: 4 }]}>
          <RNPickerSelect
            placeholder={{
              label: "아파트를 선택해주세요.",
              value: null,
            }}
            onValueChange={(value) => console.log(value)}
            items={DATA}
            style={pickerSelectStyles}
          />
        </View>

        <PaperProvider>
          <TextInput
            outlineColor={COLORS.second}
            activeOutlineColor={COLORS.second}
            selectionColor={COLORS.primary}
            style={styles.TextInputStyle}
            label="성함"
            placeholder="성함을 입력해주세요."
            mode="outlined"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <HelperText type="error" visible={hasErrors()}>
            Email address is invalid!
          </HelperText>
          <TextInput
            outlineColor={COLORS.second}
            activeOutlineColor={COLORS.second}
            selectionColor={COLORS.primary}
            style={styles.TextInputStyle}
            label="휴대폰 번호"
            placeholder="숫자만 입력해주세요."
            keyboardType="numeric"
            mode="outlined"
            value={phoneNum}
            onChangeText={(text) => setPhoneNum(text)}
          />
          <TextInput
            outlineColor={COLORS.second}
            activeOutlineColor={COLORS.second}
            selectionColor={COLORS.primary}
            style={styles.TextInputStyle}
            placeholder="띄어쓰기를 제외하고 입력해주세요."
            label="자동차 번호"
            mode="outlined"
            value={carNum}
            onChangeText={(text) => setCarNum(text)}
          />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              style={[styles.TextInputStyle, { flex: 1, marginRight: 5 }]}
              outlineColor={COLORS.second}
              activeOutlineColor={COLORS.second}
              selectionColor={COLORS.primary}
              label="동"
              keyboardType="numeric" // 숫자 키패드 설정
              mode="outlined"
              value={dong}
              onChangeText={(text) => setDong(text)}
            />
            <TextInput
              style={[styles.TextInputStyle, { flex: 1, marginLeft: 5 }]}
              outlineColor={COLORS.second}
              activeOutlineColor={COLORS.second}
              selectionColor={COLORS.primary}
              label="호수"
              keyboardType="numeric" // 숫자 키패드 설정
              mode="outlined"
              value={hosu}
              onChangeText={(text) => setHosu(text)}
            />
          </View>
        </PaperProvider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: COLORS.primary,
  },
  headLineArea: {
    flex: 2,
  },
  formArea: {
    flex: 3,
  },
  TextInputStyle: {
    backgroundColor: COLORS.white,
    color: COLORS.black,
    marginBottom: 15,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.second,
    borderRadius: 4,
    color: COLORS.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default Signup;
