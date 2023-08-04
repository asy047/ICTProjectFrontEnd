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
  name: string; // Name
  aptName: string; // Apt. Name
  dong: Int16Array; // 동
  hosu: Int16Array; // 호수
  carNum: string; // 자동차번호   Login에도 사용
  phoneNum: Int16Array; // 전화번호     Login에도 사용
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

  const [isValName, setIsValName] = React.useState(false);
  const [isValPhoneNum, setIsValPhoneNum] = React.useState(false);
  const [isValCarNum, setIsValCarNum] = React.useState(false);
  const [isValDong, setIsValDong] = React.useState(false);
  const [isValHosu, setIsValHosu] = React.useState(false);

  const [disabled, setDisabled] = React.useState(true);

  useEffect(() => {
    !isValName && !isValPhoneNum && !isValCarNum
      ? setDisabled(false)
      : setDisabled(true);
    console.log(disabled, isValCarNum);
  }, [name, phoneNum, carNum]);

  const hasBlank = (text: string) => {
    return text.includes(" ");
  };
  const hasHypen = (text: string) => {
    return text.includes("-");
  };
  const submitSignup = () => {
    isValName && isValPhoneNum && isValCarNum
      ? Alert.alert(`입력하신 정보가 맞습니까?`, `성함: ${name}`)
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
            onValueChange={(value) => setAptName(value)}
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
              setName(text);
            }}
          />
          <HelperText
            style={[
              isValName
                ? { color: COLORS.highlight }
                : { color: COLORS.second },
            ]}
            type={isValName ? "error" : "info"}
            visible={name !== ""}
          >
            {isValName
              ? "띄어쓰기를 제외하고 입력해주세요!"
              : "멋진 이름이네요!"}
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
              setPhoneNum(text);
            }}
          />
          <HelperText
            style={[
              isValPhoneNum
                ? { color: COLORS.highlight }
                : { color: COLORS.second },
            ]}
            type={isValPhoneNum ? "error" : "info"}
            visible={phoneNum !== ""}
          >
            {isValPhoneNum ? "-, 하이픈을 제외하고 입력해주세요!" : "좋아요!"}
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
              setCarNum(text);
            }}
          />
          <HelperText
            style={[
              isValCarNum
                ? { color: COLORS.highlight }
                : { color: COLORS.second },
            ]}
            type={isValCarNum ? "error" : "info"}
            visible={carNum !== ""}
          >
            {isValCarNum ? "띄어쓰기를 제외하고 입력해주세요!" : "좋아요!"}
          </HelperText>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            {/* 빈커밋 */}
            <TextInput
              style={[styles.TextInputStyle, { flex: 1, marginRight: 5 }]}
              underlineColor={COLORS.second}
              activeUnderlineColor={COLORS.second}
              selectionColor={COLORS.primary}
              label="동"
              keyboardType="numeric" // 숫자 키패드 설정
              value={dong}
              onChangeText={(text) => setDong(text)}
            />
            <TextInput
              style={[styles.TextInputStyle, { flex: 1, marginLeft: 5 }]}
              underlineColor={COLORS.second}
              activeUnderlineColor={COLORS.second}
              selectionColor={COLORS.primary}
              label="호수"
              keyboardType="numeric" // 숫자 키패드 설정
              value={hosu}
              onChangeText={(text) => setHosu(text)}
            />
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
