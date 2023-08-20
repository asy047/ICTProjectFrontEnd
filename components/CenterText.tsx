import { View, Text } from "react-native";
import React from "react";

const CenterText = (props) => {
  return (
    <Text
      style={[
        {
          textAlign: "center",
        },
        props.style,
      ]}
    >
      {props.text}
    </Text>
  );
};

export default CenterText;
