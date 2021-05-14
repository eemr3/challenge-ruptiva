import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PorpsBtn {
  onPress: () => void;
  label: string;
}

const Button = ({ onPress, label }: PorpsBtn) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.textBtn}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textBtn: {
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 13,
    marginTop: 10,
  },
});
export default Button;
