// components/Button.js
import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

interface ButtonProps {
  title: string;
  color?: string;
  textColor?: string;
  style?: any; // Replace 'any' with a proper type for your style object
  onPress: () => void;
}

const Button = ({ title, onPress, color, textColor, style }: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const filledBgColor = color || COLORS.primary;
  const outlinedColor = COLORS.white;
  const bgColor = color ? filledBgColor : outlinedColor;
  const setTextColor = textColor || (color ? COLORS.white : COLORS.primary);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? setTextColor || COLORS.primary : bgColor,
          borderColor: pressed ? setTextColor || COLORS.primary : filledBgColor,
        },
        style,
      ]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Text
        style={[
          styles.buttonText,
          { color: isPressed ? bgColor : setTextColor },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Button;
