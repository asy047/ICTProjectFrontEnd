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

const DATA = [
  { label: "세양청마루아파트", value: "세양청마루아파트" },
  { label: "마젤란아파트", value: "마젤란아파트" },
  { label: "리가아파트", value: "리가아파트" },
  { label: "목동블랙하이츠", value: "목동블랙하이츠" },
];

const Signup = (navigation) => {
  const someData = "Hello my Mr. Yesterday";
  const sendDataToApp = () => {
    navigation.navigate("App", { someData }); // 데이터를 Welcome 화면으로 전달
  };
  const [inputs, setInputs] = React.useState({
    aptName: {
      value: "",
      isValid: false,
    },
    name: {
      value: "",
      isValid: false,
    },
    phoneNum: {
      value: "",
      isValid: false,
    },
    carNum: {
      value: "",
      isValid: false,
    },
    dong: {
      value: "",
      isValid: false,
    },
    hosu: {
      value: "",
      isValid: false,
    },
  });

  // 유지 보수를 위한 유효성 검사 캡슐화
  const validateName = (text: string) => {
    return !text.includes(" ");
  };

  const validatePhoneNum = (text: string) => {
    return !text.includes("-");
  };

  const validateCarNum = (text: string) => {
    return !text.includes(" ");
  };
  const validateDong = (text: string) => {
    return !(text === "0");
  };
  const validateHosu = (text: string) => {
    return !(text === "0");
  };

  // 보편적인 방법으로 Input 처리하기.
  //enteredValue는 ReactNative가 준 값
  const inputChangeHandler = (
    inputIdentifier: string,
    enteredValue: string
  ) => {
    setInputs((curInputs) => {
      let isValid = true;

      switch (inputIdentifier) {
        case "name":
          isValid = validateName(enteredValue);
          break;
        case "phoneNum":
          isValid = validatePhoneNum(enteredValue);
          break;
        case "carNum":
          isValid = validateCarNum(enteredValue);
          break;
        case "dong":
          isValid = validateDong(enteredValue);
          break;
        case "hosu":
          isValid = validateHosu(enteredValue);
          break;
        default:
          break;
      }
      return {
        ...curInputs, //inputIndentifier
        [inputIdentifier]: {
          value: enteredValue,
          isValid: isValid,
        }, //프로퍼티 동적 할당
      };
    });
  };

  const [disabled, setDisabled] = React.useState(true);

  useEffect(() => {
    inputs.aptName.isValid &&
    inputs.name.isValid &&
    inputs.phoneNum.isValid &&
    inputs.carNum.isValid &&
    (inputs.dong.isValid || inputs.hosu.isValid)
      ? setDisabled(false)
      : setDisabled(true);
    console.log(disabled);
  }, [
    inputs.aptName,
    inputs.name,
    inputs.carNum,
    inputs.phoneNum,
    inputs.dong,
    inputs.hosu,
  ]);

  const submitSignup = () => {
    Alert.alert(`입력하신 정보가 맞습니까?`, `맞다면 확인을 눌러주세요.`, [
      {
        text: "취소",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "확인", onPress: () => console.log(inputs) },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
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
            onValueChange={inputChangeHandler.bind(this, "aptName")} //bind로 객체 자체를 불러오기
            items={DATA}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
          />
        </View>

        <PaperProvider>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1, marginRight: 5 }}>
              <TextInput
                style={[styles.TextInputStyle]}
                underlineColor={COLORS.second}
                activeUnderlineColor={COLORS.second}
                selectionColor={COLORS.primary}
                label="동"
                keyboardType="numeric" // 숫자 키패드 설정
                value={inputs.dong.value}
                onChangeText={inputChangeHandler.bind(this, "dong")}
              />
              <HelperText
                style={[
                  inputs.dong.isValid
                    ? { color: COLORS.second }
                    : { color: COLORS.highlight },
                ]}
                type={inputs.dong.isValid ? "info" : "error"}
                visible={inputs.dong.value !== ""}
              >
                {inputs.dong.isValid ? "좋아요!" : "0으로 시작할 수 없습니다."}
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
                value={inputs.hosu.value}
                onChangeText={inputChangeHandler.bind(this, "hosu")}
              />
              <HelperText
                style={[
                  inputs.hosu.isValid
                    ? { color: COLORS.second }
                    : { color: COLORS.highlight },
                ]}
                type={inputs.hosu.isValid ? "info" : "error"}
                visible={inputs.hosu.value !== ""}
              >
                {inputs.hosu.isValid ? "좋아요!" : "0으로 시작할 수 없습니다."}
              </HelperText>
            </View>
          </View>
          {/* Name Input */}
          {/* <FormTextInput /> */}
          <TextInput
            style={styles.TextInputStyle}
            underlineColor={COLORS.second}
            activeUnderlineColor={COLORS.second}
            selectionColor={COLORS.primary}
            label="성함"
            placeholder="성함을 입력해주세요."
            value={inputs.name.value}
            onChangeText={inputChangeHandler.bind(this, "name")}
          />
          <HelperText
            style={[
              inputs.name.isValid
                ? { color: COLORS.second }
                : { color: COLORS.highlight },
            ]}
            type={inputs.name.isValid ? "info" : "error"}
            visible={inputs.name.value !== ""}
          >
            {inputs.name.isValid
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
            value={inputs.phoneNum.value}
            onChangeText={inputChangeHandler.bind(this, "phoneNum")}
          />
          <HelperText
            style={[
              inputs.phoneNum.isValid
                ? { color: COLORS.second }
                : { color: COLORS.highlight },
            ]}
            type={inputs.phoneNum.isValid ? "info" : "error"}
            visible={inputs.phoneNum.value !== ""}
          >
            {inputs.phoneNum.isValid
              ? "좋아요!"
              : "-, 하이픈을 제외하고 입력해주세요!"}
          </HelperText>
          {/* CarNum Input */}
          <TextInput
            style={styles.TextInputStyle}
            underlineColor={COLORS.second}
            activeUnderlineColor={COLORS.second}
            selectionColor={COLORS.primary}
            placeholder="띄어쓰기를 제외하고 입력해주세요."
            label="자동차 번호"
            value={inputs.carNum.value}
            onChangeText={inputChangeHandler.bind(this, "carNum")}
          />
          <HelperText
            style={[
              inputs.carNum.isValid
                ? { color: COLORS.second }
                : { color: COLORS.highlight },
            ]}
            type={inputs.carNum.isValid ? "info" : "error"}
            visible={inputs.carNum.value !== ""}
          >
            {inputs.carNum.isValid
              ? "좋아요!"
              : "띄어쓰기를 제외하고 입력해주세요!"}
          </HelperText>
        </PaperProvider>
      </View>
      <View style={{ marginBottom: 20 }}>
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
