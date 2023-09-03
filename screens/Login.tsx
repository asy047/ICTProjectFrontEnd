import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import {
  HelperText,
  TextInput,
  Provider as PaperProvider,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [disabled, setDisabled] = React.useState(true);
  const [inputs, setInputs] = React.useState({
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
  });
  useEffect(() => {
    inputs.name.isValid && inputs.phoneNum.isValid && inputs.carNum.isValid
      ? setDisabled(false)
      : setDisabled(true);
  }, [inputs.name, inputs.carNum, inputs.phoneNum]);
  const submitLogin = () => {
    Alert.alert(`입력하신 정보가 맞습니까?`, `맞다면 확인을 눌러주세요.`, [
      {
        text: "취소",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "확인",
        onPress: () => {
          console.log(inputs);
          navigation.reset({
            index: 0, // 스택에서 첫 번째 화면부터 시작
            routes: [{ name: "Home" }], // Home 화면만 포함
          });
        },
      },
    ]);
  };

  const inputChangeHandler = (
    inputIdentifier: string,
    enteredValue: string
  ) => {
    setInputs((curInputs) => {
      let isValid = true;
      return {
        ...curInputs, //inputIndentifier
        [inputIdentifier]: {
          value: enteredValue,
          isValid: isValid,
        }, //프로퍼티 동적 할당
      };
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 5,
        }}
      >
        <PaperProvider>
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
      <View style={{ flex: 7 }}>
        <Button
          onPress={() => {
            submitLogin();
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
  TextInputStyle: {
    marginTop: 10,
    backgroundColor: COLORS.white,
    color: COLORS.black,
  },
});

export default Login;
