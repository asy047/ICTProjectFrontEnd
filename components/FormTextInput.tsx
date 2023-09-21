import { View, Text, StyleSheet } from "react-native";
import {
  HelperText,
  TextInput,
  Provider as PaperProvider,
} from "react-native-paper";
import React from "react";
import COLORS from "../constants/colors";

const FormTextInput = () => {
  const [name, setName] = React.useState("");
  const [aptName, setAptName] = React.useState("");
  const [dong, setDong] = React.useState("");
  const [hosu, setHosu] = React.useState("");
  const [carNum, setCarNum] = React.useState("");
  const [phoneNum, setPhoneNum] = React.useState("");

  const hasBlank = (text: string) => {
    return text.includes(" ");
  };

  return (
    <View>
      <TextInput
        style={styles.TextInputStyle}
        underlineColor={COLORS.second}
        activeUnderlineColor={COLORS.second}
        selectionColor={COLORS.primary}
        label="컴포넌트테스트"
        placeholder="성함을 입력해주세요."
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <HelperText
        style={[
          hasBlank(name)
            ? { color: COLORS.highlight }
            : { color: COLORS.second },
        ]}
        type={hasBlank(name) ? "error" : "info"}
        visible={name !== ""}
      >
        {hasBlank(name)
          ? "띄어쓰기를 제외하고 입력해주세요!"
          : "멋진 이름이네요!"}
      </HelperText>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputStyle: {
    marginTop: 10,
    backgroundColor: COLORS.white,
    color: COLORS.black,
  },
});

export default FormTextInput;
