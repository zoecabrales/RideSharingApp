import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({
  onPress,
  disabled,
  title,
  backgroundColor,
  customStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: backgroundColor },
        disabled && styles.disabledButton,
        customStyle,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
});

export default CustomButton;
