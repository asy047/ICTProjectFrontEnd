import { View, Text, StyleSheet, Alert } from "react-native";
import {
  HelperText,
  TextInput,
  Provider as PaperProvider,
} from "react-native-paper";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";
import COLORS from "../constants/colors";
import Button from "../components/Button";

interface SignupData {
  aptName: string; // Apt. Name
  name: string; // Name
  phoneNum: Int16Array; // 전화번호     Login에도 사용
  carNum: string; // 자동차번호   Login에도 사용
  dong: Int16Array; // 동
  hosu: Int16Array; // 호수
}

const DATA = [
  { label: "세양청마루아파트", value: "세양청마루아파트" },
  { label: "마젤란아파트", value: "마젤란아파트" },
  { label: "리가아파트", value: "리가아파트" },
  { label: "목동블랙하이츠", value: "목동블랙하이츠" },
];

const Signup = () => {
  const [aptName, setAptName] = React.useState("");
  const [name, setName] = React.useState("");
  const [phoneNum, setPhoneNum] = React.useState("");
  const [carNum, setCarNum] = React.useState("");
  const [dong, setDong] = React.useState("");
  const [hosu, setHosu] = React.useState("");

  const [isValAptName, setIsValAptName] = React.useState(false);
  const [isValName, setIsValName] = React.useState(false);
  const [isValPhoneNum, setIsValPhoneNum] = React.useState(false);
  const [isValCarNum, setIsValCarNum] = React.useState(false);
  const [isValDong, setIsValDong] = React.useState(false);
  const [isValHosu, setIsValHosu] = React.useState(false);

  const [visible, setVisible] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);

  useEffect(() => {
    isValName && isValPhoneNum && isValCarNum && isValDong && isValHosu
      ? setDisabled(false)
      : setDisabled(true);
  }, [aptName, name, phoneNum, carNum, dong, hosu]);

  const hasBlank = (text: string) => {
    return !text.includes(" ");
  };
  const hasHypen = (text: string) => {
    return !text.includes("-");
  };
  const submitSignup = () => {
    isValAptName &&
    isValName &&
    isValPhoneNum &&
    isValCarNum &&
    isValDong &&
    isValHosu
      ? Alert.alert(`입력하신 정보가 맞습니까?`, `맞다면 확인을 눌러주세요.`, [
          {
            text: "취소",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "확인", onPress: () => console.log("OK Pressed") },
        ])
      : Alert.alert("입력하신 정보를 다시 한 번 확인해주세요.");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View
        style={{
          flex: 1,
          backgroundColor: "tomato",
        }}
      >
        <View style={styles.headLineArea}>
          <Text
            style={{
              fontSize: 36,
            }}
          >
            회원가입
          </Text>
        </View>
        <Text></Text>
      </View> */}
      <View
        style={{
          flex: 4,
        }}
      >
        <View
          style={[styles.TextInputStyle, { borderRadius: 4, marginBottom: 20 }]}
        >
          <RNPickerSelect
            placeholder={{
              label: "아파트를 선택해주세요.",
              value: null,
            }}
            onValueChange={(value) => {
              if (value === null) setIsValAptName(false);
              else {
                setIsValAptName(true);
                setAptName(value);
              }
            }}
            items={DATA}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
          />
        </View>

        <PaperProvider>
          {/* Name Input */}
          {/* <FormTextInput /> */}
          <TextInput
            style={styles.TextInputStyle}
            underlineColor={COLORS.second}
            activeUnderlineColor={COLORS.second}
            selectionColor={COLORS.primary}
            label="성함"
            placeholder="성함을 입력해주세요."
            value={name}
            onChangeText={(text) => {
              setIsValName(hasBlank(text));
              if (text === "") setIsValName(false);
              setName(text);
            }}
          />
          <HelperText
            style={[
              isValName
                ? { color: COLORS.second }
                : { color: COLORS.highlight },
            ]}
            type={isValName ? "info" : "error"}
            visible={name !== ""}
          >
            {isValName
              ? "멋진 이름이네요!"
              : "띄어쓰기를 제외하고 입력해주세요!"}
          </HelperText>
          {/* PhoneNumber Input */}
          <TextInput
            style={styles.TextInputStyle}
            underlineColor={COLORS.second}
            activeUnderlineColor={COLORS.second}
            selectionColor={COLORS.primary}
            label="휴대폰 번호"
            placeholder="숫자만 입력해주세요."
            keyboardType="numeric"
            value={phoneNum}
            onChangeText={(text) => {
              setIsValPhoneNum(hasHypen(text));
              if (text === "") setIsValPhoneNum(false);
              setPhoneNum(text);
            }}
          />
          <HelperText
            style={[
              isValPhoneNum
                ? { color: COLORS.second }
                : { color: COLORS.highlight },
            ]}
            type={isValPhoneNum ? "info" : "error"}
            visible={phoneNum !== ""}
          >
            {isValPhoneNum ? "좋아요!" : "-, 하이픈을 제외하고 입력해주세요!"}
          </HelperText>
          {/* CarNum Input */}
          <TextInput
            style={styles.TextInputStyle}
            underlineColor={COLORS.second}
            activeUnderlineColor={COLORS.second}
            selectionColor={COLORS.primary}
            placeholder="띄어쓰기를 제외하고 입력해주세요."
            label="자동차 번호"
            value={carNum}
            onChangeText={(text) => {
              setIsValCarNum(hasBlank(text));
              if (text === "") setIsValCarNum(false);
              setCarNum(text);
            }}
          />
          <HelperText
            style={[
              isValCarNum
                ? { color: COLORS.second }
                : { color: COLORS.highlight },
            ]}
            type={isValCarNum ? "info" : "error"}
            visible={carNum !== ""}
          >
            {isValCarNum ? "좋아요!" : "띄어쓰기를 제외하고 입력해주세요!"}
          </HelperText>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            {/* 빈커밋 */}
            <View style={{ flex: 1, marginRight: 5 }}>
              <TextInput
                style={[styles.TextInputStyle]}
                underlineColor={COLORS.second}
                activeUnderlineColor={COLORS.second}
                selectionColor={COLORS.primary}
                label="동"
                keyboardType="numeric" // 숫자 키패드 설정
                value={dong}
                onChangeText={(text) => {
                  setVisible(true);
                  if (text === "0") {
                    setIsValDong(false);
                  } else {
                    setDong(text);
                    setIsValDong(true);
                  }
                }}
              />
              <HelperText
                style={[
                  isValDong
                    ? { color: COLORS.second }
                    : { color: COLORS.highlight },
                ]}
                type={isValDong ? "info" : "error"}
                visible={visible}
              >
                {isValDong ? "좋아요!" : "0으로 시작할 수 없습니다."}
              </HelperText>
            </View>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <TextInput
                style={[styles.TextInputStyle]}
                underlineColor={COLORS.second}
                activeUnderlineColor={COLORS.second}
                selectionColor={COLORS.primary}
                label="호수"
                keyboardType="numeric" // 숫자 키패드 설정
                value={hosu}
                onChangeText={(text) => {
                  if (text === "0") {
                    setIsValHosu(false);
                  } else {
                    setHosu(text);
                    setIsValHosu(true);
                  }
                }}
              />
              <HelperText
                style={[
                  isValHosu
                    ? { color: COLORS.second }
                    : { color: COLORS.highlight },
                ]}
                type={isValHosu ? "info" : "error"}
                visible={visible}
              >
                {isValHosu ? "좋아요!" : "0으로 시작할 수 없습니다."}
              </HelperText>
            </View>
          </View>
        </PaperProvider>
      </View>
      <View
        style={{
          flex: 2,
        }}
      >
        <Button
          onPress={() => {
            submitSignup();
          }}
          disabled={disabled}
          title="완료"
          color={disabled ? COLORS.grey : COLORS.primary}
          style={{
            marginTop: 20,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
  },
  headLineArea: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  formArea: {
    flex: 3,
  },
  TextInputStyle: {
    marginTop: 10,
    backgroundColor: COLORS.white,
    color: COLORS.black,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
    borderBottomWidth: 0.5,
    borderColor: COLORS.second,
    borderRadius: 4,
    color: COLORS.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderColor: COLORS.second,
    borderRadius: 4,
    color: COLORS.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Signup;
