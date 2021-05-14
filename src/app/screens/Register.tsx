import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import FormUser from "../components/FormUser";
import ListUsers from "../components/ListUsers";

const Home: React.FC = () => {
  return (
    <ScrollView>
      <Text style={styles.textTitle}>Cadastro</Text>
      <View>
        <FormUser />
      </View>
      <View>
        <ListUsers />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
export default Home;
