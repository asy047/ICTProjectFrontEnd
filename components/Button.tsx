import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../constants/colors";

const Button = (props) => {
  //  props = [ filled, color, textColor ]
  const filledBgColor = props.color || COLORS.primary;
  const outlinedColor = COLORS.white;

  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? COLORS.white : COLORS.primary;

  const setTextColor = props.textColor ? props.textColor : textColor;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...{ borderColor: filledBgColor },
        ...props.style,
      }}
    >
      <Text
        style={{ fontSize: 18, ...{ color: setTextColor }, fontWeight: "800" }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
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
});

export default Button;
