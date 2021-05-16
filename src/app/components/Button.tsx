import React from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";

interface PorpsBtn {
  onPress: () => void;
  label: string;
  isLoading?: boolean;
}

const Button = ({ onPress, label, isLoading }: PorpsBtn) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        {isLoading && <ActivityIndicator size="small" color="#9e9e9e" />}
        {!isLoading && <Text style={styles.textBtn}>{label}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#25CAC6",
  },
  buttonBorderStyle: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "blue",
    borderStyle: "solid",
  },
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
