import React from "react";
import { Flow } from "react-native-animated-spinkit";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PorpsBtn {
  onPress: () => void;
  label: string;
  isLoading?: boolean;
}

const Button = ({ onPress, label, isLoading }: PorpsBtn) => {
  return (
    <>
      {isLoading && (
        <Text style={styles.textSpinner}>
          <Flow size={30} color="#000" /> Enviando
        </Text>
      )}
      {!isLoading && (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Text style={styles.textBtn}>{label}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
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
    backgroundColor: "#fff",
    padding: 13,
    marginTop: 10,
  },
  textSpinner: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
});
export default Button;
